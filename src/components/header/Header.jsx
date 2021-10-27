import "./header.css"
import image from "./header.jpeg";
export default function Header() {
    return (
        <div className="Maindiv">
            <div className="Header">
            <div className="Headertitle">
                <img className="Headerimg" src={image} alt="" />
            </div>
            </div>
            <ul className="Headerlist">
                <li className="headerlistitem">সর্বশেষ</li>
                <li className="headerlistitem">বিশেষ সংবাদ</li>
                <li className="headerlistitem">রাজনীতি</li>
                <li className="headerlistitem">করোনাভাইরাস</li>
                <li className="headerlistitem">বাংলাদেশ</li>
                <li className="headerlistitem">বিশ্ব</li>
                <li className="headerlistitem">রাজনীতি</li>
                <li className="headerlistitem">করোনাভাইরাস</li>
                <li className="headerlistitem">বাংলাদেশ</li>
                <li className="headerlistitem">বিশ্ব</li>
               
            </ul>
        </div>
    )
}
