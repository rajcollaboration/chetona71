import Header from "./components/header/Header";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import Singlepost from "./pages/singlepost/Singlepost";
import Writepage from "./pages/writepage/Writepage";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import UpdatePage from "./pages/updatePage/UpdatePage";


function App() {
 
  const {user} = useContext(Context);
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <Router>
        <Switch>
          <Route exact path='/'>
             <Home/>
          </Route>
          <Route path='/writepage'>
            {user?<Writepage/>:<Login/>}
          </Route>
          <Route path='/singlepost/:postid'>
          <Singlepost/>
          </Route>
          <Route path='/setting'>
          <Settings/>
          </Route>
          <Route path='/login'>
          {user?<Writepage/>:<Login/>}
          </Route>
          <Route path='/updatepost'>
          {user?<UpdatePage/>:<Login/>}
          </Route>
        </Switch>
      </Router>
     {/* <Home/> */}
     
     {/* <Writepage/> */}
     {/* <Settings/> */}
     {/* <Login/> */}
    </div>
  );
}

export default App;
