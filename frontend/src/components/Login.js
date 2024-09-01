import React,{ useState } from "react";
const Login = () => {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin(e) {
        e.preventDefault();
        console.log("name:",username,"password:",password);
    }
     return (
 
        <form onSubmit={handleLogin} class="form-example" >
        <div class="form-example">
          <label for="name">Enter your username: </label>
          <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" required/>
        </div>
        <div class="form-example">
          <label for="email">Enter your password: </label>
          <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" required />
        </div>
        <div class="form-example">
          <input type="submit" value="login" />
        </div>
        </form>
    

);
}
export default Login