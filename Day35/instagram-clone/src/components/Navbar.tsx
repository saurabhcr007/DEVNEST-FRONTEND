import { useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((state: any) => state.user);
  return (
    <nav className="navbar navbar-expand-lg card">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="search">
          <input type="text" placeholder="Search" className="form-control" />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="bi bi-house-door-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-chat-dots"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-compass"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {/* <i className="bi bi-person-circle"></i> */}
                <img src={user.profilePicture} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
