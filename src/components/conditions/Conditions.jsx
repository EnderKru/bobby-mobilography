import React from 'react';
import styles from './conditions.module.css';
import logo from  "../../assets/image/conditions_img/logo.png"

function Conditions(props) {
    return (
        <div className={styles.conditions}>
            <div className="conteiner">
                <div className={styles.conditions__inner}>
                    <img src={logo} alt="logo" className={styles.img}/>
                    <h4 className={styles.title}>
                        Условия участия в турнире:
                    </h4>

                    <li className={styles.part}>Участвовать может каждый, абсолютно <br/> бесплатно</li>
                    <li className={styles.part}>Участники будут должны создать 30-секундный <br/> рекламный ролик о напитке Coca-Cola</li>
                    <li className={styles.part}>После завершения съемки рекламного ролика, <br/> отправьте его через этот веб-сайт</li>
                    <button className={styles.button}>
                        CТАТЬ УЧАСТНИКОМ
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Conditions;