import "./netflixHeader.css";

export function NetflixHeader() {
  return (
    <header className="d-flex justify-content-between">
      <div>
        <span className="brand-title">NETFLIX</span>
      </div>
      <div className="d-flex">
        <div className="input-group">
          <span className="bi bi-translate input-group-text"></span>
          <select name="" id="" className="form-select">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
        </div>
        <button className="btn btn-danger ms-2">Signin</button>
      </div>
    </header>
  );
}
