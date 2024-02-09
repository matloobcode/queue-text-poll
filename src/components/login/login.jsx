import { Link } from "react-router-dom";
import "./login.css";
export function Login() {
  return (
    <div className="login-bg">
      <div className="d-flex justify-content-center">
        <form
          action=""
          className="w-25 loginbgcolor border border-4 p-2 border-info rounded-4 margintop"
        >
          <h2 className="bi bi-person text-center bg-info text-white p-2 rounded-5">
            Login
          </h2>
          <label className="form-label text-white" htmlFor="userName">
            User Name
          </label>
          <div className="input-group">
            <span className="bi bi-person input-group-text"></span>
            <input type="text" className="form-control " />
          </div>
          <label className="form-label text-white" htmlFor="password">
            Password
          </label>
          <div className="input-group">
            <span className="input-group-text bi bi-lock"></span>
            <input type="password" className="form-control" />
          </div>
          <button className="btn btn-outline-info w-100 mt-1">Login</button>
          <Link className="removeunderline text-info" to="register">
            New User Please Register
          </Link>
        </form>
      </div>
    </div>
  );
}
