import { BanSups } from './banner-supports/ban-sups'
import './banner.css'
import backg from '../../assets/backgraunds/backgr-banner.svg'
import { NavLink } from 'react-router-dom'

export function Banner(){
    return(
        <>
        <BanSups/>
        <div className="max-width">
        <div className="banner"  style={{ backgroundImage: `url(${backg})`}}>
            <div className="conteiner">
                <div className="max-width">
                <div className="banner-content" >
                    <div className="tittle" id='banner'>
                        <h2>
                        ТУРНИР ПО
                        </h2>
                        <h1>
                        MOBILOGRAPHY
                        </h1>
                    </div>
                    <NavLink to='/signup'>
                        <button>УЧАСТВОВАТЬ</button>
                    </NavLink>
                </div>
                </div>
            </div>
        </div>
        </div>
         
        </>

    )
}