import "./login.css"
import Grid from '@material-ui/core/Grid';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
export default function Login() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        setLoginData({ ...loginData, [name]: value })

    }
    const [error, setError] = useState(false)
    const {user,dispatch,isFetching} = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        setError(false)
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post('http://13.233.84.246:8000/api/auth/login', loginData)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"})
        }
    
    }
    console.log(user);
    
    return (
        <div>
            <Grid container className="center">
                <Grid item sm={8}>
                    <div className="form-container">
                        <div className="left-content">
                            <h3 className="title">Site Name</h3>
                            <h4 className="sub-title">Lorem ipsum dolor sit amet.</h4>
                        </div>
                        <div className="right-content">
                            <h3 className="form-title">Login</h3>
                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Username / Email</label>
                                    <input type="text" value={loginData.username} className="form-control" name="username" onChange={handleInput} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" onChange={handleInput} />
                                </div>
                                <button className="btn signin" type="submit">Login</button>
                            </form>
                            {error && <span className="signup-link">please provide correct information</span>}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
