import './App.css';
import LoginForm from './components/LoginForm';
import AddPlant from './Schema/AddPlant/AddPlant';
import EditPlant from './Schema/EditPlant/EditPlant';
import PlantList from './components/PlantList';
import Home from './components/Home';
import "../src/"
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AddSuccess from './Schema/AddPlant/AddSuccess'
import EditPlantSuccess from './Schema/EditPlant/EditPlantSuccess';
import SignupForm from './components/SignupForm';
import PrivateRoute from './components/PrivateRoute';
import { useState } from 'react';
import SignUpSuccess from './components/SignupSuccess';


function App() {
  const [toggle, setToggle] = useState(false)
  const flipToggle = () => {
    setToggle(!toggle)
    console.log('im here!')
    window.location.href = '/plantList'
  }
  const logout = () => {
    window.localStorage.removeItem('token')
    window.location.href = '/login'
  };
  const signUp = () => {
    window.location.href = '/signUp'
  }

  return (
    <Router>
      <div className='App'>
        <Wrapper>

          <h1>Water My Plants</h1>
          <nav className="home-login-subscribe">
            <Link className='links' to='/'>HOME</Link>
            {localStorage.getItem('token') ?
            <div></div> :
            <Link className='links' to='/login'>LogIn</Link>
            }
            {localStorage.getItem('token') ?
            <Link className='links' to='/logout' onClick={logout}>Logout</Link> : <div></div>
            }
            {localStorage.getItem('token') ?
            <div></div> :
            <Link className='links' to='/signUp' onClick={signUp}>Sign Up</Link>
            }

            {localStorage.getItem('token') ?
              <Link className='links' to='/plantList'>View Plants</Link> : <div></div>}

            {localStorage.getItem('token') ?
              <Link className='links' to='/addPlant' id="add-plant">Add a Plant</Link> : <div></div>}

          </nav>
          <Switch>
            <PrivateRoute path='/SignupSuccess' component={SignUpSuccess} />
            <PrivateRoute path='/AddSuccess' component={AddSuccess} />
            <PrivateRoute path='/EditPlantSuccess' component={EditPlantSuccess} />
            <PrivateRoute path='/addPlant' component={AddPlant} />
            <PrivateRoute path='/editPlant' component={EditPlant} />
            <PrivateRoute path='/plantList' component={PlantList} />
            <Route exact path='/' component={Home} />
            <Route path='/login'><LoginForm setToggle={flipToggle} /></Route>
            <Route path='/signUp'><SignupForm setToggle={flipToggle}/></Route> 

          </Switch>
        </Wrapper>

      </div>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
div {
  @media (max-width: 768px) {
      background: rgb(124, 124, 64);
    }
}
h1{
    font-family: 'Chelsea Market', cursive;
    font-size: 2rem;
    color: black;
    padding-left: 2%;
    margin-bottom: 2%;
    @media (max-width: 768px) {
      font-size: 1.5rem;
		text-align: center;
    }
    
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

}
.links{
  margin: 0.5%;
}
a{
text-decoration: none;
background-color: rgb(179, 170, 170);
padding: 1%;
border-radius: 25%;
margin: 0 1%;
@media (max-width: 768px) {
  background-color: rgb(233, 233, 127);
}
&:hover{
    background-color: rgb(11, 223, 57);
    transform:scale(1.25);
    transition: all 0.5s ease-in-out; 
}
 transition: all 0.5s ease-in-out;
}

`;