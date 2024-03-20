import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="col-2 bg-green text-light rounded-start-4">
        <div className="row  d-flex justify-content-center">
          <h2 className="text-center">Navigations</h2>
          <div>
            <ul className="list-group list-group-flush">
              <Link to={`/`} role="button" className="nav-link">
                <li className="list-group-item border-0 bg-green text-light">
                  All Jobs
                </li>
              </Link>
              <Link to={`/add`} role="button" className="nav-link">
                <li className="list-group-item border-0 bg-green text-light">
                  Add Job
                </li>
              </Link>
              <Link to={`/categories`} role="button" className="nav-link">
                <li className="list-group-item border-0 bg-green text-light">
                  All Companies
                </li>
              </Link>
              <Link to={`/register`} role="button" className="nav-link">
                <li className="list-group-item border-0 bg-green text-light">
                  Register
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}