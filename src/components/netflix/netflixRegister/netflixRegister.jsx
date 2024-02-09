import "./netflixRegister.css";

export function NetflixRegister() {
  return (
    <div>
      <form action="" className="text-center">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-group r-input">
          <input
            type="text"
            size="30"
            placeholder="Email address"
          />
          <button className="btn btn-danger ms-1">
            Get Started <span className="bi bi-chevron-right"></span>
          </button>
        </div>
      </form>
    </div>
  );
}
