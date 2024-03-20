import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function JobDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [occupation, setOccupation] = useState({});
  const [doc, setDoc] = useState(null);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://gc01-zaracama.cloud/server/job/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setOccupation(data);
    } catch (err) {
      Swal.fire({
        title: "Err!",
        text: err.response.data.message,
        icon: "err",
        confirmButtonMsg: "Nice Bro's",
      });
    }
  }

  function handleFileChange(a) {
    const image = a.target.docs[0];
    setDoc(image);
  }

  async function handleSumbitFile(a) {
    a.preventDefault();
    try {
      const formData = new FormData();
      formData.append(`imgUrl`, doc);

      await axios({
        method: "patch",
        url: `https://gc01-zaracama.cloud/server/job/${id}/image`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
    } catch (err) {
      Swal.fire({
        title: "Err!",
        text: err.response.data.message,
        icon: "err",
        confirmButtonMsg: "Nice Bro's",
      });
    }
  }

  async function handleDelete() {
    try {
      await axios({
        method: "delete",
        url: `https://gc01-zaracama.cloud/server/job/${id}`,
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      navigate(`/`);
    } catch (err) {
      Swal.fire({
        title: "Err!",
        text: err.response.data.message,
        icon: "err",
        confirmButtonMsg: "Nice Bro's",
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [handleSumbitFile]);

  return (
    <>
      <div className="col-10 bg-light rounded-end-4">
        <div className="row ">
          <h2 className="text-center border-bottom">Job Details</h2>
          <div className="d-flex gap-1">
            <div
              className="card me-0 m-4 p-4"
              style={{ width: "30rem", height: "auto" }}
            >
              <img
                src={occupation.imgUrl}
                className="card-img "
                alt="Food Image"
              />
            </div>
            <div
              className="card ms-0 m-4 p-4"
              style={{ width: "30rem", height: "auto" }}
            >
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">ID: {occupation.id}</li>
                  <li className="list-group-item">
                    Title: {occupation.title}
                  </li>
                  <li className="list-group-item">
                    Description: {occupation.description}
                  </li>
                  <li className="list-group-item">
                    Job Type: {occupation.price}
                  </li>
                  <li className="list-group-item">
                    Image URL: {occupation.imgUrl}
                  </li>
                  <li className="list-group-item">
                    Company ID: {occupation.categoryId}
                  </li>
                  <li className="list-group-item">
                    Author ID: {occupation.authorId}
                  </li>
                  {/* <li className="list-group-item">
                    Created At: {occupation.createdAt}
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center m-4 p-4">
          <div className="col d-flex justify-content-end">
            <Link to={`/edit/${occupation.id}`} href="#">
              <button className="btn btn-primary" style={{ width: "9rem" }}>
                Edit
              </button>
            </Link>
          </div>
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#uploadImageModal"
              style={{ width: "9rem" }}
            >
              Upload Img URL
            </button>
          </div>
          <div className="col d-flex justify-content-start">
            <button
              onClick={handleDelete}
              className="btn btn-primary"
              style={{ width: "9rem" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="uploadImageModal"
        tabIndex="-1"
        aria-labelledby="uploadImageLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Upload Image URL</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSumbitFile}>
                <div className="mb-4">
                  <label htmlFor="imgUrlid" className="form-label">
                    Image URL
                  </label>
                  <input
                    onChange={handleFileChange}
                    type="doc"
                    className="form-control"
                    title="imgUrl"
                    id="imgUrlid"
                  />
                  <div id="emailHelp" className="form-text">
                    if upload click that's button
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Wanna Save Bro's
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}