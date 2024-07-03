import MainLayout from '../../layouts/MainLayout';
import './index.css'

export default function Install({}){

    return(
        <MainLayout>
             <iframe className="sx-doc-frame" id="theFrame" src="https://scixtracer.github.io/scixtracer/install.html">
             </iframe>
        </MainLayout>
    )
}