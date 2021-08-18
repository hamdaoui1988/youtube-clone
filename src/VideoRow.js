import React from "react"
import './Videorow.css'
import Avatar from "@material-ui/core/avatar"
import VerifiedIcon  from "@material-ui/icons/CheckCircleOutlineOutlined"
function VideoRow({views,subs,description,timestamp,verified,channel,title,image,profileimage}) {
    return (
        <div className="videorow">
            <img src={image} width="360px" alt="myimage" height="202px" />
            <div className="videorow__text">
                <h3>{title}</h3>
                <p className="videorow__tag">{subs} views . {timestamp} ago</p>
                <div className="pronamelogo">
                  <Avatar className="videorow__avatar" alt={channel} src={profileimage} />
                  <h4>{channel} {verified && <VerifiedIcon />}</h4>
                </div>
                <h4>${description}</h4>
                
            </div> 
        </div>
    )
}

export default VideoRow
