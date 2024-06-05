import './mainPage.css'
import { PageTemplate } from '../../components/template/template'
import { Banner } from '../../components/banner/banner'

export default function MainPage(){
    return(
        <div className="main">
            <PageTemplate>
                <Banner/>
            </PageTemplate>
        </div>
    )
}