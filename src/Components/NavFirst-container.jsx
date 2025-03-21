import { Link } from "react-router-dom"

export default function NavFirst() {
    return (
        <Link to="/">
        <div className="logo">
            <img src="https://www.unitybank.com.au/Client_Theme/imgs/ua2/welcome-logo-unity@3x.png" alt="" />
            <a >Of India</a>
        </div>
        </Link>
    )
}