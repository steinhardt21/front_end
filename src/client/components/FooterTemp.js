import React, { Fragment, Component } from 'react'

export default class Footer extends Component {
    render() 
    {
        return(
        <Fragment> 
            <footer id="footerNucleusTemp" className=" pt-4 pb-4 ">
                <div className="container-fluid">
                    <div className="row text-white">
                        <div className="col-md-3 offset-md-1 col-5 offset-1">
                            
                            <p className='mb-0'>Chi Siamo</p> 
                            <p className='mb-0'>Contattaci</p>
                            <p className='mb-0'>Termini e condizioni</p>
                        </div>
                        <div className="col-md-3 offset-md-0 col-5 offset-1">
                            <p className='mb-0'><span className="fa fa-facebook marginIconFooter"/>Facebook</p>    
                            <p className='mb-0'><span className="fa fa-twitter marginIconFooter"/>Twitter</p>  
                            <p className='mb-0'><span className="fa fa-instagram marginIconFooter"/>Instagram</p> 
                        </div>
                        <div className="col-md-3 offset-md-1 col-10 offset-1 pt-5 pt-md-0">
                            <p className='mb-0'>Subscribe to our newsletter</p>
                            <p className='mb-0'><input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserisci E-mail" /></p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
        )
    }
}
