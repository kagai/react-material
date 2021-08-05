import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import home  from './components/home';
import login from './components/login';
import  theme from './theme'


function App() {
  return (
    <Router>
	   <ThemeProvider muiTheme={theme}>
		<Switch>
			<Route path="/admin/login" exact component={login} />
			<Route path="/admin/home" component={home} />
			
		</Switch>
	   </ThemeProvider>
	</Router>

  );
}

export default App;
