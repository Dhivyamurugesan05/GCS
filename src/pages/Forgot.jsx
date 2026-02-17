import { useState } from "react";
import "./Forgot.css";

function Forgot() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    const response = await fetch("http://localhost:5000/send-reset-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSend}>Send Email</button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Forgot;
