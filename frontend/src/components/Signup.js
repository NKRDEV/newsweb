
import React,{ useState } from "react";

const Signup = () => {
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSignup(e) {
    e.preventDefault();
    const formdata = {
      email: email,
      username: username,
      password: password,
    };
    console.log("signup email:",email,"password:",password);
    const url ='http://127.0.0.1:8000/signup/'
    fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    })
  }
    return (
      <form onSubmit={handleSignup} className="form-container">
            <h1>Signup</h1>
            <div class="form-example">
              <label for="name">Enter your username: </label>
              <input type="text" value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username" required/>
        </div>
        <div class="form-example">
          <label for="name">Enter your email: </label>
          <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email" required/>
        </div>
        <div class="form-example">
          <label for="name">Enter your password: </label>
          <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" required/>
        </div>
            <button onClick={handleSignup}>signup</button>
        </form> 
    );
  }
  export default Signup