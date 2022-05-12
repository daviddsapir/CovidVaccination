import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <header className="m-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="h1 text-center">COVID-19 Vaccination</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="row mt-5 mb-4 justify-content-center">
            <div className="col-6">
              <div className="card border border-5">
                <div className="card-body">
                  <h5 className="card-title fw-bold">About Us</h5>
                  <p className="card-text lead">
                    We help undeveloped countries vaccinate their people! <br />
                    Some countries do not keep electronic records of their <br />
                    citizens medical situation. We want to help them collect <br />
                    data from citizens in order to prioritise COVID-19 vaccination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-4">
            <div className="col-6">
              <div className="card border border-5 border">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Register Page</h5>
                  <p className="card-text lead">Fill up a form to Help us collect data in order to prioritize COVID-19 vaccination.</p>
                  <div className="text-center">
                    <button
                      className="btn btn-primary border border-5 border-info"
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      Go To Register Page
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-4">
            <div className="col-6">
              <div className="card border border-5">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Summary Page</h5>
                  <p className="card-text lead">A tabular view that shows all the existing registration info available</p>
                  <div className="text-center">
                    <a href="#" className="btn btn-primary border border-5 border-info">
                      Go To Summary Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-4">
            <div className="col-6">
              <div className="card border border-5 border">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Study Journey</h5>
                  <p className="card-text lead">
                    Explaining of the study journey including my previous knowledge and what are the resources (YouTube, Tutorials, installations,…) i've used
                    for learning.
                  </p>
                  <div className="text-center">
                    <a href="#" className="btn btn-primary border border-5 border-info">
                      Go To Study Journey
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
