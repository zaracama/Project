import { useState } from "react";
import TableCompany from "../components/TableCompany";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function CompanyListPage() {
  const [companyData, catchCompany] = useState([]);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://gc01-zaracama.cloud/server/job",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      data.sort((e, l) => e.id - l.id);
      catchCompany(data);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Nice",
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="col-10 bg-light rounded-end-4">
        <div className="row ">
          <h2 className="text-center border-bottom"> All Jobs </h2>
          <div>
            <table className="table table-hover text-center text wrap">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Created At</th>
                </tr>
              </thead>
              <tbody>
                {companyData &&
                  companyData.map((company) => {
                    return (
                      <TableCompany
                        company={company}
                        key={company.id}
                      />
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