import React from 'react';
import styles from './conditions.module.css';
import logo from  "../../assets/image/MGT-logo.svg"
import { NavLink } from 'react-router-dom';

function Conditions(props) {
    return (
        <div className={styles.conditions}>
            <div className="conteiner">
                <div className={styles.conditions__inner}>
                    <img src={logo} alt="logo" className={styles.img}/>
                    <h4 className={styles.title}>
                        Условия участия в турнире:
                    </h4>

                    <div className={styles.part}>Участвовать может каждый, абсолютно <br/> бесплатно</div>
                    <div className={styles.part}>Участники будут должны создать 30-секундный <br/> рекламный ролик о напитке Maxi чай</div>
                    <div className={styles.part}>После завершения съемки рекламного ролика, <br/> нужно запостить его в медиа и отправить ссылку нам на сайт</div>
                    <NavLink to="/signup">
                    <button className={styles.button}>
                        CТАТЬ УЧАСТНИКОМ
                    </button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export default Conditions;