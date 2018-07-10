import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profil'>profil</Link></li>
        <li><Link to='/login'>logout</Link></li>
      </ul>
    </nav>
  </header>
)

const Welcome = () => (
  <div>
    <h2>Welcome to my website</h2>
  </div>
);


const Profil = () => (
  <div>
    <h2>My Profil</h2>
  </div>
);



const Login = () => (
  <div>
    <Link to='/'><h2>Login</h2></Link>
  </div>
);


const Beranda = ({ match }) => (

   <div>
    <Header />
  <main>
   	<Route exact path='/' component={Welcome}/>
	<Route path='/profil' component={Profil}/>
  </main>
  </div>
);

const App=()=>(
	<Router>
	<div>
	      <Route exact path='/' component={Beranda}/>
	      <Route path='/login' component={Login}/>
    </div>
	</Router>
	)



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
