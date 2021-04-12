import React, {useState} from 'react';
import { Link, withRouter} from 'react-router-dom';
import Popup from './PopupScopriProgetto'

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
export const CallProject = ({project, history}) => {
  const [modalShow, setModalShow] = useState(false);
  
  return (
        <div>
            {/* {console.log(project.Project)} */}

            <div id="cardProjectOutside" className="card mb-3 shadow">
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
                              {(project.Position._id === '6074b0c6e25f3348639fb03a') ? null :   <p style={{fontSize:'20px'}}  className="mb-1"><b>Figura ricercata:</b></p>}
                                  {/* <p id="cardCallFontPosition" className="m-0 display-4 mb-3"><u><b>{project.Position.Position}</b></u></p> */}
    {(project.Position._id === '6074b0c6e25f3348639fb03a') ? null : <p id="cardCallFontPosition" className="m-0 display-4 mb-3"><u><b>{project.Position.Position}</b></u></p>}
                                  <p className="m-0"><span className="font-weight-bold">Settore:</span> {project.Industry}</p>
                                  <p className="m-0"><span className="font-weight-bold">Fase:</span> {project.Project.Development_Stage.Development_Stage} </p>
                                  {/* <Link to={`/project/${_id}`} className="card-link">Detagli progetto</Link> */}
                              </div>
                              <div className="col-6 text-center  my-auto">
                                  <button onClick={() =>  setModalShow(true)} style={{width:'140px'}} type="button" className="btn btn-primary btn-lg" >Scopri</button>
                                  <Popup
                                        show={modalShow}
                                        clickMe={() => {history.push(`/sign/${project._id}`)}}
                                        onHide={() => setModalShow(false)}
                                    />
                              </div>
                          </div>                          
                      </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default withRouter(CallProject)
