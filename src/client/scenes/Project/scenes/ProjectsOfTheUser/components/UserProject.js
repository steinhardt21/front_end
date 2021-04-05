import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


  /**
   * 
   * guideline graph: https://medium.com/swlh/data-visualization-with-react-chart-js-be5e238bc302 
   */
export const UserProject = ({project}) => {
    return (
        <div>
            {/* {console.log(project.Project)} */}

            <div id="cardProjectOutside" className="card  shadow-lg p-3 mb-5 bg-white ">
                <div id="cardProjectInside" className="row no-gutters text-white mb-3">
                    <div className="col-md-4 text-center">
                    {/* <img src="image.jpg" className="card-img" alt="..." /> */}
                         <h2>{project.Project.Name}</h2>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body p-0">
                        <h5 className="card-title row no-gutters"></h5>
                        <p className="card-text row no-gutters">
                            <div className="col-8">
                                <p className="m-0"><span className="font-weight-bold">Settore:</span> {project.Industry}</p>
                                <p className="m-0"><span className="font-weight-bold">Fase:</span> {project.Project.Development_Stage.Development_Stage}</p>
                                <p className="m-0"><span className="font-weight-bold">Stato:</span> {project.Project.Status}</p>
                            </div>
                            <div className="col-4">
                                <Link style={{width:'140px'}} type="button" className="btn btn-primary btn-lg" to={`/newversion/list-candidate/${project._id}`} >Vedi Call associalte</Link>
                            </div>
                        </p>
                        
                    </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-12">
                        <p><b>Descrizione</b></p>
                        <p>{project.Project.Description.substring(0,400)+"..."}</p>
                    </div>
                </div>
             </div>
        </div>
    )
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, {})(UserProject)
