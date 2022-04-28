import { Container } from 'react-bootstrap';
import classes from './App.module.css'
import BiggestLotteryWinners from './components/biggestlotterywinners';
import Footer from './components/footer';
import FrequentlyAskedQuestions from './components/frequentlyaskedquestion';
import Header1 from './components/header1';
import HeroImage from './components/heroimage';
import Mainheader from './components/mainheader';
import Playupcoming from './components/playupcoming';
import UpcomingLotteryDraws from './components/upcominglotterydraws';


function App() {
  return (
    <Container className={classes.container}>
      <Header1 />
      <Mainheader />
      <HeroImage />
      <UpcomingLotteryDraws />
      <Playupcoming />
      <BiggestLotteryWinners />
      <FrequentlyAskedQuestions />
      <Footer />
    </Container>
  );
}

export default App;
