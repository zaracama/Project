import { useEffect, useState } from "react";
import Submit from "./Submit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormJob({ message, Occupation }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    jobType: 0,
    imgUrl: "",
    companyId: 0,
  });

  function handleInputChange(e) {
    const { title, value } = e.target;
    setInput({
      ...input,
      [title]: value,
    });
  }

  async function handleAddSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "https://gc01-zaracama.cloud/server/job/",
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
        data: input,
      });
      navigate(`/`);
    } catch (err) {
      Swal.fire({
        title: "Err!",
        text: err.response.data.message,
        icon: "err",
        confirmButtonText: "Nice",
      });
    }
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "put",
        url: `https://gc01-zaracama.cloud/server/job/${Occupation.id}`,
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
        data: input,
      });
      navigate(`/`);
    } catch (err) {
      Swal.fire({
        title: "Err!",
        text: err.response.data.message,
        icon: "err",
        confirmButtonText: "Nice",
      });
    }
  }

  useEffect(() => {
    if (Occupation) {
      setInput({
        title: Occupation.title,
        description: Occupation.description,
        jobType: Occupation.jobType,
        imgUrl: Occupation.imgUrl,
        companyId: Occupation.companyId,
      });
    }
  }, [Occupation]);

  return (
    <>
      <form onSubmit={Occupation ? handleEditSubmit : handleAddSubmit}>
        <div className="mb-4">
          <label htmlFor="titleid" className="form-label">
            Title
          </label>
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            name="title"
            id="titleid"
            defaultValue={Occupation ? Occupation.title : ""}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionid" className="form-label">
            Description
          </label>
          <textarea
            onChange={handleInputChange}
            name="description"
            id="descriptionid"
            className="form-control"
            rows="5"
            defaultValue={Occupation ? Occupation.description : ""}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="jobType" className="form-label">
            jobType
          </label>
          <input
            onChange={handleInputChange}
            type="number"
            className="form-control"
            name="jobType"
            id="jobType"
            defaultValue={Occupation ? Occupation.jobType : ""}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrlid" className="form-label">
            Image URL
          </label>
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            name="imgUrl"
            id="imgUrlid"
            defaultValue={Occupation ? Occupation.imgUrl : ""}
          />
        </div>
       
        <div className="d-flex justify-content-center mt-5 mb-5">
          <Submit message={message} />
        </div>
      </form>
    </>
  );
}