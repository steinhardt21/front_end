import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {updateCallStatus} from '../../../../../../actions/candidacy'
import Popup from './PopupCandidature'
import PopupRejected from './PopupCandidatureReject'
import PopupRejectedFeedback from './PopupCandidatureRejectFeedback'
import PopupCandidatureAcceptedCalendar from './PopupCandidatureAcceptedCalendar'


  /**
   *
   * guideline graph: https://medium.com/swlh/data-visualization-with-react-chart-js-be5e238bc302
   */
export const CandidateCall = ({candidate, updateCallStatus, callId, history}) => {

    const [modalShow, setModalShow] = useState(false);
    const [modalShowRejected, setModalShowRejected] = useState(false);
    const [modalShowRejectedFeedback, setModalShowRejectedFeedback] = useState(false);
    const [modalShowAcceptedCalendar, setModalShowAcceptedCalendark] = useState(false);

    const [feedbackForm, setFeebackForm] = useState('')

    const refreshPage = ()=>{
        window.location.reload(true);  }

        
    function updateAccepted()
    {
        console.log('E stata accettata')
    }
    useEffect(()=>{
        console.log(callId)
    }, [callId])
    
    function updateFeedback(newData){
        setFeebackForm(newData)
    }

    return (
        <Fragment>
            {/* {console.log(project.Project)} */}

                <div id="cardProjectOutside" className="card  shadow-lg p-3 mb-5 bg-white ">
                    <div id="cardProjectInside" className="row no-gutters text-white mb-3">
                        <div className="col-md-4 text-center">
                        {/* <img src="image.jpg" className="card-img" alt="..." /> */}
                            <h2>{}</h2>


                            {/* /**
                                - mettere sopra quelle accettate
                                - mettere in fondo quelle rifiutate
                             */}

                            {
                                candidate.Status === 'Valutazione' ? (
                                    <Fragment>
                                        <button onClick={() => {
                                            // updateCallStatus({idCandidature: candidate._id, Status: 'Accettato'}
                                            setModalShow(true)
                                            }} style={{width:'140px'}} type="button" className="btn btn-success btn-lg">Accetta</button>
                                        
                                        <Popup
                                            show={modalShow}
                                            clickMe={() => {   // updateAccepted()
                                                                setModalShow(false)
                                                                 setModalShowAcceptedCalendark(true)
                                                                // createCandidature(formData)
                                                                // history.push('/create-profile')
                                                            }
                                                    }
                                            onHide={() => setModalShow(false)}
                                        />
                                         <PopupCandidatureAcceptedCalendar
                                            
                                            show={modalShowAcceptedCalendar}
                                            clickMe={() => {   // updateAccepted()

                                                                console.log("hello")
                                                                updateCallStatus({idCandidature: candidate._id, Status: 'Accettato', Feedback: 'Accettato'})
                                                                window.location.assign('https://forms.gle/3NZCA5PNMJ8ffgpB7')
                                                                // refreshPage()
                                                                // createCandidature(formData)
                                                                // history.push(`/list-candidate/call/${callId}`)
                                                            }
                                                    }
                                            onHide={() => setModalShowAcceptedCalendark(false)}
                                        />
                                        
                                        <br />
                                        <br />

                                        <button onClick={() => {setModalShowRejected(true)}} style={{width:'140px'}} type="button" className="btn btn-danger btn-lg">Rifiuta</button>
                                        <PopupRejected
                                            
                                            show={modalShowRejected}
                                            clickMe={() => {  
                                                                
                                                                // updateAccepted()
                                                                setModalShowRejected(false)
                                                               setModalShowRejectedFeedback(true)
                                                                // createCandidature(formData)
                                                                // history.push('/create-profile')
                                                            }
                                                    }
                                            onHide={() => setModalShowRejected(false)}
                                        /> 

                                                 
                                        <PopupRejectedFeedback
                                           
                                            show={modalShowRejectedFeedback}
                                            updateFeedback={updateFeedback}
                                            setFeebackForm={setFeebackForm}
                                             clickMe={(e) => {  
                                                                console.log("PopupRejectedFeedback")
                                                                // updateCallStatus({idCandidature: candidate._id, Status: 'Rifiutato', Feedback: "hello" })
                                                                // console.log(e)
                                                                updateCallStatus({idCandidature: candidate._id, Status: 'Rifiutato', Feedback: e })
                                                                refreshPage()
                                                                // history.push(`/list-candidate/call/${callId}`)
                                                            }
                                                    } 
                                            onHide={() => setModalShowRejectedFeedback(false)}
                                        />   




                                    </Fragment>
                                ) : (candidate.Status === 'Rifiutato'? (<button style={{width:'140px', cursor:'not-allowed'}} type="button" className="btn btn-danger btn-lg" >Rifiutato</button>) :
                                (<button style={{width:'140px', cursor:'not-allowed'}} type="button" className="btn btn-success btn-lg">Accettata</button>)
                                 )

                            }
                            </div>
                        <div className="col-md-7">
                        <div className="card-body p-0">
                            <h2 className="card-title row no-gutters">{candidate.User.Name}</h2>
                            <div className="card-text row no-gutters">
                                <div className="col-8">
                                    <p className="m-0"><span className="font-weight-bold">Professione:</span> {candidate.Profile.Position.Position}</p>
                                    <p className="m-0"><span className="font-weight-bold">Settore:</span> {}</p>
                                    <p className="m-0"><span className="font-weight-bold">Competenze:</span> {candidate.Profile.Skills.join()}</p>

                                </div>
                                <div className="col-4">
                                    {/* <Link style={{width:'140px'}} type="button" className="btn btn-primary btn-lg" to={`/list-candidate/${project._id}`} >Vedi candidature</Link> */}
                                </div>
                            </div>
                            <div className="card-text row no-gutters">
                                <div className="col-12">
                                    <p className="m-0"><span className="font-weight-bold">Breve bio:</span> {candidate.Profile.Biography}</p>
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <p><b>Lettera motivazionale: </b>{candidate.Motivational_Letter}</p>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {updateCallStatus})(CandidateCall)
