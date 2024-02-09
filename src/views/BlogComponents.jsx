import "./Blog.css"
export default function ({img,title,desc}) {
    return (
        <>
            <div className="blogComponents">
                <div class="card height-inrem">
                    <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title py-3">{title}</h5>
                            <p class="card-text">{desc}</p>
                            <div className="butt">
                                <a href="#" class="btn btn-light">View More <span><i class="bi bi-arrow-right"></i></span></a>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}  