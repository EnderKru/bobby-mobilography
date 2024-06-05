import './ban-sups.css'
import it from '../../../assets/image/itfestlogo.svg'
import bobby from '../../../assets/image/bobbylogo.svg'
import sanarip from '../../../assets/image/sanariplogo.svg'

export function BanSups(){
    return(
        <div className="ban-sups">
            <div className="conteiner">
                <div className="ban-sups-content">
                    <img src={it} alt="" className="" />
                    <div className="bobby-logo">
                        <img src={bobby} alt="" className="" />
                    </div>
                    <img src={sanarip} alt="" className="" />
                </div>
            </div>
        </div>
    )
}