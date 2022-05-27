import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("one");
    const [zipCode, setZipCode] = useState("");
    const [landLine, setLandLine] = useState("");
    const [cellularPhone, setCellularPhone] = useState("");


    const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
    const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
    const [isDateOfBirthEmpty, setIsDateOfBirthEmpty] = useState(false);
    const [isAddressEmpty, setIsAddressEmpty] = useState(false);
    const [isCityEmpty, setIsCityEmpty] = useState(false);
    const [isZipCodeEmpty, setIsZipCodeEmpty] = useState(false);
    const [isLandLineEmpty, setIsLandLineEmpty] = useState(false);
    const [isCellularPhoneEmpty, setIsCellularPhoneEmpty] = useState(false);


    function handleEmptyFields() {
        handleEmptyField(firstName, setIsFirstNameEmpty);
        handleEmptyField(lastName, setIsLastNameEmpty);
        handleEmptyField(dateOfBirth, setIsDateOfBirthEmpty);
        handleEmptyField(address, setIsAddressEmpty);
        handleEmptyField(city, setIsCityEmpty);
        handleEmptyField(zipCode, setIsZipCodeEmpty);
        handleEmptyField(landLine, setIsLandLineEmpty);
        handleEmptyField(cellularPhone, setIsCellularPhoneEmpty);
    }

    function handleEmptyField(value, setFunction) {
        if (value === "") {
            setFunction(true);
        } else {
            setFunction(false);
        }
    }

    function renderErrorMessage(isEmpty) {
        if (isEmpty) {
            return (
                <>
                    <p className="mt-2 text-danger">Input required</p>
                </>
            );
        }
    }

    function initFromValidation() {
        setIsFirstNameEmpty(false);
        setIsLastNameEmpty(false);
        setIsDateOfBirthEmpty(false);
        setIsAddressEmpty(false);
        setIsCityEmpty(false);
        setIsZipCodeEmpty(false);
        setIsLandLineEmpty(false);
        setIsCellularPhoneEmpty(false);
    }

    function handleFormSubmit() {
        initFromValidation();
        handleEmptyFields();
        // axios()
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form action="/register" method="post">
                            <div className="mb-4">
                                <label for="FirstName" className="form-label fw-normal h5">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="first_name"
                                    onChange={(ev) => {
                                        const value = ev.target.value;
                                        setFirstName(value);
                                    }}
                                />
                                {renderErrorMessage(isFirstNameEmpty)}
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
                                    name="last_name"
                                    onChange={(ev) => {
                                        const value = ev.target.value;
                                        setLastName(value);
                                    }}
                                />
                                {renderErrorMessage(isLastNameEmpty)}
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
                                    name="date_of_birth"
                                    onChange={(ev) => {
                                        const value = ev.target.value;
                                        setDateOfBirth(value);
                                    }}
                                />
                                {renderErrorMessage(isDateOfBirthEmpty)}
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
                                    name="address"
                                    onChange={(ev) => {
                                        const value = ev.target.value;
                                        setAddress(value);
                                    }}
                                />
                                {renderErrorMessage(isAddressEmpty)}
                            </div>
                            <div className="mb-4">
                                <label for="LastName" className="form-label fw-normal h5">
                                    City
                                </label>
                                <select className="form-select"
                                        aria-label="Default select example"
                                        name="city"
                                        onChange={(ev) => {
                                            const value = ev.target.value;
                                            setCity(value);
                                        }}
                                >
                                    <option selected value="One">One</option>
                                    <option value="Two">Two</option>
                                    <option value="Three">Three</option>
                                </select>
                                {renderErrorMessage(isCityEmpty)}
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
                                    name="zip_code"
                                    onChange={(ev) => {
                                        const value = ev.target.value;
                                        setZipCode(value);
                                    }}
                                />
                                {renderErrorMessage(isZipCodeEmpty)}
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
                                    name="land_line"
                                    onChange={(ev) => {
                                        const value = ev.target.value;
                                        setLandLine(value);
                                    }}
                                />
                                {renderErrorMessage(isLandLineEmpty)}
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
                                    name="cellular_phone"
                                    onChange={(ev) => {
                                        const value = ev.target.value;
                                        setCellularPhone(value);
                                    }}
                                />
                                {renderErrorMessage(isCellularPhoneEmpty)}
                            </div>
                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" name="been_infected" />
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
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="diabetes" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Diabetes
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="Cardio_Vascular" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Cardio-Vascular problems
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="cancer" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Cancer
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="obesity" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Obesity
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="MRSA" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                MRSA
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="cholesterol" />
                                            <label className="form-check-label" for="exampleCheck1">
                                                Cholesterol
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="exampleCheck1"
                                                name="high_blood_pressure"
                                            />
                                            <label className="form-check-label" for="exampleCheck1">
                                                High Blood Pressure
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto my-4 text-center">
                                <button
                                    type="submit"
                                    className="btn-lg btn-primary"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        handleFormSubmit();
                                    }}
                                >
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
