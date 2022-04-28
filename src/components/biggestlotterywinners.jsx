import { Button, Col, Container, Row } from 'react-bootstrap';
import './biggestlotterywinners.module.css';
import classes from './biggestlotterywinners.module.css';
import bigwinnerslogo from './images/bigwinnerslogo.png';
import winners from './images/winners.png';
import number from './images/number.png';
import winner1 from './images/winner1.png';
import germany from './images/germany.png'

const BiggestLotteryWinners = () => {
    return (
        <Container className={classes.maincontainer} fluid>
            <div className={classes.firstrow}><div className={classes.rectangle} xs={8}><h6>BIGGEST LOTTERY WINNER</h6></div>
                <div className={classes.rectangle1} xs={4}><h6>OUR LATE WINNERS</h6></div></div>
            <div className={classes.secondrow}>

                <div className={classes.secondrectangle} >
                    <div className={classes.srfirstrow}><img src={bigwinnerslogo} alt="" /> <h6>WON</h6><h5>$100 000 000</h5></div>
                    <div className={classes.imagecontainer}>
                        <div className={classes.imageone}> <img src={winners} alt="" /></div>
                        <div className={classes.textimage}>
                            <h4> Sheun Vincent a Lottery winner</h4>
                            <h5>Shaun Vincent, from Barnsley,
                                celebrates his $1,158,038 National
                                lottery win after his cheque presentation
                                at the Cedar Court hotel, Wakefield
                            </h5>
                            <h6>Read the full story</h6>
                        </div>
                    </div>
                    <div className={classes.bottomcolumn}>
                        <div className={classes.fincol1}><h5>UK LOTTO RESULTS</h5><div><img src={number} alt="" />
                            <img src={number} alt="" />
                            <img src={number} alt="" />
                            <img src={number} alt="" />
                            <img src={number} alt="" />
                            <h6>Date: 20.11.2021</h6>
                        </div>
                            <div className={classes.fincol2}><Button>PLAY NOW</Button></div>
                        </div>


                    </div>
                </div>

                <div className={classes.secondrectangle1} >
                    <div className={classes.secondrect2}>
                        <h6>Total Prizes paid out</h6>
                        <h5>US$ 107 233 768</h5>
                        <h4>6 975 146 winning tickets</h4>

                    </div>
                    <div className={classes.secondrect3}>
                        <div className={classes.imagediv}><img src={winner1} alt="" /></div>
                        <div className={classes.textdiv}>
                            <h5>20 11 2021</h5>
                            <h5><img src={germany} alt="" /> JJ won P175</h5>
                            <h6>in 7N3 49 draw #13476</h6>
                        </div>

                    </div>
                    <div className={classes.secondrect3}>
                        <div className={classes.imagediv}><img src={winner1} alt="" /></div>
                        <div className={classes.textdiv}>
                            <h5>20 11 2021</h5>
                            <h5><img src={germany} alt="" /> JJ won P175</h5>
                            <h6>in 7N3 49 draw #13476</h6>
                        </div>

                    </div>
                    <div className={classes.secondrect3}>
                        <div className={classes.imagediv}><img src={winner1} alt="" /></div>
                        <div className={classes.textdiv}>
                            <h5>20 11 2021</h5>
                            <h5><img src={germany} alt="" /> JJ won P175</h5>
                            <h6>in 7N3 49 draw #13476</h6>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
}

export default BiggestLotteryWinners;