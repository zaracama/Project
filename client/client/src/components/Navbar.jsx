import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav navbar bg-warning">
        <div className="div container-fluid justify-content-between">
          <div>
            <Link to={`/`} className="btn">
              <img
                src="../client/public/logo1.PNG"
                style={{ width: "8rem", height: "auto" }}
                alt="Logo"
              />
            </Link>
          </div>
          <div>
            <a href="https://gc01-zaracama.cloud/server/job/login" className="btn">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}