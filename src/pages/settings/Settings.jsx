import "./settings.css"
import Grid from '@material-ui/core/Grid';
import Sidebar from "../../components/sidebar/Sidebar";
export default function Settings() {
    return (
        <div>
            <Grid container>
                <Grid item md={9}>
                    <h3 className="Settingtitle">Update Your Account</h3>
                    <div className="Formalignent">
                        <Grid container>
                            <Grid item md={3}>
                                <div className="Settingprofilepic">
                                    <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="" />
                                    <label htmlFor="updateprofilepic">
                                        <div className="editicondiv">
                                            <i className="Settingprofilepicediticon fas fa-pencil-alt"></i>
                                        </div>
                                    </label>
                                </div>
                            </Grid>
                            <Grid item md={9}>
                            <div className="Settingsformgroup">
                            <form className="settingsform">
                                <input type="file" name="" id="updateprofilepic" className="updateprofilepic" />
                                <input type="text" placeholder="Enter Username" name="" id="" className="Settingsforminput" />
                                <input type="email" placeholder="Enter Email" name="" id="" className="Settingsforminput" />
                                <input type="password" placeholder="Enter Password" name="" id="" className="Settingsforminput" />
                                <input type="text" placeholder="Confirm Password" name="" id="" className="Settingsforminput" />

                                <button type="submit" className="Settingbutton">Submit</button>
                            </form>
                        </div>
                            </Grid>
                        </Grid>  
                    </div>
                </Grid>
                <Grid item md={3}>
                    <Sidebar />
                </Grid>
            </Grid>
        </div>
    )
}
