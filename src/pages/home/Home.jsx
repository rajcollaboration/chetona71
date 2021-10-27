import "./home.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useState,useEffect} from "react"; 
import axios from "axios";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },
}));

export default function Home() {
   
    const classes = useStyles();
    const [posts,setposts] = useState([]);
    useEffect(() => {
        const fetchPosts = async()=>{
           const res =await axios.get('http://localhost:8000/api/post') .then((e)=>{
               console.log(e);
               setposts(e.data)
           })
        }
       
        fetchPosts();
    }, [])
    return (
        <div className={classes.root}>

            <Grid container>
                <Grid item md={9} sm={12}>
                    <Posts name={posts}/>
                </Grid>
                <Grid item md={3} sm={12}>
                   <Sidebar/>
                </Grid>

            </Grid>

        </div>
    )
}
