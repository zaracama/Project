import { useState } from "react";
import FormJob from "../components/FormJob";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function JobEditPage() {
  const { id } = useParams();
  const [occupation, setOccupation] = useState({});

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
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="col-10 bg-light rounded-end-4">
        <div className="row">
          <h2 className="text-center border-bottom">Edit Job</h2>
        </div>
        <div className="row">
          <FormJob
            message={"Update Cuisine"}
            occupation={occupation}
          />
        </div>
      </div>
    </>
  );
}