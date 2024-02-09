import "./Blog.css"
import {Link} from 'react-router-dom';
export default function ({ heading }) {
    return (
        <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link style={{color : "black"}} to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
            <div className="headingg">
                <h2>{heading}</h2>
            </div>
        </>
    )
}