import "./Contact.css"
export default function () {
    return (
        <>
            <div className="contactForm d-flex flex-column align-items-center justify-content-center">
                <div className="formHead py-4">
                    <h2>Get In Touch</h2>
                    <svg width="354" height="30" viewBox="0 0 354 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1" stroke="#FFBB38" stroke-width="2" stroke-linecap="round"></path></svg>
                </div>
                <div className="formMain">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" placeholder="Enter Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text" >We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="password" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Subject</label>
                            <input type="text" class="form-control" placeholder="Your Subject Here" id="exampleInputPassword1" />
                        </div>
                        <div class="form-floating">
                            <textarea style={{height:"100px"}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                            <label for="floatingTextarea2">Type your messages here</label>
                        </div>
                        <div class="mb-3 form-check my-3">
                            <input type="checkbox" class="form-check-input  " id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-dark">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}