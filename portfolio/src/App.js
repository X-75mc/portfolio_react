import './styles/main.css';



import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      
      <NavBar/>

      {/*<Home></Home>*/}
      <Projects/>

      {/*<Contacts/>*/}

    <Footer/>
    </>
  );
}

export default App;
