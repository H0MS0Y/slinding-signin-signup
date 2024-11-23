import React, { useState } from 'react';
import './AuthForm.css';


const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);

  const [show,setShow] = useState(false)
  };

  return (
    <div className="auth-container">
      <div className={`forms-container ${isSignIn ? 'signin' : 'signup'}`}> 
        <div className="form-box signin">
          <h2>Sign in to Account</h2>
          <div className="social-icons">
            <button className="social-btn">f</button>
            <button className="social-btn">G+</button>
          </div>
          <p className="divider">or use your email account</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="submit-btn">Sign in</button>
          </form>
        </div>

        <div className="form-box signup">
          <h2>Create Account</h2>
          <div className="social-icons">
        <a href='#'><button className="social-btn" >f</button></a>
            <button className="social-btn">G+</button>
          </div>
          <p className="divider">or use your email for registration</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit" className="submit-btn">Sign up</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className={`overlay ${isSignIn ? 'signin' : 'signup'}`}>
            <div className="overlay-panel left">
              <h2 className='Welcome-h2'>Welcome Back!</h2>
              <p>To keep connected with us please <div>login with your personal info</div></p>
              <button className="ghost-btn" onClick={toggleForm}>
                Sign in
              </button>
            </div>
            <div className="overlay-panel right">
              <h2 className='sign-uph2'>Hello, Friends!</h2>
              <p>Enter your personal details and start <div>journey with us</div></p>
              <button className="ghost-btn" onClick={toggleForm}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;