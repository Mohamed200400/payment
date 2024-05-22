
import './App.css';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Adventage from './components/Adventage'
import Section2 from  './components/Section2';
import Payment from './components/payment';
import Client from './components/Client';
import User from './components/User';
import Companies from './components/Companies';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section1/>
      <Adventage/>
      <Section2/>
      <Payment/>
      <Client/>
      <User />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
