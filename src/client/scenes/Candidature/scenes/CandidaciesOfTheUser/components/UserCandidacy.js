import React, { Fragment } from 'react';
import { connect } from 'react-redux';


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
export const UserCandidacy = ({candidacy}) => {
    return (
        <div>
            {/* {console.log(project.Project)} */}

            <div id="cardProjectOutside" className="card shadow-lg p-3 mb-5 bg-white ">
                <div id="cardProjectInside" className="row no-gutters text-white mb-3">
                    <div className="col-md-3 text-center">
                    {/* <img src="image.jpg" className="card-img" alt="..." /> */}
                        <h2>{candidacy.Call_Project.Project.Name}</h2>
                    </div>
                    <div className="col-md-6 pl-4">
                        <div className="card-body p-0">
                            <h2 className="card-title row no-gutters"><u>{candidacy.Call_Project.Position.Position}</u></h2>
                            <p className="card-text row no-gutters">
                                <div className="col-8">
                                    <p className="m-0"><span className="font-weight-bold">Settore:</span> {candidacy.Industry}</p>
                                    <p className="m-0"><span className="font-weight-bold">Fase di sviluppo:</span> {candidacy.Call_Project.Project.Development_Stage.Development_Stage}</p>
                                    {/* <p className="m-0"><span className="font-weight-bold">Competenze:</span> {candidacy.Call_Project.Skills.join()}</p> */}
                                </div>
                            </p>
                            
                        </div>
                    </div>
                    <div className="col-md-2 pl-4 col-12 text-center">
                        {
                            candidacy.Status === "Valutazione" ? (
                                <Fragment>
                                    <br />
                                    <button style={{width:'130px', fontSize:'18px', cursor:'not-allowed'}} type="button" className="btn buttonInValutazione btn-warning btn-lg">In valutazione</button>
                                    <br />
                                    <br />
                                    {/* <Link style={{width:'140px', fontSize:'18px'}} type="button" className="btn btn-primary btn-lg" to={`/call/update-motivational-letter/${candidacy._id}`}>Modifica</Link> */}
                                </Fragment>
                            ) :
                            (
                                candidacy.Status === "Rifiutato" ? ( <Fragment>
                                    <br />
                                    <button style={{width:'110px', fontSize:'18px',cursor:'not-allowed'}} type="button" className="btn btn-danger btn-lg">Rifiutato</button>
                                    <br />
                                    <br />
                                    {/* <Link style={{width:'140px', fontSize:'18px'}} type="button" className="btn btn-primary btn-lg" to={`/call/update-motivational-letter/${candidacy._id}`}>Modifica</Link> */}
                                </Fragment>) :
                                ( <Fragment>
                                    <br />
                                    <button style={{width:'130px', fontSize:'18px', cursor:'not-allowed'}} type="button" className="btn btn-success btn-lg">Accettato</button>
                                    <br />
                                    <br />
                                    {/* <Link style={{width:'140px', fontSize:'18px'}} type="button" className="btn btn-primary btn-lg" to={`/call/update-motivational-letter/${candidacy._id}`}>Modifica</Link> */}
                                </Fragment>)
                            )
                        }
                         
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-">
                        <p><b>Lettera motivazionale: </b>{candidacy.Motivational_Letter.substring(0,400)+"..."}</p>
                    </div>
                    {/* <div className="col-md-4">
                        <Doughnut data={data} options={options}/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body p-0">
                            <p className="card-title row no-gutters" >Stato Candidature</p>
                            <p className="card-text row no-gutters">
                                <div className="col-8">
                                    <p className="m-0">Accettate:</p>
                                    <p className="m-0">In attesa:</p>
                                    <p className="m-0">Rifiutate:</p>
                                </div>
                            </p>
                        </div>
                    </div> */}
                </div>
             </div>
        </div>
    )
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, {})(UserCandidacy)
