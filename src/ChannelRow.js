
import './channelrow.css'
import { Avatar } from '@material-ui/core'
import VerifiedIcon  from "@material-ui/icons/CheckCircleOutlineOutlined"


function ChannelRow({image,channel,verified,subs,nofVideos,description}) {
    return (
        <div className="channelrow">
            <Avatar className="channelrow__logo" alt={channel} src={image} />
            <div className="channelrow__text">
            <div className="channelrow__left">
              <div className="channelrow__verified">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                
              </div>
              <div className="channelrow__novideos"></div>
                <p>{subs} Subscribers . {nofVideos} Videos </p>
                <p>{description}</p>
              </div>
            </div> 
            <div className="channelrow__right"><h2>SUBSCRIBE</h2></div>
            
            
       
       </div> 
    )
}

export default ChannelRow
