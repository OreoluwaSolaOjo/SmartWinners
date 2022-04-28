import { Button, Col, Container, Row } from "react-bootstrap";
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';
import classes from './upcominglotterydraws.module.css';
import country from './images/country.png';
import alarm from './images/alarm.png';
const UpcomingLotteryDraws = () => {
    return (
        <Container className={classes.maincontainer} fluid>
            <div></div>
            <Row>
                <Col className={classes.cardcol}>
                    <Row>
                        <Col className={classes.colone} xs={5}> <img src={icon4} alt="" /></Col>
                        <Col className={classes.coltwo} xs={7}>
                            <Row><Col className={classes.image}><img src={country} alt="" /></Col>
                                <Col className={classes.text}><h6>MEGA MILLIONS</h6>
                                </Col>
                            </Row>
                            <h6 className={classes.h66}> $94 000 000</h6>
                        </Col>
                    </Row>
                    <Row className={classes.row2}>
                        <Col xs={6}><Button> Play Now</Button></Col>
                        <Col xs={6}><Row ><Col xs={9}><h6><img src={alarm} alt="" />1:22:01</h6></Col></Row></Col>
                    </Row>
                </Col>
                <Col className={classes.cardcol}>
                    <Row>
                        <Col className={classes.colone} xs={5}> <img src={icon5} alt="" /></Col>
                        <Col className={classes.coltwo} xs={7}>
                            <Row><Col className={classes.image}><img src={country} alt="" /></Col>
                                <Col className={classes.text}><h6>MEGA MILLIONS</h6>
                                </Col>
                            </Row>
                            <h6 className={classes.h66}> $94 000 000</h6>
                        </Col>
                    </Row>
                    <Row className={classes.row2}>
                        <Col xs={6}><Button> Play Now</Button></Col>
                        <Col xs={6}><Row ><Col xs={9}><h6><img src={alarm} alt="" />1:22:01</h6></Col></Row></Col>
                    </Row>
                </Col>
                <Col className={classes.cardcol}>
                    <Row>
                        <Col className={classes.colone} xs={5}> <img src={icon6} alt="" /></Col>
                        <Col className={classes.coltwo} xs={7}>
                            <Row><Col className={classes.image}><img src={country} alt="" /></Col>
                                <Col className={classes.text}><h6>MEGA MILLIONS</h6>
                                </Col>
                            </Row>
                            <h6 className={classes.h66}> $94 000 000</h6>
                        </Col>
                    </Row>
                    <Row className={classes.row2}>
                        <Col xs={6}><Button> Play Now</Button></Col>
                        <Col xs={6}><Row ><Col xs={9}><h6><img src={alarm} alt="" />1:22:01</h6></Col></Row></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default UpcomingLotteryDraws;