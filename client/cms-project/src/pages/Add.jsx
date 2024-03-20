import FormJob from "../components/FormJob";

export default function JobAddPage() {
  return (
    <>
      <div className="col-9 bg-light rounded-end-4">
        <div className="row">
          <h2 className="text-center border-bottom">Add Jobs</h2>
        </div>
        <div className="row">
          <FormJob message={"Add Job"} />
        </div>
      </div>
    </>
  );
}