import { Container } from "react-bootstrap";
import classes from './mainheader.module.css';

const Mainheader = () => {
    return (
        <Container className={classes.maincontainer} fluid>
            <div className={classes.rectangle}>
                <div className={classes.first}>
                    <div>
                        <h6>HOME</h6>
                    </div>
                    <div>
                        <h6>PLAY ALL LOTTERY</h6>
                    </div>
                    <div>
                        <h6>LOTTERY GROUPS</h6>
                    </div>
                    <div>
                        <h6>PROMOTIONS</h6>
                    </div>
                </div>
                <div className={classes.second}>
                    <h6>MY ACCOUNT</h6>
                </div>
            </div>
        </Container>
    );
}

export default Mainheader;