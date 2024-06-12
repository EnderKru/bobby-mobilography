import './footer.css'
import diglogo from '../../../assets/digital-img.svg'
import logo from '../../../assets/image/logo-footer.svg'
import facebook from '../../../assets/image/telegram.svg'
import youtube from '../../../assets/image/whatsapp.svg'
import insta from '../../../assets/image/instagram.svg'

export function Footer(){
    return(
        <div className="footer" id = 'footer'>
            <div className="max-width">
            <div className="conteiner">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="logos" className="mgt" />
                        <img src={diglogo} alt="logos" className="dig" />
                    </div>
                    <div className="footer-info">
                        <h2>Для связи по коммерческим вопросам:</h2>
                        <div className="numbers">
                            <p>+996 990 088 589</p>
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

        </div>
    )
}