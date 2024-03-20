import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function JobsListPage() {
  const [jobData, setJobData] = useState([]);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "",
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      data.sort((e, l) => e.id - l.id);
      setJobData(data);
    } catch (err) {
      Swal.fire({
        title: "Err!",
        text: err.response.data.message,
        icon: "err",
        confirmButtonText: "Nice Bro's",
      });
    }
  }

  async function handleDelete(id) {
    try {
      await axios({
        method: "delete",
        url: `https://gc01-zaracama.cloud/server/job/${id}`,
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
    } catch (err) {
      Swal.fire({
        title: "Err!",
        text: err.response.data.message,
        icon: "err",
        confirmButtonText: "Nice Bro's",
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [handleDelete]);
  return (
    <>
      <div className="col-10 bg-light rounded-end-4">
        <div className="row ">
          <h2 className="text-center border-bottom">All Cuisines</h2>
          <div>
            <table className="table table-hover text-center text wrap">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Job Type</th>
                  <th scope="col"> Company Id</th>
                  <th scope="col">Author Id</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {jobData &&
                  jobData.map((job) => {
                    return (
                      <tr key={job.id}>
                        <th scope="row">{job.id}</th>
                        <td>{job.name}</td>
                        <td>{job.description}</td>
                        <td>{job.price}</td>
                        <td>{job.categoryId}</td>
                        <td>{job.authorId}</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-sm dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Actions
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <Link
                                  to={`/details/${job.id}`}
                                  className="dropdown-item"
                                >
                                  Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`/edit/${job.id}`}
                                  className="dropdown-item"
                                >
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    handleDelete(job.id);
                                  }}
                                  className="dropdown-item"
                                >
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}