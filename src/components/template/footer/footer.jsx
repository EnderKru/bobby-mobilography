import './footer.css'
import diglogo from '../../../assets/digital-img.svg'
import logo from '../../../assets/image/logo-footer.svg'
import facebook from '../../../assets/image/telegram.svg'
import youtube from '../../../assets/image/whatsapp.svg'
import insta from '../../../assets/image/instagram.svg'
import { useState } from 'react'

export function Footer(){
    const [isCopied, setIsCopied] = useState(false);
    const [Copied, setCopied] = useState(false);
  
    const handleCopyPhoneNumberOne = () => {
      const phoneNumber = ' +996 990 111 414 '; 
      navigator.clipboard.writeText(phoneNumber);
      setIsCopied(true); 
      setTimeout(() => setIsCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
    };
    const handleCopyPhoneNumberTwo = () => {
        const phoneNumber = ' +996 705 081 688 '; 
        navigator.clipboard.writeText(phoneNumber);
        setIsCopied(true); 
        setTimeout(() => setIsCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
      };

  
    return(
        <div className="footer-wrap">
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
                            <p onClick={handleCopyPhoneNumberOne}>+996 990 111 414</p>
                            <p onClick={handleCopyPhoneNumberTwo} id='foot-num'>+996 705 081 688</p>
                        </div>
                        {isCopied && 
              <div className="wrapper-message">
              <div className="copy-message">
                <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} />
                Номер телефона скопирован!
                </div>
                </div>
              }
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
        </div>
    )
}