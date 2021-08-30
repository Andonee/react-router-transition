import './App.css'
import { Route, NavLink, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

function App() {
	return (
		<div className='App'>
			<div className='nav'>
				<NavLink exact to='/' activeClassName='active'>
					Home
				</NavLink>
				<NavLink to='/about' activeClassName='active'>
					About
				</NavLink>
			</div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
			</Switch>
		</div>
	)
}

export default App
