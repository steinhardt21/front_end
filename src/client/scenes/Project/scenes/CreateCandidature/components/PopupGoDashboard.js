import React from 'react';
import {Modal, Tabs, Tab, Form, Button, Container, Row, Col, option} from 'react-bootstrap';
import Logo from '../../../../../../resources/img/nucleus.png'

export const PopupGoDashboard = (props) => {
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
                            <p><b>Sei sicuro di voler inviare i dati sulla figura ricercata?</b></p>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-12 text-center">
                            <p>Non sarà più possible modificare le informazioni inserite. </p>
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

export default PopupGoDashboard