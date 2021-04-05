/**
 * Page to manage the development stage of the startups
 */
import Spinner from '../../../../../resources/differentResources/Spinner'
import LayoutBodyAdmin from "../../../../components/LayoutAdminBody"
import LayoutHeaderAdmin from "../../../../components/LayoutAdmin"
import React, { Fragment, useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getDevStage} from '../../../../../actions/admin'
import DevStageForm from './components/DevStageForm'

export const ManagementDevStage = ({getDevStage, admin:{dev_stages, loading}}) => {
    
    useEffect(() => {getDevStage(); }, [getDevStage])

    return (
        
       <div>
        <LayoutHeaderAdmin />
        <LayoutBodyAdmin>
            {/* <!-- Page Heading -->*/}
            
            <h1 className="h3 mb-2 text-gray-800">Gestione delle fasi di sviluppo</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
            

            {/** Insertion of a new position */}
            <div className="row">
                <div className="col-5">
                    <DevStageForm />
                </div>
            </div> 

            {/** Table with the positions in the database */}
            {
                loading ? (<Spinner />) :
                    (
                        <Fragment>
                            <div className="row pt-5">
                                <div className="col-12">
                                  <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Figure professionali inserite</h6>
                                    </div>
                                    <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Index</th>
                                                <th>Development Stage</th>
                                                <th>Data Inserimento</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Index</th>
                                                <th>Development Stage</th>
                                                <th>Data Inserimento</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {
                                                dev_stages.map((dev, index) => (
                                                    <tr>
                                                        <td>{index}</td>
                                                        <td>{dev.Development_Stage}</td>
                                                        <td>{dev.Date_Inserted}</td>
                                                    </tr>

                                                ))
                                            }
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                 </div>
                                </div>
                            </div>
                        </Fragment>
                    )
            }  


        </LayoutBodyAdmin>
        </div>
    )
}

const mapStateToProps = state => ({
    admin: state.admin,
    auth: state.authCollaborator
})

export default connect(mapStateToProps, {getDevStage})(ManagementDevStage)