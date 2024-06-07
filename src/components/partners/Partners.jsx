import React from 'react';
import styles from "./partners.module.css"
import lalafo from "../../assets/image/partners/lalafo.png"
import kia from "../../assets/image/partners/kia.svg"
import bobby from "../../assets/image/partners/bobby.svg"
import logo from "../../assets/image/partners/logo.png"
import coca from "../../assets/image/partners/cocacola.png"
import samsa from "../../assets/image/partners/samsung-icon-2048x2048-1ej4ectz 1.png"
function Partners(props) {
    return (
        <div className={styles.partners}>

                <div className={styles.partners_inner}>
                    <h3 className={styles.title}>
                        <span>НАШИ</span><span className={styles.red_text}>ПАРТНЁРЫ</span>
                    </h3>
                    <div className={styles.redBlock}>
                        <div className={styles.with_logo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <h4 className={styles.sanarip}>
                            САНАРИП
                        </h4>
                        <p className={styles.min}>
                            министерства цифрового развития кыргызстана
                        </p>
                    </div>
                </div>
            <div className="conteiner">
                <div className={styles.logos}>
                    <div className={styles.partner}><img src={bobby} alt="logo"/></div>
                    <div className={styles.partner}><img src={kia} alt="logo"/></div>
                    <div className={styles.partner}><img src={coca} alt="logo"/></div>
                    <div className={styles.partner}><img src={samsa} alt="logo"/></div>
                    <div className={styles.partner}><img src={lalafo} alt="logo"/></div>
                </div>
            </div>
        </div>
    );
}

export default Partners;