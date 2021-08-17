import React from "react"
import Avatar from '@material-ui/core/Avatar'
import './videoCard.css'

function Videocard({image,title,channel,views,timestamp,channelimage}) {
    return (
        <div className="videoCard">
           <img src={image} alt="" width="295px" height="166px" />
           <div className="videoCard__info">
           <Avatar className="videoCard__avatar" alt={channel} src={channelimage} />
           <div className="video__text">
               <h4>{title}</h4>
               <p>{channel}</p>
               <p>{views} ° {timestamp}</p>
           </div>
           </div>
        </div>
    )
}

export default Videocard
