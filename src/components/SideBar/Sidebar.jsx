import React, { useState } from 'react'
import style from './Sidebar.module.css'
import { assets } from '../../assets/assets'
const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className={style.sidebar}>

            <div className={style.top}>
                <img onClick={() => setExtended(!extended)} className={style.menu} src={assets.menu_icon} alt='' />
                <div className={style.new_chat}>
                    <img className={style.plusIcon} src={assets.plus_icon} alt='' />

                    {extended && <p>New Chat</p>}
                </div>
            </div>
            {extended && <div className={style.recent}>

                <p className={style.recent_title} >
                    Recent
                </p>
                <div className={style.recent_entry}>
                    <img className={style.menu} src={assets.message_icon} alt='' />
                    <p>What is React ...</p>
                </div>
            </div>}

            <div className={style.bottom}>
                <div className={`${style.bottom_item} ${style.recent_entry}`}>
                    <img src={assets.question_icon} alt="" />
                    {extended && <p>Help</p>}
                </div>


                <div className={`${style.bottom_item} ${style.recent_entry}`}>
                    <img src={assets.history_icon} alt="" />
                    {extended && <p>Activity</p>}
                </div>


                <div className={`${style.bottom_item} ${style.recent_entry}`}>
                    <img src={assets.setting_icon} alt="" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
