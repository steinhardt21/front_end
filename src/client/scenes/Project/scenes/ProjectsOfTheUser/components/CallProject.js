import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Tabs, Image, Tab, Form, Button, Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';


  /**
   * 
   * guideline graph: https://medium.com/swlh/data-visualization-with-react-chart-js-be5e238bc302 
   */
export const CallProject = ({call}) => {
    return (
        <div>
            {/* {console.log(project.Project)} */}

            <div id="cardProjectOutside" className="card shadow-lg p-3 mb-5 bg-white ">
                <Row id="cardProjectInside" className="no-gutters text-white mb-3">
                        <div className="col-md-4 my-auto text-center">
                        {/* <img src="image.jpg" className="card-img" alt="..." /> */}
                            <h2>{call.Project.Name}</h2>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body p-0">
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
                <div className="row no-gutters">
                    <div className="col-12">
                        <p><b>Descrizione</b></p>
                        <p>{call.Project.Description.substring(0,400)+"..."}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, {})(CallProject)
