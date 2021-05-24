/**
 * Page where the user can create his profile 
 * 
 * 
 * HOW I MANAGED THE DATE: https://reactdatepicker.com/ 
 */

import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { DateUtils } from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateUser } from '../../../../../actions/auth'
import { getAllIndustries, getAllPositions } from '../../../../../actions/complementaryInfo'
import { createProfile, getCurrentProfile, getProfileIndustries } from '../../../../../actions/profile'
import Footer from '../../../../components/Footer'
import Head from '../../../../components/Head'
import Menu from '../../../../components/Menu'
import Navbar from '../../../../components/Navbar'

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}



export const CreateProfile = ({createProfile, history, auth:{user}, getCurrentProfile, profile:{profile, loading, industries, loadingIndustries}, updateUser, getAllPositions, complementaryInfo, getAllIndustries, getProfileIndustries, match }) => {
    

    const [myDate, setMyDate] = useState(new Date(1996, 1, 1))
    function handleChange(newDate)
    {
        setMyDate(newDate)
        console.log(myDate)
    }

    const onChange = e => setProfileFormData({...profileFormData, [e.target.name]: e.target.value});
    const onChangeUserData = e => setUserFormData({...userFormData,[e.target.name]: e.target.value});
    const onChangeDate = date => { 
                                setStartDate(date);
                                profileFormData.Date_Of_Birth = date;
    }

    const onSubmit = e => {
        e.preventDefault();
        profileFormData.Date_Of_Birth = myDate;  
        
        console.log(profileFormData)

        updateUser(userFormData);
        createProfile(profileFormData, history, match.params.id)

        
    }

    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        getCurrentProfile();
        getAllPositions();
        getAllIndustries();

        if(profile!=null) {getProfileIndustries(profile._id)}
        
        
        if(user!=null){
            setUserFormData({
                Name: user.Name,
                Surname: user.Surname,
                Email: user.Email
            })
        }

        setProfileFormData({
           
            City_Living: (profile === null) ? '' : (loading || !profile.City_Living ? '' : profile.City_Living),
            Biography: (profile === null) ? '' : (loading || !profile.Biography ? '' : profile.Biography),
            Position: (profile === null) ? '' : (loading || (profile.Position === null) ? '' : (profile.Position._id)),
            Industry: (industries === null) ? '' : (loadingIndustries || (industries === null) ? '' : (industries.Industry._id)),
            Skills: (profile === null) ? '' : (loading || (profile.Skills === null) ? '' : (profile.Skills.join())),
            Telephone: (profile === null) ? '' : (loading || !profile.Telephone ? '' : profile.Telephone)              
        })

        if((profile !== null)&&(!loading)&&(profile.Date_Of_Birth)){
             setMyDate(new Date((moment(profile.Date_Of_Birth)).format('d/MM/yyyy'))) 
            console.log('birth',new Date((moment(profile.Date_Of_Birth)).format('d/MM/yyyy')))}

    },[getAllPositions, getAllIndustries, getCurrentProfile,getProfileIndustries, loading, loadingIndustries])

    const [userFormData, setUserFormData] = useState({
        Name: '',
        Surname: '',
        Email: ''
    })

    const [profileFormData, setProfileFormData] = useState({
        Date_Of_Birth: '',
        City_Living: '',
        Biography:'',
        Position: '',
        Industry:'',
        Skills:'',
        Telephone:''
    })

    const {Name, Surname, Email} = userFormData;
    const {Date_Of_Birth, City_Living, Biography, Position, Industry, Skills, Telephone} = profileFormData;
    const FORMAT = 'dd/MM/yyyy';

    return (
        <div >
            <Head />
            <Navbar />
            <Menu />
            <Container id="containerFirstLanding" fluid>
                <Row>
                    <div className="col-10 offset-1 col-md-6 offset-md-3 " id="containerFormCreateProject">
                         <h1 className="text-center text-white display-4">Il mio profilo</h1>
                        <Form onSubmit = {e => onSubmit(e)}>
                            <Form.Group>
                                <Form.Label className="text-white">Nome*</Form.Label>
                                <Form.Control name="Name" type="text" value={Name} placeholder="Nome" onChange={e => onChangeUserData(e)} required /> 
                                <br />
                                <Form.Label className="text-white">Cognome*</Form.Label>
                                <Form.Control name="Surname" type="text" value={Surname} placeholder="Cognome" onChange={e => onChangeUserData(e)} required /> 
                                <br />
                                <Form.Label className="text-white">Email*</Form.Label>
                                <Form.Control name="Email" type="email" value={Email} placeholder="Enter email" onChange={e => onChangeUserData(e)} required />
                                <br />
                                <Form.Label className="mr-3 text-white">Data di nascita*  </Form.Label>
                                {/* <DayPickerInput  
                                    formatDate={formatDate}
                                    format={FORMAT}
                                    parseDate={parseDate}
                                    placeholder={`${dateFnsFormat(myDate, FORMAT)}`}
                                    
                                    dayPickerProps={{
                                        month: myDate,
                                      }}
                                      name="Date_Of_Birth"
                                    onDayChange={e => handleChange(e)} /> */}
                                <br />
                                <br/>
                                <Form.Label className="text-white">Telefono*</Form.Label>
                                <Form.Control type="text" placeholder="Telefono" name="Telephone" value={Telephone} onChange={e => onChange(e)} minlength='10' required/>
                                <br />
                                <Form.Label className="text-white">Città*</Form.Label>
                                <Form.Control type="text" placeholder="Città" name="City_Living" value={City_Living} onChange={e => onChange(e)} required />
                                <br />
                                <Form.Label className="text-white">Professione*</Form.Label>
                                <Form.Control as="select" value={Position} name="Position" onChange={e => onChange(e)} required >
                                     <option value="">--Seleziona professione --</option>
                                    {
                                        (complementaryInfo.loading)  
                                            ? 
                                                (<option> </option>) 
                                            : 
                                                ((complementaryInfo.positions.map((position, index) => {
                                                    if((Position != '')&&(Position === position._id))
                                                    {
                                                        return <option selected="selected" value={position._id} id={position._id} key={index}>{position.Position}</option>
                                                    }
                                                    else
                                                    {return <option value={position._id} id={position._id} key={index}>{position.Position}</option>}
                                                })
                                        ))
                                    } 
                                </Form.Control>
                                <br />
                                <Form.Label className="text-white">Competenze* (es. analisi dati, js, project management, team work, ecc.) </Form.Label>
                                <Form.Control type="text" placeholder="Competenze" name="Skills" value={Skills} onChange={e => onChange(e)}  required/>
                                <br />
                                <Form.Label className="text-white">Settore di interesse*</Form.Label>
                                 <Form.Control as="select" value={Industry} name="Industry" onChange={e => onChange(e)} required>
                                      <option value="">--Seleziona settore --</option>
                                    {(complementaryInfo.loading) ? (<option> </option>) 
                                                                 : 
                                                                   (complementaryInfo.industries.map((industry, index) => {
                                                                        //if(!((industries != null)&&(industries.Industry != null)&&(Industry === industry._id)))
                                                                        if((Industry != '')&&(Industry === industry._id))
                                                                        {return <option selected="selected" key={index} value={industry._id} id={industry._id}>{industry.Industry}</option> }
                                                                        else
                                                                        {return <option key={index} value={industry._id} id={industry._id}>{industry.Industry}</option> }
                                                                    }))
                                    }
                                </Form.Control> 
                                <br />
                                <Form.Label className="text-white">Breve bio</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Parlaci di te" name="Biography" value={Biography} onChange={e => onChange(e)} maxlength='200'/>
                                <br />
                            </Form.Group>
                            <div className="row">
                                <div className="col-10 offset-1 offset-md-4 col-md-4 text-center">
                                    <button type="submit" className="btn border-white text-white creationProjectButton rounded-pill">Salva</button>
                                </div>
                            </div>
                        </Form> 
                    </div>
                </Row>
                
            </Container>
            <Footer />
        </div>
    )
}

 const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    complementaryInfo: state.complementaryInfo
})

export default connect(mapStateToProps, {createProfile, getCurrentProfile, updateUser, getAllPositions, getAllIndustries, getProfileIndustries})(withRouter(CreateProfile)) 

