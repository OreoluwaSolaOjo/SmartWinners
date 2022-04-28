import { Container } from 'react-bootstrap';
import classes from './header1.module.css';
import logo from './images/logo.png';
import social from './images/social.png';
import country from './images/country.png';
import downarrow from './images/arrowdown.png';
const Header1 = () => {
    return (
        <Container fluid>
            <div className={classes.header1}>
                <div className={classes.firstelement}>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className={classes.imagetext}>
                        <h6>Welcome Roma - <span>Logout</span></h6>
                        <h6>Your balance: P0.00</h6>
                    </div>
                </div>
                <div className={classes.socialscontainer}>
                    <div>
                        <img src={social} alt="" />
                    </div>
                    <div className={classes.images}>
                        <img src={country} alt="" /> <h6>English</h6>  <img src={downarrow} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Header1;