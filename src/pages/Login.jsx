import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  const handleRememberChange = (checked) => {
    setRemember(checked);

    if (!checked) {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }
  };

  const handleSignIn = () => {
    if (remember) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    }

    alert("Sign in clicked!");
  };

  return (
    <div className="main-container">
      <div className="card">
        <div className="left-side">

          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back
          </button>

          <h1>Welcome to GCS</h1>

          <p className="subtitle">
            Join us today and experience the power of GCS in your hands.
            Your journey starts here!
          </p>

          <div className="input-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => handleRememberChange(e.target.checked)}
              />
              Remember me
            </label>

            <span
              className="forgot"
              onClick={() => navigate("/forgot")}
            >
              Forgot Password?
            </span>
          </div>

          <div className="button-row">
            <button className="signin-btn" onClick={handleSignIn}>
              Sign In
            </button>

            <button
              className="signup-btn"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>

          <div className="social-icons">
            <div
              className="circle"
              onClick={() =>
                window.open("https://www.facebook.com/login", "_blank")
              }
            >
              f
            </div>

            <div
              className="circle"
              onClick={() =>
                window.open("https://twitter.com/login", "_blank")
              }
            >
              t
            </div>

            <div
              className="circle"
              onClick={() =>
                window.open("https://accounts.google.com/login", "_blank")
              }
            >
              G+
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
