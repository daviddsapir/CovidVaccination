export default function RegisterForm() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form action="http://127.0.0.1:8000/action" method="post">
                            <div className="mb-4">
                                <label for="FirstName" className="form-label fw-normal h5">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="fist_name"
                                />
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="fist_name"
                                />
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    Date of birth
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="Date-of-birth"
                                    aria-describedby="emailHelp"
                                    name="DateOfBirth"
                                />
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Date-of-birth"
                                    aria-describedby="emailHelp"
                                    name="DateOfBirth"
                                />
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    City
                                </label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    Zip code
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="Date-of-birth"
                                    aria-describedby="emailHelp"
                                    name="DateOfBirth"
                                />
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    Land line
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="Date-of-birth"
                                    aria-describedby="emailHelp"
                                    name="DateOfBirth"
                                />
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    Cellular phone
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="Date-of-birth"
                                    aria-describedby="emailHelp"
                                    name="DateOfBirth"
                                />
                            </div>
                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">
                                    Have been infected by COVID-19 before
                                </label>
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    Other conditions
                                </label>
                                <div className="card">
                                    <div className="card-body border-3 border border-3 rounded-3">
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Diabetes
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Cardio-Vascular problems
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Cancer
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Obesity
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                MRSA
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Cholesterol
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                High Blood Pressure
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto ">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
