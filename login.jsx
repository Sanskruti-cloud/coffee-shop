import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coffee from "../assets/Coffee.jpg";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(true);
      return;
    }

    setError(false);

    navigate("/dashboard", {
      state: { email },
    });
  };

  return (
    <div className="login-container">
      {/* Background Image */}
      <img
        src={coffee}
        alt="Coffee Background"
        className="background-image"
      />

      {/* Login Form */}
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Brew Haven Login ☕</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <div className="error-message">
            <strong>Password must contain:</strong>
            <br />
            <br />
            • At least 6 characters
            <br />
            • One uppercase letter (A-Z)
            <br />
            • One number (0-9)
            <br />
            • One special character (@, #, $, !, %, etc.)
          </div>
        )}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;