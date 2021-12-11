import './App.css';
import './Auth.css';
import './Dash.css';
import Home from './Pages/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Auth } from './Pages/auth';
import { Dash } from './Pages/dash';
import { Menu } from './Components/menu';
export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/dash" component={Dash} />
				<Route exact path="/menu" component={Menu} />
				<Route exact path="/auth" component={Auth} />
			</Switch>
		</BrowserRouter>
	);
}
