import "./sidebar.css";
import image from '../../pages/home/original.jpeg';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));
export default function Sidebar() {
    const location = useLocation();
    const [category,setCategory] = useState([]);
    useEffect(() => {
        const category = async ()=>{
            const res = await axios.get("http://localhost:8000/api/categories").then((e)=>{
                setCategory(e.data);
            })
        }
        category();
    }, [])
    const classes = useStyles();
    return (
        <div>
             <Paper className={classes.paper}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="220"
                                    image={image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>

                        <Card className="Sidebaritem">
                            <div ><h5 className="Sidebartitle">CATEGORIES</h5></div>
                            <ul className="Sidebarlist">
                                {category.map(cat=>{
                                    return(
                                        <li className="sidebarlistitem">{cat.name}</li>
                                    )
                                })}
                               
                            </ul>
                        </Card>

                        <Card className="Sidebaritem">
                        <div ><h5 className="Sidebartitle">FOLLOW US</h5></div>
                            <div className="Sidebarsocial">
                                <i className="Sidebaricon fab fa-facebook-square"></i>
                                <i className="Sidebaricon fab fa-twitter-square"></i>
                                <i className="Sidebaricon fab fa-youtube"></i>
                            </div>
                        </Card>
                    </Paper>
        </div>
    )
}
