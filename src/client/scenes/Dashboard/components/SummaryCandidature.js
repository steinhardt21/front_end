import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../../../resources/img/avatar-user.svg';

const data = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };

  const options = {
    legend: {
       display: false
    }
}

export const SummaryCandidature = ({candidacies}) => {

    const [summaryCandidacies, setSummaryCandidacies] = useState({
        Approved: 0,
        InProcess:0,
        Rejected:0
    })

    useEffect(() => {
        
        let loadApproved = candidacies.filter((element) => (element.Status === 'Accettato'))
        let loadInProcess = candidacies.filter((element) => (element.Status === 'Valutazione'))
        let loadRejected = candidacies.filter((element) => (element.Status === 'Rifiutato'))
        
        setSummaryCandidacies({
            Approved: loadApproved.length,
            InProcess: loadInProcess.length,
            Rejected: loadRejected.length
        })

    }, [candidacies])

    const { Approved, InProcess, Rejected } = summaryCandidacies

    return (
        <div id="dimensionCardLanding" >
            <div id="cardProjectOutside" className="card mb-3 shadow p-3 bg-white">
                <Row id="cardProjectInside" className="text-white mb-3 my-auto ml-0 mr-0">
                       {/* <div className="col-5 cardTitleLanding"> */}
                    <div className="col-4 text-center my-auto">
                        
                            {/* <p className="card-title row no-gutters" >Stato Candidature</p> */}
                        
                            <Image src={Avatar} width="60%" height='auto' />
                                

                                {/* <div className="col-8">
                                    <p className="m-0">Accettate:</p>
                                    <p className="m-0">In attesa:</p>
                                    
                                    <p className="m-0">Rifiutate:</p>

                                </div> */}
                        
                    
                    </div>
                    {/* <div className="vLine mt-3 col-1"></div> */}
                    <div className="vertical-line-white"></div>
                    <div className="col-7 my-auto">
                            <Row><Col><p style={{fontSize:'20px'}}><b><u>Hai effettuato {candidacies.length} candidature</u></b></p></Col></Row>
                            <Row>
                                <div className="col-10">
                                    <p className="mb-0" >Accettate: </p>
                                    <p className="mb-0">In valutazione:</p>
                                    <p className="mb-0">Rifiutate:</p>
                                </div>
                                <div className="col-1">
                                    <p className="mb-0">{Approved}</p>
                                    <p className="mb-0">{InProcess}</p>
                                    <p className="mb-0">{Rejected}</p>
                                </div>
                            </Row>  
                                    
                                
                            
                    </div>
            
                </Row>
                <Row className='mt-4'>
                    
                    <div className="col-12 my-auto text-center">
                        <Link style={{width:'140px'}} type="button" className="btn btn-primary btn-lg" to={`/newversion/personal-list-candidacies`} >Scopri</Link>
                    </div>
                </Row>
             </div>
        </div>
    )
}


export default SummaryCandidature
