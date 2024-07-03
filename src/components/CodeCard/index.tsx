import { ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';


type CodeCardProps = {
    code: string
    title: string
    btnTitle: string
    link: string
    children: ReactNode
  }

export default function CodeCard(props: CodeCardProps){
    return(
        <div className="card">
            <SyntaxHighlighter language="python" style={github}>
                {props.code}
            </SyntaxHighlighter>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.children}</p>
                <a href={props.link} className="btn btn-primary btn-sm w-100">{props.btnTitle}</a>
            </div>
        </div>
    )
}