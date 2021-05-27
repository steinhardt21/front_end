/**
 * 
 * 
 */

import React, {useEffect, useState} from 'react'
import {CSVLink, CSVDownload} from 'react-csv'
import {connect} from 'react-redux'

import Spinner from '../../../resources/differentResources/Spinner'
import LayoutBodyAdmin from "../../components/LayoutAdminBody"
import LayoutHeaderAdmin from "../../components/LayoutAdmin"
import {getUsersGeneralData, getCallData, getCandidaturesData} from '../../../actions/admin'
import user from '../../../reducers/user'


const myCSV = [['ID', 'Data Creazione', 'Nome', 'Cognome', 'Email', 'Telefono', 'Anno nascita', 'Città', 'Regione', 'Professione', 'Settore', 'Competenze', 'Biografia', 'N. Progetti Creati', 
'N. Call create', 'N. Candidature inviate', 'N. Candidature accettate', 'N. Candidature inviate in attesa', 'N. Candidature inviate rifiutate' ]];

const secondCSV = [['ID','Data Creazione', 'Nome progetto', 'Founder Email', 'Descrizione progetto', 'Settore', 'Fase di sviluppo', 'Figura ricercata', 'Competenze ricercate',
 'Tipo di collaborazione', 'Vincolo geografico', 'Dove', 'Status call', 'Numero candidature',  'N. Candidature accettate', 'N. Candidature  in attesa', 'N. Candidature inviate rifiutate']]

 const thirdCSV = [['ID','Data Creazione', 'Cover letter', 'ID Progetto', 'Progetto', 'ID Call', 'Vincolo geografico', 'Status', 'Data Aggiornamento Stato', 'Motivazione rifiuto', 'Nome Team member' , 'Cognome Team member',
'Email Team Member', 'Telefono Team Member', 'Età Team Member', 'Città Team Member', 'Professione Team member', 'Settore Team Member', 'Competenze Team Member', 
'Biografia Team Member', 'Nome Founde', 'Cognomer Founder', 'Email Founder', 'Telefono Founder', 'Età Founder', 'Città Founder', 'Professione Founder',
'Settore Founder', 'Competenze Founder', 'Biografia Founder']]


