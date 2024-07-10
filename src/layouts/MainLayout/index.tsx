import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import "./index.css"

type LayoutProps = {
    children: ReactNode
  }

export default function MainLayout(props: LayoutProps){
    return(
        <>
        <header>
            <nav className="navbar navbar-expand-md sx-navbar">
                <div className="container-fluid sx-nav">
                    <Link className="navbar-brand sx-logo" to={"/"}><img height="30px" src={Logo}/> SciXTracer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-auto">
                        <li className="nav-item">
                            <Link className="nav-link sx-link" to={"/install"}>Install</Link>
                        </li>
                        {/*
                        // <li className="nav-item">
                            <Link className="nav-link sx-link" to={"/examples"}>Examples</Link>
                        </li>
                        */}
                        <li className="nav-item">
                        <Link className="nav-link sx-link" to={"/documentation"}>Documentation</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sx-link"  href="https://github.com/scixtracer/scixtracer" target="_blank">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link sx-link" to={"/about"}>About</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>    
        <main>{props.children}</main>
        </>
    )
}