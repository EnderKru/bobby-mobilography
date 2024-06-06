import './mainPage.css'
import { PageTemplate } from '../../components/template/template'
import { Banner } from '../../components/banner/banner'
import Partners from "../../components/partners/Partners.jsx";
import Conditions from "../../components/conditions/Conditions.jsx";

export default function MainPage(){
    return(
        <div className="main">
            <PageTemplate>
                <Banner/>
                <Conditions/>
                <Partners/>
            </PageTemplate>
        </div>
    )
}