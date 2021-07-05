import React, { useState, useEffect } from "react";

import axiosWithAuth from './axiosWithAuth';

// class Login extends React.Component {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route

//   // initialize state with empty credentials object
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     },
//     isFetching: false
//   }

//   // add user credentials to state when handleChange is called
//   handleChange = event => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [event.target.name]: event.target.value
//       }
//     })
//   }

//   // attempt to get authentication token from the server, set it to localStorage, then route to the protected page, which is defined as BubblePage in App.js
//   login = event => {
//     event.preventDefault();
//     this.setState({
//       isFetching: true
//     })
//     axiosWithAuth()
//       .post('login', this.state.credentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.payload);
//         this.props.history.push('/protected');
//         console.log('state.credentials in Login: ', this.state.credentials)
//       })
//       .catch(error => console.log(error.response))
//   }

//   render() {
//     return (
//       <div className='loginContain'>
//         <h1>Welcome to the Bubble App!</h1>

//         <form onSubmit={this.login}>
//           <input className='loginInput'
//             type='text'
//             name='username'
//             value={this.state.credentials.username}
//             onChange={this.handleChange}
//           />
//           <input className='loginInput'
//             type='password'
//             name='password'
//             value={this.state.credentials.password}
//             onChange={this.handleChange}
//           />
//           <button>Log In</button>
//           {this.state.isFetching && 'logging in...'}
//         </form>
//       </div>
//     )
//   }
// };

// export default Login;

const Login = props => {
  const [ credentials, setCredentials ] = useState({});
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ isFetching, setIsFetching ] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = event => {
    event.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post('login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setIsFetching(false);
        props.history.push('/protected');
        console.log('credentials in Login: ', credentials)
      })
      .catch(error => console.log(error.response))
  };

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  };

  return (
    <div className='loginContain'>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={login}>
        <input className='loginInput'
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <input className='loginInput'
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log In</button>
        {isFetching && 'logging in...'}
      </form>
    </div>
  )
}

export default Login;