export const DonwnloaDocuments = ({getUsersGeneralData, getCallData, getCandidaturesData, admin: {usersGeneralData, callsGeneralData, candidaturesGeneralData}}) => {
    useEffect(() => {
        getUsersGeneralData()
        getCallData()
        getCandidaturesData()        
    }, [getUsersGeneralData, getCallData, getCandidaturesData])

    const [usersList, setUsersList] = useState([])
    const [callsList, setCallsList] = useState([])
    const [candidaturesList, setCandidaturesList] = useState([])

  return (
    <>
      <LayoutHeaderAdmin />
      <LayoutBodyAdmin>

        <div className="row">                            
          <div className="col-12">                                
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Download dati</h6><br />
                    <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" 
                            onClick={() => {
                                console.log('USERS')
                                console.log('usersGeneralData', usersGeneralData)
                                
                                if(usersGeneralData !== null && usersGeneralData.length != 0) {

                                    
                                    usersGeneralData.map( (user) => 
                                        {
                                            if( typeof user.Profile === 'undefined') user.Profile = {
                                                Telephone: '',
                                                Date_Of_Birth: '',
                                                City_Living: '',
                                                Position: '',
                                                Skills: '',
                                                Biography: ''
                                            }

                                            if( typeof user.Industry === 'undefined') user.Industry = {
                                                Industry: ''
                                            }
                                            myCSV.push([user._id, user.Date, user.Name, user.Surname, user.Email, user.Profile.Telephone || '',  user.Profile.Date_Of_Birth || '', 
                                    user.Profile.City_Living || '', '', user.Profile.Position.Position, user.Industry.Industry || '', user.Profile.Skills || '', user.Profile.Biography || '', user.Projects,
                                user.CallCreated, user.numberCandidatures, user.numberCandidaturesAccepted, user.numberCandidaturesWaiting, user.numberCandidaturesRejected ])}
                                
                                ) 
                                    
                                // console.log('mycsv', myCSV)
                                setUsersList(myCSV) 

                                }
                                                 
                                }
                            }
                        >
                        <i className="fas fa-download fa-sm text-white-50"> </i>                                  
                        <CSVLink data={usersList} className="text-white">Download Dati User </CSVLink>            
                    </button>
                    <br />
                    <br />
                    <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" 
                            onClick={() => {
                                console.log('CALL Sec')
                                console.log('callsGeneralData', callsGeneralData)
                                
                                if(callsGeneralData !== null && callsGeneralData.length != 0) {
                                    console.log('CALL SECOND')
                                    
                                    callsGeneralData.map( (call) => 
                                        {
                                            secondCSV.push([call._id, call.Date_Inserted, call?.Project.Name, call?.Founder.Email, call?.Project.Description, call?.Industry.Industry,
                                            call?.Project.Development_Stage.Development_Stage, call?.Position.Position, call?.Skills.join(), call?.Type_Colaboration,  call?.Presence_Required, call?.City_Presence_Required,
                                            call?.Status, call?.numberCandidatures, call?.numberCandidaturesAccepted, call?.numberCandidaturesWaiting, call?.numberCandidaturesRejected])}
                                
                                ) 
                                    
                                console.log('secondCSV', secondCSV)
                                setCallsList(secondCSV) 

                                }
                                    console.log('end')             
                                }
                            }
                        >
                        <i className="fas fa-download fa-sm text-white-50"> </i>                                  
                        <CSVLink data={callsList} className="text-white">Download Dati Call </CSVLink>            
                    </button>
                    <br />
                    <br />
                    <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" 
                            onClick={() => {
                                
                        if(candidaturesGeneralData !== null && candidaturesGeneralData.length != 0) {
                            candidaturesGeneralData.map( (candidature) => 
                                {   
                                    thirdCSV.push(
                                        [
                                            candidature._id, 
                                            candidature.Date_Inserted,
                                            candidature.Motivational_Letter.replace(/['"]+/g, ''),
                                            candidature.Call_Project.Project._id,
                                            candidature.Call_Project.Project.Name,
                                            candidature.Call_Project._id,
                                            (candidature.Call_Project.City_Presence_Required ? 'Si' : 'No'), 
                                            candidature.Status, candidature.Date_Closed, (candidature.Feedback ? candidature.Feedback : ''), 
                                            candidature?.User.Name, 
                                            candidature?.User.Surname, 
                                            candidature?.User.Email,
                                            candidature?.ProfileCandidate?.Telephone,
                                            candidature?.ProfileCandidate?.Date_Of_Birth, 
                                            candidature?.ProfileCandidate?.City_Living, 
                                            candidature?.ProfileCandidate?.Position?.Position, 
                                            candidature?.IndustryCandidate.Industry, 
                                            candidature?.ProfileCandidate?.Skills, 
                                            candidature?.ProfileCandidate?.Biography,
                                            candidature?.OwnerUser?.Name, 
                                            candidature?.OwnerUser?.Surname,
                                            candidature?.OwnerUser?.Email, 
                                            candidature?.OwnerProfile?.Telephone, 
                                            candidature?.OwnerProfile?.Date_Of_Birth, 
                                            candidature?.OwnerProfile?.City_Living, 
                                            candidature?.OwnerProfile?.Position.Position, 
                                            candidature?.OwnerIndustry?.Industry, 
                                            candidature?.OwnerProfile?.Skills,
                                            candidature?.OwnerProfile?.Biography]
                                            )
                                }
                        ) 
                                    
                                console.log('mycsv', thirdCSV)
                                setCandidaturesList(thirdCSV) 

                                }
                                                 
                                }
                            }
                        >
                        <i className="fas fa-download fa-sm text-white-50"> </i>                                  
                        <CSVLink data={candidaturesList} className="text-white">Download Dati Candidature </CSVLink>            
                    </button>  
                                                         

                </div>

            </div>
        </div>
    </div> 
      </LayoutBodyAdmin>  
    </>
  )
}
const mapStateToProps = state => ({
    admin: state.admin,
    auth: state.authCollaborator,
    project: state.project
})

export default connect(mapStateToProps, {getUsersGeneralData, getCallData, getCandidaturesData})(DonwnloaDocuments)
