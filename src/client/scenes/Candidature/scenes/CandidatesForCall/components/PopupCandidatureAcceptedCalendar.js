import React from 'react';
import {Modal, Tabs, Tab, Form, Button, Container, Row, Col, option} from 'react-bootstrap';
import Logo from '../../../../../../resources/img/nucleus.png'

export const PopupCandidature = (props) => {
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
                        <p><b>Complimenti, hai fatto il primo passo per costruire il team per il tuo progetto!</b></p>
                    </div>
                </Row>
                <Row>
                    <div className="col-12">
                        <p>Per poter organizzare una prima chiamata conoscitiva, ti chiediamo di inserire le tue disponibilità in questo form.</p>
                    </div>
                </Row>
                {/* <Row>
                    <div className="col-2 text-right">Step 1.</div>
                    <div className="col-10">Compila il calendly con le tue disponibilità</div>
                </Row>
                <Row>
                    <div className="col-2 text-right">Step 2.</div>
                    <div className="col-10">Attendi che il candidato team member prenoti una chiamata con te</div>
                </Row>
                <Row>
                    <div className="col-2 text-right">Step 3.</div>
                    <div className="col-10">Incontratevi e conoscetevi online</div>
                </Row> */}
            </Container>
          </Modal.Body>
          <Modal.Footer>
                <Container>
                        <Row>
                            <div className="col-12 text-center">
                                 <button onClick={props.clickMe} type="submit" className="btn btn-primary btn-lg" style={{width:'300px'}} >Vai al form</button>
                            </div>
                        </Row>
                </Container>
          </Modal.Footer>
        </Modal>
      );
}

export default PopupCandidature