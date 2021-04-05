import React from 'react'

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

export const CardProject = ({call}) => {
    return (
        <div id="dimensionCardLanding" >
            <div id="cardProjectOutside" className="card mb-3 shadow p-3 bg-white">
                <div id="cardProjectInside" className="row no-gutters text-white mb-3 my-auto">
                    <div className="col-12 my-auto text-center">
                        <p id="card-landing-Name">{call.Project.Name}</p>
                    </div>                   
                </div>
                <div className="row ">
                    {/* <div className="col-5 cardTitleLanding"> */}
                    <div className="col-md-6 col-12 text-center">
                        
                            {/* <p className="card-title row no-gutters" >Stato Candidature</p> */}
                           
                                <p id="card-landing-position" className="titleCardLanding">
                                 <p id="card-landing-info"><b>Figura ricercata:</b></p>{call.Position.Position}</p>
                                
                                {/* <div className="col-8">
                                    <p className="m-0">Accettate:</p>
                                    <p className="m-0">In attesa:</p>
                                    
                                    <p className="m-0">Rifiutate:</p>

                                </div> */}
                           
    
                    </div>
                    {/* <div className="vLine mt-3 col-1"></div> */}
                    <div className="vertical-line d-none d-md-block"></div>
                    <div className="col-md-5 col-12 my-auto">
                             
                                 
                                     <p className="mt-md-4"  id="card-landing-info"><b>Settore:</b> {call.Industry}</p>
                                     <p className="" id="card-landing-info"><b>Fase:</b> {call.Project.Development_Stage.Development_Stage}</p>
                                     <p id="card-landing-info"><b>Descrizione:</b> {call.Project.Description.substring(0,45)+"..."}</p>
                                     {/* <div className="row center mt-3">Team: 3 membri</div> */}
                                
                             
                    </div>
                </div>
             </div>
        </div>
    )
}

const mapStateToProps = state => ({
    
})

export default CardProject
