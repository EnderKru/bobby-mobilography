import './mainPage.css'
import { PageTemplate } from '../../components/template/template'
import { Banner } from '../../components/banner/banner'
import { Cola } from '../../components/cola/cola'
import { Timer } from '../../components/timer/timer.jsx'
import Partners from "../../components/partners/Partners.jsx";
import Conditions from "../../components/conditions/Conditions.jsx";

export default function MainPage(){
    return(
        
            <PageTemplate>
                <div className="main">
                <Banner/>
                <Timer/>
                <Cola/>
                <Conditions/>

                <Partners/>
                </div>
            </PageTemplate>
       
    )
}