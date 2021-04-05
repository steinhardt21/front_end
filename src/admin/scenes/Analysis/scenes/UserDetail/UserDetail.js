/** 
 * UserDetail show all the data about a certain user.
 * The data (which are in the folder model/Profile.js) that have to be shown are:
 *  - company
 *  - website
 *  - location
 *  - status
 *  - skills
 *  - bio
 * 
 * These data have to be shown in a table. In building the page, use the template that is in the folder: Template Admin Area (which is in the server area).
 * 
 * 
 * In order to develop this part you have to watch this lecture on my UDEMY account.
 * So, go on udemy.com and register with:
 *             - username: alex.enax@protonmail.com
 *             - password: Credinta21
 * 
 * Then, please go and watch:
 *  - lecture 54 (that explains the logic to be used to show profiles on
 *                this platform, because I am building it following that course)
 *  - lecture 53 (from minute 1:10, that explains a method used in lecture 54)
 */


import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import LayoutBodyAdmin from "../../../../components/LayoutAdminBody"
import LayoutHeaderAdmin from "../../../../components/LayoutAdmin"
import { withRouter, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getProfileById} from '../../../../../actions/profile'
import Spinner from '../../../../../resources/differentResources/Spinner'
import UserDetailCard from './UserDetailCard'

const UserDetail = ({
                        getProfileById,
                        profile:{profile,loading},
                        auth,
                        match
}) => {

    useEffect(()=>{
        getProfileById(match.params.id);
    },[getProfileById,match.params.id])

    return (
        <Fragment>
            <LayoutHeaderAdmin />
            <LayoutBodyAdmin>
                {profile=== null || loading ? <Spinner/>:
                    <UserDetailCard user={profile}/>
                }

            </LayoutBodyAdmin>
        </Fragment>
    )
}

UserDetail.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps,{ getProfileById })(UserDetail)