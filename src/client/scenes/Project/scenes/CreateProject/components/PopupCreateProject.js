import React from 'react';
import {Modal, Tabs, Tab, Form, Button, Container, Row, Col, option} from 'react-bootstrap';
import Logo from '../../../../../../resources/img/nucleus.png'

export const PopupCreateProject = (props) => {
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
                            <p><b>Step 1: Sei sicuro di voler procedere e inviare i dati sul tuo progetto?</b></p>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-12 text-center">
                            <p>Se procedi non sarà più possibile modificare le informazioni inserite.</p>
                            <p>N.B. Affinché il progetto venga salvato correttamente, occorre completare anche lo Step 2 alla pagina successiva.</p>
                        </div>
                    </Row>
                </Container>
          </Modal.Body>
          <Modal.Footer>
                <Container>
                        <Row>
                            <div className="col-6 text-center">
                                 <button onClick={props.clickMe} type="submit" className="btn btn-primary btn-lg" style={{width:'140px'}} >Sì</button>
                            </div>
                            <div className="col-6 text-center">
                                 <button  onClick={props.onHide} className="btn btn-primary btn-lg" style={{width:'140px'}} >No</button>
                            </div>
                        </Row>
                </Container>
          </Modal.Footer>
        </Modal>
      );
}

export default PopupCreateProject