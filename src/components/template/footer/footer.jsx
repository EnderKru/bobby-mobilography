import './footer.css'
import logo from '../../../assets/image/logo-footer.svg'
import facebook from '../../../assets/image/facebook.svg'
import youtube from '../../../assets/image/youtube.svg'
import insta from '../../../assets/image/instagram.svg'

export function Footer(){
    return(
        <div className="footer">
            <div className="conteiner">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="logos" className="" />
                    </div>
                    <div className="footer-info">
                        <h2>Для связи по комерческим вопросам</h2>
                        <div className="numbers">
                            <p>+996 559 880 208</p>
                            <p>+996 708 032 662</p>
                        </div>
                        <div className="media-icons">
                            <a href="">
                                <img src={facebook} alt="" className="" />
                            </a>
                            <a href="">
                                <img src={youtube} alt="" className="" />
                            </a>
                            <a href=""> 
                                <img src={insta} alt="" className="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}