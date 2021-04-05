import React, { useState } from 'react';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Logo from '../../../../../../resources/img/nucleus.png';

export const PopupCandidatureRejectFeedback = (props) => {

    const [formData, setFormData] = useState('')
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    let data = ''
    function myFunction()
    {
        props.updateFeedback('helloTest') 
        props.setFeebackForm('hheltoTest1')
        data = formData
        props.clickMe(data) 
    }
    

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered

        >
          <Modal.Header closeButton id="backgroundPopup">
            <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                
            </Modal.Title>

                <Container>
                    <Row>
                        <div className="col-12 text-center">
                            <img src={Logo} style={{ width: '380px'}} alt='Loading...' />
                        </div>
                    </Row>
                </Container>
          </Modal.Header>
          <Modal.Body>
            
            <Container>
                <Row>
                    <div className="col-12 text-center">
                        {/* <p><b>Sei sicuro di non voler conoscere il team member?</b></p> */}
                    </div>
                </Row>
                <Row>
                    <div className="col-12">
                        <p>Ti chediamo un breve commento che motivi la tua scelta di non voler conoscere questo candidato team member.</p>
                    </div>
                </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
                <Container>
                        <Row>
                             <div className="col-12">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control  style={{borderRadius: '25px'}} as="textarea" rows={5} placeholder="Feedback" name='formData' onChange={e => onChange(e)}  />
                                </Form.Group>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12 text-center">
                                  <button onClick={myFunction}  className="btn btn-primary btn-lg" style={{width:'140px'}} >Invia</button>
                            </div>
                             {/* <div className="col-6 text-center">
                                 <button  onClick={props.onHide} className="btn btn-primary btn-lg" style={{width:'140px'}} >No</button>
                             </div> */}
                        </Row>
                </Container>
          </Modal.Footer>
        </Modal>
      );
}

export default PopupCandidatureRejectFeedback



// import React, {useState} from 'react';
// import {Modal, Tabs, Tab, Form, Button, Container, Row, Col, option} from 'react-bootstrap';
// import Logo from '../../../../../../img/nucleus.png';

// export const PopupCandidatureRejectFeedback = (props) => {

    // const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    // const [formData, setFormData] = useState('')

//     return (
//         <Modal
//           {...props}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered

//         >
//           <Modal.Header closeButton id="backgroundPopup">
//             <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                
//             </Modal.Title>

//                 <Container>
//                     <Row>
//                         <div className="col-12 text-center">
//                             <img src={Logo} style={{ width: '380px'}} alt='Loading...' />
//                         </div>
//                     </Row>
//                 </Container>
//           </Modal.Header>
//           <Modal.Body>
            
        
//           </Modal.Body>
//           <Modal.Footer>
//                 <Container>
                        
//                         <Row>
//                             <div className="col-6 text-center">
//                                  <button onClick={props.clickMe(formData)} type="submit" className="btn btn-primary btn-lg" style={{width:'140px'}} >Sì</button>
//                             </div>
//                             <div className="col-6 text-center">
//                                  <button  onClick={props.onHide} className="btn btn-primary btn-lg" style={{width:'140px'}} >No</button>
//                             </div>
//                         </Row>
//                 </Container>
//           </Modal.Footer>
//         </Modal>
//       );
// }

// export default PopupCandidatureRejectFeedback