import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Stock from './components/Stock/Stock';
import StockCreate from './components/StockCreate/StockCreate';
import StockEdit from './components/StockEdit/StockEdit';
import Report from './components/Report/Report';
import {
  // BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom';

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem('LOGIN_PASSED') === 'yes';
  };

  const redirectToLogin = () => {
    return <Redirect to='/login' />;
  };

  //Protect Route
  const SecuredRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );

  return (
    <div className='App'>
      {/* <Router> */}
      {isLoggedIn() && <Header />}
      {isLoggedIn() && <Menu />}

      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />

        <SecuredRoute path='/stock' component={Stock} />
        <SecuredRoute path='/stock-create' component={StockCreate} />
        <SecuredRoute path='/stock-edit/:id' component={StockEdit} />
        <SecuredRoute path='/report' component={Report} />

        <Route path='/' exact={true} component={redirectToLogin} />
        <Route path='*' component={redirectToLogin} />
      </Switch>

      {isLoggedIn() && <Footer />}
      {/* </Router> */}
    </div>
  );
}

export default withRouter(App);
