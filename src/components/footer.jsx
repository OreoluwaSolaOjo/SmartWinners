import { Container } from "react-bootstrap";
import classes from './footer.module.css';
import whatsapp from './images/whatsapp.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import facebookmessenger from './images/facebook-messenger.png';
import comodo from './images/comodo.png';
import ctv from './images/ctv.png';
import hsbc from './images/hsbc.png';
import litecoin from './images/litecoin.png';
import maestrodark from './images/Maestro-dark.png';
import mastercarddark from './images/MasterCard-dark.png';
import qiwi from './images/qiwi.png';
import skrilldark from './images/Skrill-dark.png';
import visadark from './images/Visa-dark.png';
import dinersclubdark from './images/DinersClub-dark.png';
import bitcoindark from './images/Bitcoin-dark.png';


const Footer = () => {
    return (
        <Container className={classes.maincontainer} fluid>
            <div className={classes.mainfooter}>
                <div className={classes.rowone}>
                    <div className={classes.rowonecol}>
                        <img src={whatsapp} alt="" />
                        <div className={classes.rowonecoltext}><h5>
                            Live chat by Whatsapp
                        </h5>
                            <h5>
                                Customer Service
                            </h5>
                        </div>
                    </div>
                    <div className={classes.sm}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={facebookmessenger} alt="" />
                    </div>
                </div>
                <div className={classes.rowtwo}>
                    <div className={classes.rowtwoone}>
                        <h5>USEFUL LINKS</h5>
                        <h6>Lottery results & winners</h6>
                        <h6>Lottery promotions</h6>
                        <h6>About Us</h6>
                        <h6>Contact Us</h6>
                        <h6>Terms & Conditions</h6>
                        <h6>Security</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Acceptable Use Policy</h6>
                        <h6>Website Use Policy</h6>
                        <h6>Affiliate program</h6>

                    </div>
                    <div className={classes.rowtwotwo}>
                        <h5>SMART WINNERS</h5>
                        <h6>The trade name SmartWinners and all content on this website is a
                            copyright of SmartWinners Limited.
                            All rights reserved. We are an independent lottery ticket purchasing
                            service. We are not affiliated with nor are we endorsed by any State
                            sanctioned lottery organization.
                            We make no claims on our site to be such. <br />
                            Our registered business address is
                            Unit 6158, PO Box 6945, London, W1A
                            6US, United Kingdom.
                        </h6>
                    </div>
                    <div className={classes.rowtwothree}>
                        <h5>PAYMENT METHODS</h5>
                        <div>
                            <img src={visadark} alt="" />
                            <img src={mastercarddark} alt="" />
                            <img src={maestrodark} alt="" />
                            <img src={dinersclubdark} alt="" />
                            <img src={skrilldark} alt="" />
                            <img src={bitcoindark} alt="" />
                            <img src={qiwi} alt="" />
                            <img src={hsbc} alt="" />
                            <img src={litecoin} alt="" />
                        </div>
                        <h5>SECURITY & TRUST</h5>
                        <div>
                            <img src={ctv} alt="" />
                            <img src={comodo} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Footer;