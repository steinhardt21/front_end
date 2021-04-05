/**
 * Page to manage the professiona positions inserted in the platform
 */
import Spinner from '../../../../../resources/differentResources/Spinner'
import LayoutBodyAdmin from "../../../../components/LayoutAdminBody"
import LayoutHeaderAdmin from "../../../../components/LayoutAdmin"
import React, { Fragment, useEffect, useState } from 'react'
import {getPositions} from '../../../../../actions/admin'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import PositionForm from './components/PositionForm'

export const ManagePosition = ({getPositions, admin:{positions, loading}}) => {

    useEffect(() => {
            getPositions();
    }, [getPositions])


    return (
        <Fragment>
            <LayoutHeaderAdmin />
            <LayoutBodyAdmin> 

                {/* <!-- Page Heading -->*/}
                
                <h1 className="h3 mb-2 text-gray-800">Gestione figure professionali</h1>
                <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
                

                {/** Insertion of a new position */}
                <div className="row">
                    <div className="col-5">
                        <PositionForm />
                    </div>
                </div>

                {/** Table with the positions in the database */}
                {
                    loading ? (<Spinner />) :
                        (
                            <Fragment>
{/**** */}
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
                                                    <th>Figura professionale</th>
                                                    <th>Data Inserimento</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Index</th>
                                                    <th>Figura professionale</th>
                                                    <th>Data Inserimento</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {
                                                    positions.map((pos, index) => (
                                                        <tr>
                                                            <td>{index}</td>
                                                            <td>{pos.Position}</td>
                                                            <td>{pos.Date_Inserted}</td>
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

{/****** */}
                            </Fragment>
                        )
                }               
            </LayoutBodyAdmin>  
        </Fragment>
    )
}

ManagePosition.propTypes = {
    admin: PropTypes.object.isRequired,
    getPositions: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    admin: state.admin,
    auth: state.authCollaborator
})

export default connect(mapStateToProps, {getPositions})(ManagePosition)