import React, { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { registerEmailUser } from '../../actions/user'

import Logo from '../../resources/img/logo_nucleus_symbol.svg'

export const Footer = ({registerEmailUser}) => {
  const [contactUser, setContactUser] = useState({
    Name: '',
    Email: ''
  })

  const [contactSaved, setContactSaved] = useState(true)

  const onChange = inputForm => {
    setContactUser({
      ...contactUser,
      [inputForm.target.name]: inputForm.target.value
    })
  }
  
  const registerContact = saveData => {
    saveData.preventDefault()
    setContactSaved(false)
    registerEmailUser(contactUser)
    setContactUser({
      Name: '',
      Email: ''
    })
  }

        return( 

        <Fragment> 
            <footer id="footerNucleus" className="pt-4">
                <div className="container-fluid">
                    <div className="row text-white">
                        <div className="col-md-3 text-center col-12 my-auto">
                          <img
                            src={Logo}
                            width="60"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                          />
                          <p className="mt-2" style={{fontSize:'12px'}}>Copyright © 2021 Nucleus. All rights reserved.</p>
                        </div>
                        <div style={{fontSize:'16px'}} className="col-md-2 col-12 text-center text-md-left mb-3 mb-md-0">
                     
                          <p className="mb-0"><Link className="nounderline mr-md-5 text-center " to='/'>Home</Link></p>
                          <p className="mb-0"><Link className="nounderline mr-md-5 text-center " to='/list-calls'>Progetti</Link></p>
                          <p className="mb-0"><Link className="nounderline mr-md-5 text-center " to='/come-funziona'>Come funziona</Link></p>
                          <p className="mb-0"><Link to="/sign" className="nounderline mr-md-5 text-center">Registrati/Accedi</Link></p>
                          <p className="mb-0"><HashLink to="/come-funziona#faq" className="nounderline mr-md-5 text-center">FAQ</HashLink></p>
                        </div>
                        
                        <div className="col-md-2 col-12 my-auto d-none d-md-block">
                          <p style={{fontSize:'16px'}}>nucleus.informazioni@gmail.com</p>
                          <p>
                             
                          </p>
                        </div>
                        <div className="col-md-5 col-12 my-auto d-none d-md-block">
                          
                          <div className="row">
                          <p style={{fontSize:'16px'}}>Rimaniamo in contatto!</p>
                          </div>
                          <Form onSubmit={registerContact} className="row">
                            <div className="col-5 p-0 ml-0 mr-3">
                              <Form.Control name='Name' type="text" className="form-control" id="contactName" placeholder="Nome" onChange={onChange} required />
                            </div>
                            <div className="col-5  p-0 ml-0 mr-3">
                              <Form.Control name='Email' type="email" className="form-control" id="contactEmail" aria-describedby="emailHelp" placeholder="Email" onChange={onChange} required />
                            </div>
                            <div className="col-1 p-0">
                            <button type="submit" className="btn btn-primary">Invia</button>
                            </div>
                          </Form>
                          {contactSaved ? (null) : (<Form.Label className="text-success">Contatto registrato</Form.Label>) }
                          <div className="row">

                          </div>
                          <div className="row">
                            <div style={{fontSize:'16px'}} className="col-12 p-0 pt-3 pb-2">
                              Compilando questo form dai il consenso a ricevere email da Nucleus.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
        )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {registerEmailUser})(Footer)
