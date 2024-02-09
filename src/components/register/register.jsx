import "./register.css";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="registerBg">
      <div className="d-flex justify-content-center">
        <form
          action=""
          className="w-25 registerbgcolor border border-4 p-2 border-info rounded-4 rmargintop"
        >
          <h2 className="bi bi-pen text-center bg-info text-white p-2 rounded-5">
            Register
          </h2>
          <label className="form-label text-white" htmlFor="userName">
            First Name
          </label>
          <div className="input-group">
            <span className="input-group-text bi bi-pen"></span>
            <input type="text" className="form-control" />
          </div>
          <label className="form-label text-white" htmlFor="lastName">
            Last Name
          </label>
          <div className="input-group">
            <span className="input-group-text bi bi-pen"></span>
            <input type="text" className="form-control" />
          </div>
          <label className="form-label text-white" htmlFor="mobile">
            Mobile No.
          </label>
          <div className="input-group">
            <span className="input-group-text bi bi-phone"></span>
            <input type="text" className="form-control" />
          </div>
          <label className="form-label text-white" htmlFor="email">
            Email Id
          </label>
          <div className="input-group">
            <span className="input-group-text bi bi-envelope-at"></span>
            <input
              type="email"
              placeholder="Email address"
              className="form-control"
            />
          </div>
          <label className="form-label text-white" htmlFor="userName">
            User Name
          </label>
          <div className="input-group">
            <span className="input-group-text bi bi-person-bounding-box"></span>
            <input type="text" className="form-control" />
          </div>
          <label className="form-label text-white" htmlFor="password">
            Password
          </label>
          <div className="input-group">
            <span className="input-group-text bi bi-shield-lock"></span>
            <input type="password" className="form-control" />
          </div>
          <button className="btn btn-outline-info w-100 mt-1">Register</button>
          <Link className="removeunderline text-info" to="/">
            Existing User go to Login
          </Link>
        </form>
      </div>
    </div>
  );
}
