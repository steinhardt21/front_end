import React, { Fragment, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../../resources/img/avatar-user.svg';

export const Menu = ( {auth:{user}}) => {

    const [datiUtente, setDatiUtente] = useState(
        {name: '',
    surname: ''}
    )

    useEffect(() => {

        if(user != null) { setDatiUtente({name: user.Name, surname: user.Surname})}

    }, [user])

    const {name, surname} = datiUtente


    return (
        <Fragment>
                <div id="navNucleus-grad" className="navbar navbar-expand-lg bg-secondary">
                
                    
                    <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item active padding-menu-item text-right">
                                <Link className="nav-link text-white" to='/dashboard'>Dashboard</Link>
                            </li>
                            <li className="nav-item padding-menu-item text-right">
                                <Link className="nav-link text-white" to='/personal-list-projects'>Progetti caricati</Link>
                            </li>
                            <li className="nav-item padding-menu-item text-right">
                                <Link className="nav-link text-white" to="/personal-list-candidacies" >Candidature inviate</Link>
                            </li>
                            <li className="nav-item  text-right" style={{width:'180px'}}>
                                {/* <div className='my-auto' style={{float:'left'}}><Image src={Avatar} width="10%" height='auto' /></div>
                                <div style={{float:'left'}}><Link className="nav-link text-white" to='/create-profile'><b>{name + ' ' + surname}</b></Link></div>    */}
                            <Link className="nav-link text-white" to='/create-profile'><Image src={Avatar} width="12%" height='auto' className="mr-2 text-left"/> <b>    {name + ' ' + surname}</b></Link>
                           
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps,{})(Menu)