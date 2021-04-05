import React, { Fragment, useState } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addPosition} from '../../../../../../actions/admin'

export const PositionForm = ({addPosition}) => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(!value) return; //If there is no value
        addPosition(value);
        setValue('') // Reset the value of the form
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit} className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} className="form-control border-0 small" placeholder="Insert new position" />
                    <div className="input-group-append">
                        <button className="btn btn-primary input" type="submit">
                        <i className="fas fa-plus fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    admin: state.admin,
    auth: state.authCollaborator
})

export default connect(mapStateToProps, {addPosition})(PositionForm)