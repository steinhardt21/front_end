import React from 'react';
import {Modal, Tabs, Tab, Form, Button, Container, Row, Col, option} from 'react-bootstrap';
import Logo from '../../../../../../resources/img/nucleus.png'

export const PopupMessageGoDashboard = (props) => {
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
                            <p><b>Il tuo progetto è stato inviato correttamente! Entro le prossime 24 ore sarà visibile nella pagian Progetti.</b></p>
                        </div>
                    </Row>
                </Container>
          </Modal.Body>
          <Modal.Footer>
                <Container>
                        <Row>
                            <div className="col-12 text-center">
                                 <button onClick={props.clickMe} type="submit" className="btn btn-primary btn-lg" style={{width:'140px'}} >Ok</button>
                            </div>
                        </Row>
                </Container>
          </Modal.Footer>
        </Modal>
      );
}

export default PopupMessageGoDashboard