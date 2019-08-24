import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Authentication';
import Register from './Authentication/register';
import Dashboard from './Components/Pages/Dashboard';
import { SnackbarProvider } from 'notistack';

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
						<PrivateRoute exact path='/' component={Dashboard} />
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
