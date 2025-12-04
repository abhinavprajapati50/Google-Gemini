import React from 'react';
import style from './main.module.css';
import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.nav}>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className={style.main_container}>
                <div className={style.greet}>
                    <p>
                        <span>
                            Hello, Dev
                        </span>
                    </p>
                    <p>How can i help today?</p>
                </div>
                <div className={style.cards}>
                    <div className={style.card}>
                        <p>
                            Hello Suggest the new Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil facilis iusto consequatur asperiores modi aliquid, cupiditate quod eaque repellendus?

                        </p>
                        <img src={assets.compass_icon} alt="" />

                    </div>


                    <div className={style.card}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sunt nihil fugit quaerat saepe facilis vitae eum fugiat delectus recusandae!
                        </p>
                        <img src={assets.bulb_icon} alt="" />

                    </div>



                    <div className={style.card}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ullam, modi nam eaque itaque vel.
                        </p>
                        <img src={assets.message_icon} alt="" />

                    </div>

                    <div className={style.card}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi officia nesciunt labore ratione praesentium reiciendis architecto aliquid odit quas maxime neque sunt dolores sed laudantium, facilis unde dolore laboriosam molestias odio et!
                        </p>
                        <img src={assets.code_icon} alt="" />

                    </div>
                </div>
                <div className={style.main_bottom}>
                    <div className={style.search_box}>
                        <input type="text " placeholder='Enter a Prompt Here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className={style.bottom_info}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ipsa quia ullam reiciendis asperiores, dignissimos iure. Voluptatibus reprehenderit quos consequuntur neque, atque similique suscipit temporibus, quod earum corporis ipsam quam?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
