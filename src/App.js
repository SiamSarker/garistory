
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/pages/Home';
import SignUp from './Component/pages/SignUp';
import Product from './Component/pages/Product';
import Services from './Component/pages/Services';
import Vehicles from './Component/pages/Vehicles';
//  This is Siam's code

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
       <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/entry' exact component={Product}/>
        <Route path='/signUp' exact component={SignUp}/>
        <Route path='/services' exact component={Services}></Route>
        <Route path='/vehicles' exact component={Vehicles}></Route>
       </Switch>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
