import React, { Fragment, Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../resources/img/logo_nucleus_symbol.svg';
export default class Footer extends Component {
    render() 
    {
        return( 
        <Fragment> 
            <footer id="footerNucleus" className="pt-4">
                <div className="container-fluid">
                    <div className="row text-white">
                        <div style={{fontSize:'16px'}} className="col-md-2 offset-md-2 col-12 text-center text-md-left mb-3 mb-md-0">
                       
                          <p className="mb-0"><Link className="nounderline mr-md-5 text-center " to='/'>Home</Link></p>
                          <p className="mb-0"><Link className="nounderline mr-md-5 text-center " to='/list-calls'>Progetti</Link></p>
                          <p className="mb-0"><Link className="nounderline mr-md-5 text-center " to='/come-funziona'>Come funziona</Link></p>
                          <p className="mb-0"><Link to="/sign" className="nounderline mr-md-5 text-center">Accedi o registrati</Link></p>
                        </div>
                        <div className="col-md-4 text-center col-12">
                          <img
                            src={Logo}
                            width="60"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                          />
                          <p className="mt-2" style={{fontSize:'12px'}}>Copyright © 2021 Nucleus. All rights reserved.</p>
                        </div>
                        <div className="col-md-4 col-12 my-auto d-none d-md-block">
                          <p style={{fontSize:'16px'}}>info@nucleusidea.it</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
        )
    }
}
