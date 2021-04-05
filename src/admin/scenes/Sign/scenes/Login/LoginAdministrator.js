import React, { Fragment, useState } from 'react'
import LayoutAdmin from '../../../../components/LayoutAdmin'
import {loginAdmin} from '../../../../../actions/authCollaborator'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

export const LoginAdministrator = ({loginAdmin, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        loginAdmin(email, password);
    }

    if(isAuthenticated){
        return <Redirect to="/admin/dashboard" />
    }

    return (
        <Fragment>

            <LayoutAdmin />

            <div className="bg-gradient-primary">
            <div className="container">                
                <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div className="col-lg-6">
                            <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form className="user" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input 
                                            type="email" 
                                            className="form-control form-control-user"                                
                                            id="exampleInputEmail" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter Email Address..."
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                            required 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control form-control-user" 
                                        id="exampleInputPassword" 
                                        placeholder="Password" 
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        minLength="6"
                                    />
                                </div>
                                <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                    <input 
                                        type="checkbox" 
                                        className="custom-control-input" 
                                        id="customCheck" 
                                    />
                                    <label className="custom-control-label" for="customCheck">Remember Me</label>
                                </div>
                                </div>
                                <input type="submit" className="btn btn-primary btn-user btn-block" value="Login"/>
                                
                                <hr />
                                <a href="#" className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw"></i> Login with Google
                                </a>
                                <a href="#" className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </a>
                            </form>
                            <hr />  
                            <div className="text-center">
                                <a className="small" href="#">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <a className="small" href="#">Create an Account!</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

                </div>

            </div>


            </div>
        </Fragment>
    )
}

LoginAdministrator.propTypes = {
    loginAdmin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

// It allows to access the Redux state
const mapStateToProps = state => ({
    isAuthenticated: state.authCollaborator.isAuthenticated
})

export default connect(mapStateToProps, {loginAdmin})(LoginAdministrator)
