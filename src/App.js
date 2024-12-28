import React,{useState} from "react";
const App=()=>{
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");
  // const [error,setError]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!username || !password){
      setMessage("Both fields are mandatory");
      return;
    }
    if(username==="user" && password==="password"){
      setMessage("Welcome,user!");
    } else {
      setMessage("Invalid username or password");
    }
  };
  return(

    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} aria-label="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p role="alert">{message}</p>}
    </div>
  );
};
export default App