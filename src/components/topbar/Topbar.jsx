import { useContext } from 'react'
import { Context } from '../../context/Context'
import './Topbar.css'

export default function Topbar() {
    const {dispatch,user} = useContext(Context);
    const handleLogout=()=>{
    dispatch({type:'LOGOUT'})
    }
    
    return (
        <div className="top">
            <div className="Topleft">
                <i className="Topicon fab fa-facebook-square"></i>
                <i className="Topicon fab fa-twitter-square"></i>
                <i className="Topicon fab fa-youtube"></i>
            </div>
            <div className="Topcenter">
                <ul className="Toplist">
                    <li className="Toplistitem">HOME</li>
                    <li className="Toplistitem">ABOUT</li>
                    <li className="Toplistitem">CONTACT US</li>
                    <li className="Toplistitem">BLOGS</li>
                    <li className="Toplistitem">POSTS</li>
                    {user?<li className="Toplistitem" onClick={handleLogout}>LOGOUT</li>:""}
                </ul>
            </div>
            <div className="Topright">
                <img 
                className="Topimage"
                src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="profile" />
                <i className="Topsearchicon fas fa-search"></i>
            </div>
        </div>
    )
}
