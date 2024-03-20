import { useNavigate } from "react-router-dom";

export default function CardHome({ job }) {
  const navigate = useNavigate();

  function changePage(id) {
    navigate(`/detail/${id}`);
  }
  return (
    <>
      <div className="card" style={{ width: "9.3rem" }}>
        <img src={job.imgUrl} alt="Occupation Image" className="card-img top" />
        <div className="card-body text-start">
          <p className="card-title">{job.title}</p>
          <button
            onClick={() => {
              changePage(job.id);
            }}
            className="btn btn-info btn-sm"
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}