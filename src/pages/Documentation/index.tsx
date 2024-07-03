import MainLayout from '../../layouts/MainLayout';

export default function Documentation({}){

    return(
        <MainLayout>
             <iframe className="sx-doc-frame" id="theFrame" src="https://scixtracer.github.io/scixtracer/guide.html">
             </iframe>
        </MainLayout>
    )
}