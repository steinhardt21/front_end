import React from 'react';
import { Container, Modal, Row } from 'react-bootstrap';
import Logo from '../../../../../../resources/img/nucleus.png';


export const PopupCheckProfile = (props) => {
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
                    <p><b>Non hai ancora creato il tuo profilo!</b></p>
                </div>
            </Row>
            <Row>
                <div className="col-12 text-center">
                    <p>Potrai iscriverti alle proposte presenti solo dopo aver completato il tuo profilo.</p>
                </div>
            </Row>
        </Container>
          </Modal.Body>
          <Modal.Footer>
                <Container>
                        <Row>
                            <div className="col-6 text-center">
                                 <button style={{width:'200px'}} onClick={props.clickMe} type="submit" className="btn btn-success btn-lg"  >Crea profilo!</button>
                            </div>
                            <div className="col-6 text-center">
                                 <button  style={{width:'200px'}} onClick={props.onHide} className="btn btn-warning btn-lg" >Crea più tardi</button>
                            </div>
                        </Row>
                </Container>
          </Modal.Footer>
        </Modal>
      );
}

export default PopupCheckProfile
