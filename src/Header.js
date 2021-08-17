import react, { useState } from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { Avatar } from '@material-ui/core'
import { Link } from "react-router-dom"


function Header() {
    const [inputSearch , setInputSearch ] = useState("");
    return (
        
            <div className="header">

<div className="header-left">
<MenuIcon />
<Link to={'/'}>
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" height="25px" />

</Link>
                

</div>
<div className="header-middle">   
<input onChange={e => setInputSearch(e.target.value) } value={inputSearch} type="text" placeholder="Search"/>

<Link to={`/search/${inputSearch}`}>
    <SearchIcon className="input-youtube" />
</Link>
                
</div>
<div className="header-right">              
                <VideoCallIcon className="header-icon" />
                <AppsIcon  className="header-icon" />
                <NotificationsIcon  className="header-icon" />
                <img alt="bouzebal" className="header-icon" src="https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" height="25px" />
                </div>              


            </div>
        
    )
}

export default Header
