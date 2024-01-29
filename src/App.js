import "./App.css";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <p>Welcome, {userName}!</p>
      ) : (
        <form onSubmit={handleSubmit} data-testid="login-form">
          {error && <p className="error">{error}</p>}
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                placeholder="username"
                id="username"
                name="username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                placeholder="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              ></input>
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
