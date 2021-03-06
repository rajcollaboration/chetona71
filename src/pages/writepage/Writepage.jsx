import "./writepage.css";
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function Writepage() {
    const classes = useStyles();
    const [categorys,setCategorys] = useState([]);
    useEffect(() => {
        const category = async ()=>{
            const res = await axios.get("http://13.233.84.246:8000/api/categories").then((e)=>{
                console.log(e);
                setCategorys(e.data);
            })
        }
        category();
    }, [])
    const [categories, setCategory] = React.useState([]);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const { user } = useContext(Context)
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState();
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleImage = (e) => {

        setFile(e.target.files[0])
    }

    const handleDesc = (e) => {

        setDesc(e.target.value);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            desc,
            categories,
            username: user.username,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                const imres = await axios.post("http://13.233.84.246:8000/api/fileupload", data)
            } catch (error) {
                console.log(error);
            }
            try {
                const res = await axios.post('http://13.233.84.246:8000/api/post', newPost);
                console.log(res);
            } catch (error) {
                console.log(error);
            }

        }

    }

    return (
        <div>
            <Grid container>
                <Grid item md={9}>
                    <div className="write">
                        <div className="writepostdetails">
                            {
                                file && (
                                    <img className="writeimage" src={URL.createObjectURL(file)} alt="" />
                                )
                            }
                            <h3 className="Writetitle">{title}</h3>
                            <p className="writedes">{desc}</p>
                        </div>
                        <form className="writeform">
                            <div className="Writeformgroup">
                                <label htmlFor="fileinput">
                                    <i className="Writeicon fas fa-plus-square"></i>
                                </label>
                                <input type="file" id="fileinput" onChange={handleImage} name="file" style={{ display: 'none' }} />
                                <input type="text" className="Writeinput" name="title" onChange={handleTitle} placeholder="Write Post Title" id="" autoFocus={true} />
                            </div>
                            <div className="Writeformgroup">
                                <textarea placeholder="Write Your Post Description" name="desc" onChange={handleDesc} className="Writeinput Writetext"></textarea>
                            </div>
                            <div className="Writeformgroup">
                                <FormControl className={classes.formControl}>
                                    <Select
                                        value={categories}
                                        onChange={handleChange}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Select Category
                                        </MenuItem>
                                        {
                                            categorys.map(item=>{
                                                return(
                                                    <MenuItem value={item.name}>{item.name}</MenuItem>
                                                )
                                            })
                                        }
                                        {/* <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem> */}
                                    </Select>
                                    <FormHelperText>Select Category</FormHelperText>
                                </FormControl>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="Writesubmit">Publish Post</button>
                        </form>
                    </div>
                </Grid>
                <Grid item md={3}>
                    <Sidebar />
                </Grid>

            </Grid>
        </div>
    )
}
