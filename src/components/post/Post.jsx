import "./post.css"
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../../pages/home/original.jpeg';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },
}));
export default function Post({ p }) {
   
    const PF = "http://13.233.84.246:8000/images/"
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2}>
                {
                    p.map(p => {
                        console.log(p.photo);
                        return (
                            <Grid item sm={4} key={p._id}>
                                <Link to={`/singlepost/${p._id}`}>
                                <Card className={classes.root}>
                                <CardActionArea>
                                <CardMedia
                                component="img"
                                className={classes.media}
                                image={PF + p.photo}
                                height="130px"
                                width="100%"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                            {p.title}
                                </Typography>
                                <Typography variant="body2" className="Postdescription" color="textSecondary" component="p">
                            {p.desc}
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                                <div className="Postinfo">
                                <Chip variant="outlined" label={new Date(p.createdAt).toDateString()} color="primary" size="small" />
                            {
                                p.categories.map(cat => {
                                return (
                                <Chip key={cat._id} label={"Category:" + cat} color="primary" size="small" />
                            )
                            })
                            }

                                </div>
                                <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Chip variant="outlined" label={"Author:"+p.username} color="primary" size="small" avatar={<Avatar src="/static/images/avatar/1.jpg" />} />
                                </CardActions>
                                </Card>
                                </Link>
                            </Grid>
                        
            )
                    })
                }


        </Grid>
        </div >
    )
}
