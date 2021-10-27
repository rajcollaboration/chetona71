import Post from "../post/Post"
import "./post.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },
}));
export default function Posts({name}) {
    
    const classes = useStyles();
  
    return (
        <div>
            
                <Post p={name}/>
            
        </div>
    )
}
