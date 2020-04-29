import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Stock from './components/Stock/Stock';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const redirectToLogin = () => {
  return <Redirect to='/login' />;
};

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Menu />

        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/stock' component={Stock} />
        <Route path='/' exact={true} component={redirectToLogin} />
        {/* <Route path='*' exact={true} component={redirectToLogin} /> */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
