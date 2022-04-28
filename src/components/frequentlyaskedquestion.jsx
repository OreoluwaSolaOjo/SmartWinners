import { Container } from 'react-bootstrap';
import classes from './frequentlyaskedquestions.module.css';
import arrowdown from './images/arrowdown.png';

const FrequentlyAskedQuestions = () => {
    return (
        <Container className={classes.maincontainer} fluid>
            <div className={classes.main}>
                <h4>FREQUENTLY ASKED QUESTIONS (FAQ)</h4>
                <div className={classes.faq}>
                    <h6>Can I play the lottery online?</h6><img src={arrowdown} alt="" />
                </div>
                <div className={classes.faq}>
                    <h6>How will I get my wins?</h6><img src={arrowdown} alt="" />
                </div>
                <div className={classes.faq}>
                    <h6>Is it safe to play lottery online?</h6><img src={arrowdown} alt="" />
                </div>
            </div>
        </Container>
    );
}

export default FrequentlyAskedQuestions;