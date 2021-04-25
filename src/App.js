import "./App.css";
import { useState , useEffect } from "react";
import Axios from "axios";
function App() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const[passwordList,setPasswordList]=useState([]);

  /*
  useEffect hook is used to make function call whenever a page reloads/re-rendered as well as 
  I can determine whenever it need to be called .
  
  },[]) --> this is used to tell useEffect hook that only re-render when the page reloads 
  and not when a state changes.
  */

  useEffect(() => {
    Axios.get("http://localhost:3001/showpasswords").then((response) => {
        setPasswordList(response.data);
    });
  },[])

  const addPassword = () => {
    Axios.post("http://localhost:3001/addpassword", {
      password: password,
      title: title,
    });
  };


  const decryptPassword = (encryption) => {
    Axios.post("http://localhost:3001/decryptpassword",{
      password:encryption.password,
      iv:encryption.iv,
    }).then((response) => {
      setPasswordList(passwordList.map((val)=>{
        return val.id == encryption.id 
        ? {
            id: val.id,
            password:val.password,
            title:response.data,
            iv:val.iv
          } 
        : val;
      })
      );
    });
  };

  return (
    <div className="App">
          <h1 className="text1">Password Manager</h1>
      <div className="AddingPassword">
        <input
          type="text"
          placeholder="type your password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="type application name"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button onClick={addPassword}> Add Password</button>
      </div>
        <h2 className="text2">Your Passwords</h2>
      <div className="Passwords">
          {/** Showing all the passwords  */}
         {passwordList.map((val,key) => {
           return( 
              <div className="password" 
              onClick={() => {
                decryptPassword({
                 password:val.password,
                 iv:val.iv,
                 id:val.id,
              })
            }}
              key={key}
              >
                  <h3>{val.title}</h3>
              </div>
            );
         })}
      </div>
    </div>
  );
}

export default App;