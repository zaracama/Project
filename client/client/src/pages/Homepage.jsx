import axios from "axios";
import { useEffect, useState } from "react";
import CardHome from "../components/CardHome";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState([]);
  const [search, setSearch] = useState({
    search: "",
    filter: "",
    sort: "",
    pageNumber: "1",
  });

  function handleClickButton(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value,
    });
  }

  function handleSumbit(e) {
    e.preventDefault();
    setSearchParams(search);
  }

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://gc01-zaracama.cloud/server/job/",
        params: search,
      });
      setCount([...Array(Math.ceil(data.count / 10))]);
      setJobs(data.rows);
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
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  useEffect(() => {
    if (
      search.search !== "" ||
      search.filter !== "" ||
      search.sort !== "" ||
      search.pageNumber !== "1"
    ) {
      setSearchParams(search);
    }
  }, [search]);

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2 text-center">
          <h1> Hello Strangers, Welcome To Job Gang's </h1>
        </div>

        <div className="row mt2">
          <form
            onSubmit={handleSumbit}
            action=""
            className="d-flex flex-center justify-content-center gap-1"
          >
            <div className="col-6">
              <input
                onChange={handleClickButton}
                type="text"
                className="form-control"
                placeholder="Search by Name"
                name="search"
              />
            </div>
            <div className="col-2">
              <select
                name="sort"
                className="form-select"
                onChange={handleClickButton}
              >
                <option value="selected">Sort by Time</option>
                <option value="DESC"> Coming soon.. </option>
                <option value="ASC"> On Going.. </option>
              </select>
            </div>
            <div className="col-2">
              <select
                name="filter"
                className="form-select"
                onChange={handleClickButton}
              >
                <option value=""> All Job Type.. </option>
                <option value="1"> Full-Time </option>
                <option value="2"> Part-Time </option>
              </select>
            </div>
            <div className="col-1">
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="row mt-2 d-flex justify-content-center">
          <div className="col-8 d-flex flex-wrap gap-1 justify-content-start">
            {jobs &&
              jobs.map((job) => {
                return <CardHome job={job} key={job.id} />;
              })}
          </div>
        </div>

        <div className="row m-3 text-center">
          <form className="d-flex flex-row justify-content-center">
            <div>
              <button
                onClick={handleClickButton}
                className="btn btn-sm border-bottom"
                type="input"
                name="pageNumber"
                value={Number(search.pageNumber) - 1}
              >
                Prev
              </button>
            </div>
            {count.map((el, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={handleClickButton}
                    className="btn btn-sm border-bottom"
                    type="input"
                    name="pageNumber"
                    value={index + 1}
                  >
                    {index + 1}
                  </button>
                </div>
              );
            })}
            <div>
              <button
                onClick={handleClickButton}
                className="btn btn-sm border-bottom"
                type="input"
                name="pageNumber"
                value={Number(search.pageNumber) + 1}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
