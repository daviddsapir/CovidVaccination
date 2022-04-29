export default function HomePage() {
    return (
        <>
            <header className="my-5">
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
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <div className="card border border-5 border">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Study Journey</h5>
                                    <p className="card-text lead">
                                        Explaining of the study journey including my previous knowledge and what are the resources (YouTube,
                                        Tutorials, installations,…) i've used for learning.
                                    </p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-primary">
                                            Go To Study Journey
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="card border border-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Summary Page</h5>
                                    <p className="card-text lead">A tabular view that shows all the existing registration info available</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-primary">
                                            Go To Summary Page
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
