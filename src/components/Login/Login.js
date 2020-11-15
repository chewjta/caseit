import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (email.length < 4 || password.length < 4) {
      setError("username or password is too short!");
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => setError(error.message));
    }
  };

  const register = (e) => {
    e.preventDefault();
    if (email.length < 4 || password.length < 4) {
      setError("username or password is too short!");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => setError(error.message));
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAAbGhns7OzGxsbV1NT29fWdnZ1fXl76+voPDgwFAQDX19aKiopnZ2e/v787Ojq4uLgxMDAWFRSko6NWVlWUlJMREA4jIiGqqanMzMzg4OAIBQFOTk3n5+cfHh13dnZ/f39HR0Y5ODczMTFJSUh8e3ttbWxTUlKnYxSQAAAEAklEQVR4nO3da3uqOBSGYVdaESJibVQOph6629H//wsnFFDb6WmRjItr5r0/sXchF49AwjdGIwAAAAAAAAAAAAAAAICB2izWs972s+U4kS74VnogZ9qXtdYdnlXSGV/axmSVUibXfeXGHa/pOZVO+dyStFJToj9x1lf84K6hUjnNpGM+c3SnRnY29hwmXZt6oFWQcwoqI2VoFmKaSNZkFD0FGCmoGal8F+rx2RS5omOgwQKpXOBjFGy4qHBXcR5suBDqM7oLON6dexZ1wPG8laRocf7Xtlo0Pl7UxbLhdq3iqykpmjf7V9vLrm7Eyb981hyPJj+1m8laUad4v1dy/sN29EgPlz88n/+wm3Rz1Sk3u1uc+u+M3Q/evohs6reS4uGNoQ8X8XBa1U77evEsL/9PpjmgqFfD9jpWlzEHYO3mmWYrcm81ZfdA6l+e4oao3borlTXtdq6mw1n3X3N7aLYOVFyuW/bLRS2m+Lwd7WjdDmXNc7Az9OUm0vaes9dzfEoU/zzBRkeiq1ln0T29bvYynx9xe4lVdP+2lZK9fqspaUr65fE7L8Y9e8urYyKizdvGvXsQw62wfiLqChf0/sa6L+hnxf27Y17aserpK+QS6+NSuLx6ohqbdqn70nzz4YjXdmUdZuHkH4V8q/am/e8Wxu27DApvCYU8KJSAQh4USkAhDwoloJAHhRJQyINCCSjkQaEEFPKgUAIKeVAoAYU8KJSAQh4USkAhDwoloJAHhRJQyINCCSjkQaEEFPKgUAIKeVAoAYU8KJSAQh4USkAhDwoloJAHhRJQyINCCSjkQaEEFPKgUAIKeVAoAYU8KJSAQh4USkAhDwoloJAHhRJQyINCCSjkQaEEFPKgUAIKeVAoAYU8KJSAQh4USkAhDwoloJAHhRJQyINCCSjkQaEEFPKgUAIKeVAoAYU8KJSAQh4USkAhDwoloJAHhRIuhUtaeY827K/lLujVe7TnAX7xOJl2hVX32XAPu/ab89WACkdatb/7+bPh/aXUfm987gqTH3a+mT+m+6j9ivaeY2Xdo7wk439DhLLX+VOzVVHX2tOM2pt0FGudeZ5XOAs6f8renSH9Vc77Kffu6FkzUOLGLOWSPqgn0+7SleSnq5oMaaIZjY76fBHdFHGInx76eIoP826QRCvt//YQzoaUDfvQHK2iNOiInvbunpoEHG9JanoMOJ6/ZGdU+7YVQknK7KKf97ullJSifZgVOtnXg/m+OgRXkVHWlv6NSamnynSr4pCkZN0vb7OySvuryky7C2j14K5gLTpSrpT2XA+1UjkdB/YMno1P7gyN8mHcL3QaS4d8YzuJC69LWGTlgN5kvpD4kD55AAAAAAAAAAAA+P/6G4jtWcVIKDXcAAAAAElFTkSuQmCC"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h4>{error}</h4>
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to Amazon's conditions of use & sale. Please
          see our privacy notice, cookies notice and our interest-based ads.
        </p>

        <button onClick={register} className="login__registerButton">
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
