import React  from 'react';
import {Modal, Tabs, Tab, Form, Button, Container, Row, Col, option} from 'react-bootstrap';
import Logo from '../../../../resources/img/nucleus.png';

export const PopupScopriProgetto = (props) => {
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
                    <p><b>Per vedere le caratteristiche del progetto ti chiediamo di registrarti alla piattaforma</b></p>
                </div>
            </Row>
            {/* <Row>
                <div className="col-12">
                    <p>Ti ricordiamo che la candidatura vuole essere una semplice manifestazione di interesse verso il progetto; rappresenta una richiesta di poter fissare una chiamata conoscitiva con il founder</p>
                </div>
            </Row> */}
        </Container>
          </Modal.Body>
          <Modal.Footer>
                <Container>
                        <Row>
                            <div className="col-12 text-center">
                                 <button onClick={props.clickMe} type="submit" className="btn btn-primary btn-lg" style={{width:'140px'}} >Registrati</button>
                            </div>
                        </Row>
                </Container>
          </Modal.Footer>
        </Modal>
      );
}

export default PopupScopriProgetto