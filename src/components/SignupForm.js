import React from 'react'
import styled from 'styled-components';
import axios from 'axios';


class SignupForm extends React.Component {


  state = {
    credentials: {
      username: '',
      password: '',
      phoneNumber: '',
    }
  };
  constructor(props) {
    super(props)
    this.setToggle = props.setToggle
    console.log('this.setToggle', this.setToggle)
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signUp = e => {
    e.preventDefault();
    axios.post('https://wmp-api.herokuapp.com/api/auth/register', this.state.credentials)
      .then(res => {
        console.log('res: ', res)
        localStorage.setItem('token', res.data.token);
        this.setToggle()
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <Container>
      <div>
        <form onSubmit={this.signUp}>
          <label>Username:
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="Choose a new username"
            />
          </label>
          <label>Phone Number:
            <input
              type='tel'
              name='phoneNumber'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              value={this.state.credentials.phoneNumber}
              onChange={this.handleChange}
              placeholder="format = 555-555-5555"
            />
          </label>
          <label>Password:
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder='Choose a new password'
            />
          </label>
          <button>Sign Up</button>
          <h3>Sign Up and Come on in!</h3>
          <p>We'll help remembering to water your plants easy!</p>

        </form>
        <div className='images'>
                        <Image
                            src="https://images.unsplash.com/photo-1577968897411-6973c2e2452a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdXNlJTIwcGxhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="plant"
                        />
                    </div>
      </div>
      </Container>

    )
  }
}

export default SignupForm

const Image = styled.img`
box-sizing: border-box;
border: 1px solid black;
margin: 3% ;
border-radius: 30%;
max-height: 100%;
@media (max-width: 768px){
  max-width: 100%;
  border-radius: 50%;
}
`;


const Container = styled.div`
form{
  margin: 1%;
  display: flex;
  flex-direction: column;
	justify-content: space-space-between;
	align-items: center; 

}
label{
  margin: 1%;


}
button{

}
`;
