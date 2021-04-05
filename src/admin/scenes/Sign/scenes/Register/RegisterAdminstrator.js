import React, {Fragment, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAlert} from '../../../../../actions/alert'
import {registerAdmin} from '../../../../../actions/authCollaborator'
import PropTypes from 'prop-types'

const RegisterAdminstrator = ({setAlert, registerAdmin, isAuthenticated}) => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
   
    const onSubmit = e => {
        e.preventDefault()
        if(password !== password2){
            setAlert('Passwords do not match', 'danger')
        }
        else{
            registerAdmin({name, email, password})
        }
    }

    //Redirect if logged in
    if(isAuthenticated)
    {
        return <Redirect to='/admin/dashboard'/>
    }

    
    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" name="name" 
                    value={name}
                    onChange={e => onChange(e)}
                    />
                
                <input type="email" placeholder="Email Address" name="email"
                        value={email}
                        onChange={e => onChange(e)}

                        />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                
                    value={password}
                    onChange={e => onChange(e)}

                    
                />
                <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            
                            value={password2}
                            onChange={e => onChange(e)}

                />
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
        </Fragment>
    )
}

RegisterAdminstrator.propTypes = {
    setAlert: PropTypes.func.isRequired,
    registerAdmin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect( 
    mapStateToProps, 
    {setAlert, registerAdmin}
    )(RegisterAdminstrator)