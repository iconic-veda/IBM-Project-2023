import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [loginError, setLoginError] = useState(false); 

  const navigate = useNavigate();

  const expectedUsername = 'Shloka';
  const expectedPassword = 'password';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPassError(true);
    } else {
      setPassError(false);
    }

    if (email === expectedUsername && password === expectedPassword) {
      navigate('/Home', { state: { username: email } });
    } else {
      setLoginError(true); // Set login error if username/password is incorrect
    }
  };

  return (
    <div className="login_wrap">
      <div className="container">
        <h1 className="label">User Login</h1>
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="input_row">
            <div className="font">Username</div>
            <input
              autoComplete="off"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailError && <div id="email_error">Please fill up your Useername</div>}
          <div className="input_row">
            <div className="font font2">Password</div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {passError && <div id="pass_error">Please fill up your Password</div>}
          {loginError && <div id="login_error">Incorrect username or password</div>} {/* New login error message */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

