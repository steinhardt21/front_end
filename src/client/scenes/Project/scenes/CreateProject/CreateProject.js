/**
 *  Page where the user create a new project
 */
import React, { Fragment, useEffect, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAllAnalysisQuestions, getAllDevelopmentStages, getAllIndustries } from '../../../../../actions/complementaryInfo'
import { createProject } from '../../../../../actions/project'
import LogoSymbol from '../../../../../resources/img/logo_nucleus_symbol.svg'
import Head from '../../../../components/Head'
import Menu from '../../../../components/Menu'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import PopupCreateProject from './components/PopupCreateProject'

const analysisQuestion = {}

export const CreateProject = ({createProject, project, history, getAllIndustries, complementaryInfo, getAllDevelopmentStages, getAllAnalysisQuestions}) => {

    const [modalShow, setModalShow] = useState(false)

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onChangeAnalysisQuestion = (e) => (analysisQuestion[e.target.name] = e.target.value)


    const [formData, setFormData] = useState({
        Name:'',
        Description:'',
        Headquarter: '',
        Industry:'',
        Development_Stage:''
    })

        
    const onSubmit = e => {
        e.preventDefault()
        setModalShow(true)

        // console.log(analysisQuestion)
        // formData['Analysis_Question'] = analysisQuestion
        // console.log(formData)

        // createProject(formData, history);
        

      //  history.push('/newversion/create-candidature')
    }

    function LaunchCreateProject() {
      console.log(analysisQuestion)
      formData['Analysis_Question'] = analysisQuestion
      console.log(formData)
      createProject(formData, history)
      history.push('/newversion/create-candidature')
    }

    useEffect(() => {
        getAllIndustries();
        getAllDevelopmentStages();
        getAllAnalysisQuestions();        
    }, [getAllIndustries, getAllDevelopmentStages, getAllAnalysisQuestions])

    // useEffect(() => {
    //     console.log(project.project)
    //     if(project != null && project.project != null) history.push(`/newversion/create-candidature/${project.project._id}`)

    // }, [project.loading])

    const {
        Name, 
        Description,
        Headquarter,
        Industry,
        Development_Stage
    } = formData;

    return (
        <div>
            {/** START - Definition of the upper part of the page */}
                <Head />
                <Navbar />
                <Menu />
            {/** END */}

            <Container fluid id="createProjectBackground">
                <Row>
                    <div className="col-10 offset-1 col-md-6 offset-md-3  text-white" id="containerFormCreateProject">

                        {/** Title page */}
                        <h1 className="text-center text-white display-4">Aggiugi un nuovo progetto</h1>
                       
                        <Form  onSubmit = {e=>onSubmit(e)}>
                            <Form.Group>
                                <Form.Label>Nome del progetto*</Form.Label>
                                <Form.Control name="Name" type="text" value={Name} placeholder="Nome progetto" onChange={e => onChange(e)} required/> 
                                <br />
                                <Form.Label>Descrizione del progetto imprenditoriale (300 caratteri)*</Form.Label>
                                <Form.Control as="textarea" cols={30} rows={5} placeholder='Descrizione del progetto imprenditoriale' name="Description" value={Description} onChange={e => onChange(e)} required maxlength="300"/>
                                <br />
                                {/* <Form.Label>Città*</Form.Label>
                                <Form.Control type="text" placeholder="Città" name="Headquarter" value={Headquarter} onChange={e => onChange(e)} required />
                                <br /> */}
                                <Form.Label>Settore* </Form.Label>
                                <Form.Control as="select" value={Industry} name="Industry" onChange={e => onChange(e)} required>
                                 {/* { (industries === null) 
                                                        ? 
                                                            (<option value={null}> </option>) 
                                                        : 
                                                            
                                                            (loadingIndustries || (industries.Industry === null) 
                                                                                                 ? 
                                                                                                     (<option value={null}> </option>) 
                                                                                                 : 
                                                                                                     (<option value={industries.Industry._id}>{industries.Industry.Industry}</option>)
                                                            )
                                    } */}
                                    <option value="">--Seleziona industria--</option>
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
                                <Form.Label>Fase di sviluppo*</Form.Label>
                                <Form.Control as="select" value={Development_Stage} name="Development_Stage" onChange={e => onChange(e)} required>
                                    <option value="">--Stadio sviluppo --</option>
                                    {(complementaryInfo.loading) ? (<option> </option>) 
                                                                 : 
                                                                   (complementaryInfo.dev_stages.map((dev_stage, index) => {
                                                                        //if(!((industries != null)&&(industries.Industry != null)&&(Industry === industry._id)))
                                                                        if((Development_Stage != '')&&(Development_Stage === dev_stage._id))
                                                                        {return <option selected="selected" key={index} value={dev_stage._id} id={dev_stage._id}>{dev_stage.Development_Stage}</option> }
                                                                        else
                                                                        {return <option key={index} value={dev_stage._id} id={dev_stage._id}>{dev_stage.Development_Stage}</option> }
                                                                    }))
                                    }
                                </Form.Control>
                                {(complementaryInfo.loading) ? <p> </p>  : (complementaryInfo.analysis_questions.map((analysis_question, index) => (
                                        <Fragment>
                                            <br />
                                            <Form.Label id={index}>{analysis_question.Question} {'(500 caratteri)'}</Form.Label>
                                            <Form.Control as="textarea" rows={5} placeholder="Scrivi ... " name={analysis_question._id} onChange={e => onChangeAnalysisQuestion(e)} maxlength="500" />
                                        </Fragment>
                                )))
                                }

                            </Form.Group>
                             
                            <div className="row">
                                {/* <div className="col-3 offset-2">
                                    <button type="submit" className="btn border-white text-white creationProjectButton rounded-pill">Salva una bozza</button>
                                </div> */}
                                {/* <div className="col-3 text-center">
                                    <span className="logo_nucleus_symbol"></span>
                                    <img src={LogoSymbol} style={{ width: '100px'}} alt='Loading...' />
                                </div> */}
                                <div className="col-4 offset-4 text-center">
                                    <button type="submit" className="btn border-white text-white creationProjectButton rounded-pill">Procedi</button>
                                    <PopupCreateProject 
                                      show= {modalShow}
                                      onHide= {() => setModalShow(false)}
                                      clickMe= {() => LaunchCreateProject()}
                                    />
                                </div>

                                {/* <Link className="btn btn-light my-1" to="/newversion/create-candidature">Go Back</Link> */}
                            </div>
                        </Form>

                    </div>
                </Row>
                <Footer />
            </Container>


            {/* <Footer /> */}
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    project: state.project,
    complementaryInfo: state.complementaryInfo
})

export default connect(mapStateToProps, {createProject, getAllIndustries, getAllDevelopmentStages, getAllAnalysisQuestions})(withRouter(CreateProject))
