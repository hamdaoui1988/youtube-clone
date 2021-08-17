import React from "react"
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="Searchpage">
            <div className="Searchpage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AKedOLQu87ZPeGluOco2EObrpI2cRN55-Hun_lH39EdogA=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Joe HaTTab"
            verified
            subs="6.2M"
            nofVideos={512}
            description="الحمدلله
            I make travel documentaries - بصنع فيديوهات حول العالم
            "
            />

            <hr/>
            
            <VideoRow 
            views="1.4K"
            subs="25K"
            title="أقوى موصلة طلبات في مصر بالعجلة 🇪🇬 Egyptian Delivery Worker"
            timestamp="1hr"
            channel="Joe HaTTab"
            description="ست جدعة محترمة مكافحة 💞💪
            ربنا يرزقها ويوفقها
            "
            image="https://i.ibb.co/87XLCd3/a9wamoasilafimisr.png"
            profileimage="https://yt3.ggpht.com/ytc/AKedOLQu87ZPeGluOco2EObrpI2cRN55-Hun_lH39EdogA=s176-c-k-c0x00ffffff-no-rj-mo"
            verified
            />
            <VideoRow 
            views="1.2M"
            subs="25K"
            title="Peru Sky Lodge 🇵🇪 - نمت بالفندق المعلق في أعلى حافة الجبل"
            timestamp="5hr"
            channel="Joe HaTTab"
            description="اليوم وصلنا على كوسكو في البيرو، عاصمة حضارة الانكا زمان"
            image="https://i.ibb.co/pJHg0kr/a9wamoasilafimisr.png"
            profileimage="https://yt3.ggpht.com/ytc/AKedOLQu87ZPeGluOco2EObrpI2cRN55-Hun_lH39EdogA=s176-c-k-c0x00ffffff-no-rj-mo"
            verified
            />
            

        </div>
    )
}

export default SearchPage
