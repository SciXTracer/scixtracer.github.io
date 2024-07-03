import { Link } from 'react-router-dom'
import CodeCard from '../../components/CodeCard';
import MainLayout from '../../layouts/MainLayout';
import "./index.css";

import code_samples from '../../assets/import_sample.json';

export default function Home({}){

    return(
        <MainLayout>
            <div className="container-fluid sx-landing">
                <div className="row ">
                    <div className="col-sm-12 col-md-6 sx-home-header">
                        <div className="row">
                            <div className="col-xs-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 m-auto sx-home-slogan">
                                Simplifiy dataset operations with one single API
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 m-auto sx-home-desc">
                                <ul>
                                    <li>Array and Table data formats</li>
                                    <li>Key-value pair data annotations</li>
                                    <li>Query based data interaction</li>
                                    <li>Metadata management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 sx-home-header">
                        <ul className="list-unstyled">
                            <li><i className="fa fa-check"/> Natively interact with <b>Numpy</b> and <b>Pandas</b></li>
                            <li><i className="fa fa-check"/> Compatible with <b>PyTorch</b> and <b>TensorFlow</b> datasets</li>
                            <li><i className="fa fa-check"/> Implements <b>FAIR principles</b></li>
                            <li><i className="fa fa-check"/> From local computer to cloud computing</li>
                        </ul>
                    </div>  
                </div>    
                <div className="row">
                    <div className="col-sm-12 col-md-6 sx-home-header">
                            <div className="row">
                                <div className="col-xs-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 m-auto sx-home-slogan">
                        <Link className="btn btn-primary sx-home-btn" to={"/install"}>Install</Link>    
                        <Link className="btn btn-secondary sx-home-btn" to={"/documentation"}>Documentation</Link>
                        </div></div></div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row sx-glance">

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 sx-code-card">
                        <CodeCard code={code_samples.import} 
                                  title="Import" 
                                  link="" 
                                  btnTitle="Import">
                            Import data from any source: images, tables, database, web and attach metadata
                        </CodeCard>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 sx-code-card">
                        <CodeCard code={code_samples.train} 
                                  title="Create training set" 
                                  link="" 
                                  btnTitle="Train">
                            Create a deep learning training set with a single line of code for PyTorch or TensorFlow
                        </CodeCard>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 sx-code-card">
                        <CodeCard code={code_samples.run} 
                                  title="Process data" 
                                  link="" 
                                  btnTitle="Run">
                            Use the job runner to execute python functions, all tracing metadata are generated automatically 
                        </CodeCard>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 sx-code-card">
                        <CodeCard code={code_samples.viz} 
                                  title="Visualize data" 
                                  link="" 
                                  btnTitle="Viz">
                            Query single or multiple data for Visualization using any python viz library like matplotlib or plotly
                        </CodeCard>
                    </div>

                </div>
            </div>
        </MainLayout>
    )
}