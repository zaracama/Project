import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailedPage() {
  const { id } = useParams();

  const [job, setJob] = useState({});

  async function fetchData() {
    const { data } = await axios({
      url: `https://gc01-zaracama.cloud/server/job/${id}`,
      method: "get",
    });

    setJob(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="row mt-2 text-center">
        <h1>{job.name}</h1>
      </div>
      <div className="container-fluid">
        <div className="row m-5 p-5 d-flex justify-content-center">
          <div className="card col-8" style={{ height: "25.rem" }}>
            <div
              className="row d-flex justify-content-center"
              style={{ width: "auto", height: "25rem" }}
            >
              <div className="col-5 d-flex justify-content-end">
                <img
                  src={job.imgUrl}
                  alt="Job Image"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-5">
                <div className="card-body text-start">
                  <p className="card-text">Job Description:</p>
                  <p className="card-text">{job.description}</p>
                  <p className="card-text">Salary: Rp {job.salary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
