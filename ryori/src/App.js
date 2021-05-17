import {BrowserRouter as Router , Route, Link,Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/nav/Nav'
import Home from './pages/Home'
import AboutPage from './pages/About'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Missing from './components/Missing/Missing'
function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about"  component={AboutPage}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/contact" component={Contact}/>
      <Route path="*" component={Missing}/>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
