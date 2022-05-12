export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 lead fw-bold">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="/register">
                  Register
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="/SummaryPage">
                  Summary
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="/StudyJourneyPage">
                  Study Journey
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
