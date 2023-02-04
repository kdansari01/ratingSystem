import { useEffect, useState } from "react";

const Input = () => {
  const [data, setData] = useState({
    email: "",
    feedback: ""
  });
  console.log(data);
  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    localStorage.setItem("feedData", data);
  }, [data]);
  const handleSubmit = (e) => {
    e.prevantDefault();
    setData((prev) => ({ ...prev }));
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="card shadow w-75 p-4">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            value={data.email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Feedback
          </label>
          <input
            name="feedback"
            value={data.feedback}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="feedback..."
            onChange={handleInput}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Input;
