import React, { useEffect, useState } from 'react'
import {Tabs, Image, Tab, Form, Button, Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import { getCandidatesCallSummary } from '../../../../actions/candidacy';
  /**
   * 
   * guideline graph: https://medium.com/swlh/data-visualization-with-react-chart-js-be5e238bc302 
   */
export const SummaryCall = ({call, getCandidatesCallSummary, candidacy: {candidatesSummary}}) => {

    const [summaryCall, setSummaryCall] = useState({
        Approved: 0,
        InProcess:0,
        Rejected:0
    })

    let Rej = 0
    let Appr = 0
    let InProc = 0

   

    const data = {
        labels: [
          'Rifiutate',
          'Accettate',
          'In Attesa'
        ],
        datasets: [{
          data: [Rej, Appr, InProc],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
      };
    
      const options = {
        legend: {
           display: false
        }
    }

    
    useEffect(() => {

        candidatesSummary.map((element) => {
                    if(element.candidatureId === call._id)
                    {
                        if(element.data.length === 0){
                            setSummaryCall({
                                Approved: 0,
                                InProcess: 0,
                                Rejected: 0
                            })
                        }
                        else{

                            console.log('data', element)
                            let loadApproved = element.data.filter((candidate) => (candidate.Status === 'Accettato'))
                            let loadInProcess = element.data.filter((candidate) => (candidate.Status === 'Valutazione'))
                            let loadRejected = element.data.filter((candidate) => (candidate.Status === 'Rifiutato'))

                            setSummaryCall({
                                Approved: loadApproved.length,
                                InProcess: loadInProcess.length,
                                Rejected: loadRejected.length
                            })


                        }
                    }
        })

    }, [candidatesSummary])

    const { Approved, InProcess, Rejected } = summaryCall

    useEffect(()=>{
        if(call != null){
            getCandidatesCallSummary(call._id)
        }
    }, [call, getCandidatesCallSummary])


    return (
        <div>
            {/* {console.log(project.Project)} */}

            <div id="cardProjectOutside" className="card  shadow-lg p-3 mb-5 bg-white ">
                <Row id="cardProjectInside" className="no-gutters text-white mb-3">
                    <div className="col-md-4 my-auto text-center">
                    {/* <img src="image.jpg" className="card-img" alt="..." /> */}
                         <h2>{call.Project.Name}</h2>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body p-0">
                            {/* <Row className="card-title no-gutters "><h2 className="text-center text-md-left"><u>{call.Position.Position}</u></h2></Row> */}
                            {(call.Position._id === '6074b0c6e25f3348639fb03a') ? null : <Row className="card-title no-gutters "><h2 className="text-center text-md-left"><u>{call.Position.Position}</u></h2></Row>}
                            <Row className="card-text no-gutters">
                                <div className="col-md-12 col-12 text-center text-md-left">
                                    <p className="m-0"><span className="font-weight-bold">Settore:</span> {call.Industry}</p>
                                    <p className="m-0"><span className="font-weight-bold">Fase:</span> {call.Project.Development_Stage.Development_Stage}</p>
                                    {/* <p className="m-0"><span className="font-weight-bold">Stato:</span> {call.Project.Status}</p> */}
                                </div>
                            </Row>
                            
                        </div>
                    </div>
                    <div className="col-md-3 my-auto text-center">
                        <Link style={{width:'170px'}} type="button" className="btn btn-primary btn-lg" to={`/list-candidate/call/${call._id}`} >Candidature</Link>
                    </div>
                </Row>
                <Row className="no-gutters">
                    <div className="col-12 col-md-4">
                        
                        <Doughnut data={data} options={options}/>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body p-0">
                            <Row className="card-title no-gutters" ><p style={{fontSize:'20px'}}><b>Stato candidature</b></p></Row>
                            <Row className="card-text no-gutters">
                                <div className="col-10">
                                    <p className="mb-0" >Accettate: </p>
                                    <p className="mb-0">In valutazione:</p>
                                    <p className="mb-0">Rifiutate:</p>
                                </div>
                                <div className="col-1">
                                    <p className="mb-0">{Approved}</p>
                                    <p className="mb-0">{InProcess}</p>
                                    <p className="mb-0">{Rejected}</p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    candidacy: state.candidacy
})

export default connect(mapStateToProps, {getCandidatesCallSummary})(SummaryCall)
