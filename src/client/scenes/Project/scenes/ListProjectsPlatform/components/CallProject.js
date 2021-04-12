import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import {Tabs, Image, Tab, Form, Button, Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const data = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
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

  /**
   * 
   * guideline graph: https://medium.com/swlh/data-visualization-with-react-chart-js-be5e238bc302 
   */
export const CallProject = ({project}) => {
    return (
        <div>
            {/* {console.log(project.Project)} */}

            {/* <div id="cardProjectOutside" className="card mb-3 shadow">
                <div className="row no-gutters">
                    <div id="cardCallInside" className="col-md-4 ">
                      <p className="text-white text-center"><b>Nome progetto:</b></p>
                      <p id="cardCallFontPosition" style={{fontSize:'32px'}} className="m-0 mb-3 text-white text-center">{project.Project.Name}</p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-0">
                          <h5 className="card-title row no-gutters">{ }</h5>
                          <div className="card-text row no-gutters">
                              <div className="col-5 offset-1">
                                <p style={{fontSize:'20px'}}  className="mb-1"><b>Figura ricercata:</b></p>
                                  <p id="cardCallFontPosition" className="m-0 display-4 mb-3"><u>{project.Position.Position}</u></p>
                                  <p className="m-0"><span className="font-weight-bold">Settore:</span> {project.Industry}</p>
                                  <p className="m-0"><span className="font-weight-bold">Fase:</span> {project.Project.Development_Stage.Development_Stage} </p>
                                  <Link to={`/project/${_id}`} className="card-link">Detagli progetto</Link>
                              </div>
                              <div className="col-6 text-center  my-auto">
                                  <Link style={{width:'140px'}} type="button" className="btn btn-primary btn-lg" to={`/view-call/${project._id}`} >Scopri</Link>
                              </div>
                          </div>                          
                      </div>
                    </div>
                </div>
             </div> */}

             <div id="cardProjectOutside" className="card shadow-lg p-3 mb-5 bg-white ">
                <div id="cardProjectInside" className="row no-gutters text-white mb-3">
                        <div className="col-md-4 my-auto text-center">
                        {/* <img src="image.jpg" className="card-img" alt="..." /> */}
                            <h2>{project.Project.Name}</h2>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body p-0">
                                  {(project.Position._id === '6074b0c6e25f3348639fb03a') ? null : <Row className="card-title no-gutters "><h2 className="text-center text-md-left"><u>{project.Position.Position}</u></h2></Row>}
                                <Row className="card-text no-gutters">
                                    <div className="col-md-12 col-12 text-center text-md-left">
                                       { (project.Position._id === '6074b0c6e25f3348639fb03a') ? null : <p className="m-0"><span className="font-weight-bold">Figura ricercata: </span> 
                                        {project.Position.Position}                                        
                                        </p>}
                                        <p className="m-0"><span className="font-weight-bold">Settore: </span> 
                                            {project.Industry}
                                          </p>
                                        <p className="m-0"><span className="font-weight-bold">Fase: </span> 
                                           {project.Project.Development_Stage.Development_Stage}                                        
                                        </p>
                                        {/* <p className="m-0"><span className="font-weight-bold">Stato:</span> {call.Project.Status}</p> */}
                                    </div>
                                </Row>
                                
                            </div>
                        </div>
                        <div className="col-md-3 my-auto text-center">
                            <Link style={{width:'140px'}} type="button" className="btn btn-primary btn-lg" to={`/view-call/${project._id}`}>Scopri</Link>
                        </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-12">
                        <p><b>Descrizione</b></p>
                        <p>{project.Project.Description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CallProject)
