import Submit from "../components/Submit";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    username: "",
  });

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: `https://gc01-zaracama.cloud/server/job/Add${id}`,
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
  return (
    <>
      <div className="col-9 bg-light rounded-end-4">
        <div className="row">
          <h2 className="text-center border-bottom">Register</h2>
        </div>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="emailid" className="form-label">
                Email
              </label>
              <input
                onChange={handleInputChange}
                id="emailid"
                type="text"
                className="form-control"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="passwordid" className="form-label">
                Password
              </label>
              <input
                onChange={handleInputChange}
                id="passwordid"
                type="text"
                className="form-control"
                name="password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumberid" className="form-label">
                Phone Number
              </label>
              <input
                onChange={handleInputChange}
                id="phoneNumberid"
                type="text"
                className="form-control"
                name="phoneNumber"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="addressid" className="form-label">
                Address
              </label>
              <input
                onChange={handleInputChange}
                id="addressid"
                type="text"
                className="form-control"
                name="address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="usernameid" className="form-label">
                Username
              </label>
              <input
                onChange={handleInputChange}
                id="usernameid"
                type="text"
                className="form-control"
                name="username"
              />
            </div>
            <div className="d-flex justify-content-center">
              <Submit message={"Add"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}