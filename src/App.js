import { Route,useNavigate ,Routes, Navigate} from 'react-router-dom';
import Header from './components/Header';
import Poll from './components/Poll';
import Result from './components/Result';
import Login from './components/Login';
import { useState,useEffect } from 'react';
import users from './db/users.json';



function App({history}) {

  const browserHistory = useNavigate();
  const [user,setUser] = useState(null);
  

  const LogIn = (data) =>{

    let user1 = localStorage.getItem('user');

    if(user1){
      console.log("logged out");
      setUser(null);
      browserHistory("/");
      localStorage.clear();
    }else{
      users.forEach((ele) => {
        console.log(ele);
        if(ele.username === data.username && ele.password === data.password ){
          console.log("loggedIn");
          localStorage.setItem('user',ele.username);
          setUser(ele);
          browserHistory("/poll");
        }
      })
      
      if(!localStorage.getItem('user')){
        alert("wrong Passoword or Username");
      }
      
    }

  }

  function PrivateRoute({children}) {

    let user = localStorage.getItem('user');
    if(user){
      return children
    }else{
      return (<Navigate to="/" />);
    }
  }
  


  return (
    <div className="App font-mono">
      <Header LogIn={LogIn} user={user}/>
      <Routes>
        <Route path="/" exact element={ <Login LogIn={LogIn} /> } />
        <Route path="/poll" element={<PrivateRoute  ><Poll /> </PrivateRoute>}  />
        <Route path="/result" element={<PrivateRoute  ><Result /> </PrivateRoute>}  />
      </Routes>
    </div>
  );
}

export default App;
