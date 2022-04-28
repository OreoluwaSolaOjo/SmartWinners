import { Col, Container, Row } from 'react-bootstrap';
import classes from './heroimage.module.css';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
const HeroImage = () => {
    return (
        <div>
            <div className={classes.section}>

            </div>
            <Container fluid>
                <Row>
                    <Col className={classes.cardcol} >
                        <Row>
                            <Col xs={2}>
                                <img src={icon1} alt="" />
                            </Col>
                            <Col className={classes.textcol} xs={10}>
                                <Row>
                                    <Col ><h6>YOU PICK</h6></Col>
                                    <Col > <h5>Play Now>></h5></Col>
                                </Row>
                                <Row>
                                    <h4>It's easy! Pick from over 40 official lottery games you wish to play. Then select your winning numbers.</h4>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={classes.cardcol} >
                        <Row>
                            <Col xs={2}>
                                <img src={icon2} alt="" />
                            </Col>
                            <Col className={classes.textcol} xs={10}>
                                <Row>
                                    <Col ><h6>WE BUY</h6></Col>
                                    <Col > <h5>More Details>></h5></Col>
                                </Row>
                                <Row>
                                    <h4>Once you've picked your winning numbers we'll purchase your ticket on your behalf.</h4>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={classes.cardcol}>
                        <Row>
                            <Col xs={2}>
                                <img src={icon3} alt="" />
                            </Col>
                            <Col className={classes.textcol} xs={10}>
                                <Row>
                                    <Col ><h6>YOU WIN!!!</h6></Col>
                                    <Col xs={8}> <h5>Withdraw My Winnings>></h5></Col>
                                </Row>
                                <Row>
                                    <h4>When you win, we'll automatically credit your account the full value of your winnings.</h4>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroImage;