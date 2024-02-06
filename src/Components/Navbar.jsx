import logo from "../Images/logo-4.svg"
import {Link} from 'react-router-dom';
import "./Navbar.css";


export default function () {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href=''>
                        <img src={logo} alt="Logo" width="70" height="60" class="d-inline-block align-text-top" />

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <form class="d-flex searchBar" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn bg-pink" type="submit">Search</button>
                            </form>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact">Contact</Link>
                            </li>
                            <div className="navRight d-flex">
                                <li class="nav-item becomeSeller">
                                    <a class="nav-link text-light" href="#">Become a Seller</a>
                                </li>
                                <li class="nav-item iconsInNav">
                                <span class="bagContainer">0</span>
                                    <Link class="nav-link" to="/cart"><i class="bi bi-bag-check"></i></Link>
                                </li>
                                <li class="nav-item iconsInNav">
                                    <Link class="nav-link" to="/profile"><i class="bi bi-person"></i></Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}