import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Authentication';
import Register from './Authentication/register';
import ForgotPassword from './Authentication/forgot';
import Dashboard from './Components/Pages/Dashboard';
import { SnackbarProvider } from 'notistack';

import Profile from './Components/Pages/Profile';
import Practice from './Components/Pages/Practice';
import Solve from './Components/Pages/Solve';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest}
    render={props => (
      sessionStorage.getItem('loggedIn')
      ? <Component {...props} />
      : <Redirect to='/login' />
    )}
  />
);
  

function App(props) {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<React.Fragment>
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
            <Route exact path='/forgot' component={ForgotPassword} />
						<PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/practice" component={Practice} />
            <PrivateRoute path="/solve" component={Solve}/>
					</React.Fragment>
				</Switch>
			</Router>
		</React.Fragment>
	);
}
function AppWithNotification() {
  return(
    <SnackbarProvider maxSnack={3}>
      <App/>
    </SnackbarProvider>
  );
}
const mapStateToProps = (state) => {
  const { loggedIn } = state.user;
  return {
    loggedIn,
  };
};
export default connect(mapStateToProps)(AppWithNotification);
