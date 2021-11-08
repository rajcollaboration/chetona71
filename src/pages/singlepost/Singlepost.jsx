import "./singlepost.css";
import { useContext, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router";
import axios from "axios";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },
}));
export default function Singlepost() {
    const {user} = useContext(Context);
    const PF = "http://13.233.84.246:8000/images/"
    const [singlePost,SetsinglePost] = useState({}); 
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    console.log(path);
    useEffect(() => {
        const getPost = async ()=>{
            const res = await axios.get('http://13.233.84.246:8000/api/post/' + path).then((e)=>{
                
                SetsinglePost(e.data);
            })
        }
        getPost();
    }, [path])
    const handleDelete=async()=>{
        try {
            const res =await axios.delete('http://13.233.84.246:8000/api/post/' + path,{data:{username:user.username}});
            window.location.replace('/');
        } catch (error) {
            console.log(error);
        }
    }
    const handleEdit=()=>{
        
    }
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item md={9}>
                    
                   <div className="Singlepagewraper">
                   <img src={PF+singlePost.photo} style={{width:"100%",maxHeight:"350px"}}/>

                   <h3 className="Singlepagetitle">
                       {singlePost.title} 
                    <div className="Singlepageedit">
                   {
                       user?<><Link to={`/updatepost/${path}`}><i className="Singleposticon far fa-edit" ></i></Link>
                       <i className="Singleposticon fas fa-trash-alt" onClick={handleDelete}></i></>:""
                   }
                   </div>
                   </h3>
                   
                   <div className="Singlepostinfo">
                       <span>Author: {singlePost.username}</span>
                       <span>{new Date(singlePost.createdAt).toDateString()}</span>
                   </div>
                   <p className="Singlepagedesc">
                      {singlePost.desc}
                   </p>

                   
                   </div>
                </Grid>
                <Grid item md={3}>
                  <Sidebar/>
                </Grid>

            </Grid>
        </div>
    )
}
