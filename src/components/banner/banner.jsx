import { BanSups } from './banner-supports/ban-sups'
import './banner.css'
import backg from '../../assets/backgraunds/backgr-banner.svg'

export function Banner(){
    return(
        <>
        <BanSups/>
         <div className="banner" style={{ backgroundImage: `url(${backg})`}}>
            <div className="conteiner">
                <div className="banner-content">
                    <div className="tittle">
                        <h2>
                        ТУРНИР ПО
                        </h2>
                        <h1>
                        MOBILOGRAPHY
                        </h1>
                    </div>
                    <button>УЧАСТВОВАТЬ</button>
                </div>
            </div>
        </div>
        </>

    )
}