import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { LoginGoogle, LoginEmail, } from './../../config/redux/actions/authAction';
import img from './login.png';

function Login() {
  const { dataLogin } = useSelector((state) => state.auth);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginGoogle = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) navigate('/Home')
  }

  const handleLoginEmail = () => {
    dispatch(LoginEmail(email, password));
    setTimeout(() => {
      navigate('/Dashboard');
    }, 1500);
  }

  useEffect(() => {
    document.body.style.backgroundImage = `url('${img}')`;
    document.body.style.backgroundSize = "auto";
    document.body.style.backgroundRepeat = "no-repeat";
    if (dataLogin?.email === "admin@admin.com") navigate('/Dashboard');
    if (dataLogin?.email !== "admin@admin.com" && dataLogin !== null) navigate('/Home');
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <div className="login">
          <div className="logo"></div>
          <h1 className="welcome-title">Welcome, Admin BCR</h1>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="button-login btn" onClick={handleLoginEmail}>Sign In</button>
            </form>
            <button className="button-login-google btn" onClick={handleLoginGoogle}>Login with Google</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
