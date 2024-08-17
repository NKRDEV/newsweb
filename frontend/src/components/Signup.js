
import React,{ useState } from "react";

const Signup = () => {
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    console.log("signup email:",email,"password:",password);
    const url ='http://127.0.0.1:8000/signup/'
    fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: email,
          username: username,
          password: password,
      }),
    })
    .then((response) => {
      return response.json();
    })

  }
    return (
      <form onSubmit={handleSignup} className="form-container">
            <h1>Signup</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSignup}>Create</button>
        </form> 
    );
  }
  export default Signup