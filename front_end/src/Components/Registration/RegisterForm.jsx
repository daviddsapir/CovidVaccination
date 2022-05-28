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

         let v1 = handleEmptyField(firstName, setIsFirstNameEmpty);
         let v2 = handleEmptyField(lastName, setIsLastNameEmpty);
         let v3 = handleEmptyField(dateOfBirth, setIsDateOfBirthEmpty);
         let v4 = handleEmptyField(address, setIsAddressEmpty);
         let v5 = handleEmptyField(city, setIsCityEmpty);
         let v6 = handleEmptyField(zipCode, setIsZipCodeEmpty);
         let v7 = handleEmptyField(landLine, setIsLandLineEmpty);
         let v8 = handleEmptyField(cellularPhone, setIsCellularPhoneEmpty);

         return (v1 || v2 || v3 || v4 || v5 || v6 || v7 || v8);
    }

    function handleEmptyField(value, setFunction) {
        if (value === "") {
            setFunction(true);
            return true
        } else {
            return false
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

    function handleFormSubmit(ev) {
        initFromValidation();
        if (handleEmptyFields()) {
            ev.preventDefault()
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form action="http://localhost:8000/register" method="post">
                            <div className="mb-4">
                                <label htmlFor="first_name" className="form-label fw-normal h5">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="first_name"
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
                                <label htmlFor="last_name" className="form-label fw-normal h5">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="last_name"
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
                                <label htmlFor="Date-of-birth" className="form-label fw-normal h5">
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
                                <label htmlFor="address" className="form-label fw-normal h5">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
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
                                <label htmlFor="city" className="form-label fw-normal h5">
                                    City
                                </label>
                                <select className="form-select"
                                        aria-label="Default select example"
                                        name="city"
                                        id="city"
                                        onChange={(ev) => {
                                            const value = ev.target.value;
                                            setCity(value);
                                        }}
                                >
                                    <option defaultValue="One">One</option>
                                    <option value="Two">Two</option>
                                    <option value="Three">Three</option>
                                </select>
                                {renderErrorMessage(isCityEmpty)}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="zip_code" className="form-label fw-normal h5">
                                    Zip code
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="zip_code"
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
                                <label htmlFor="land_line" className="form-label fw-normal h5">
                                    Land line
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="land_line"
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
                                <label htmlFor="cellular_phone" className="form-label fw-normal h5">
                                    Cellular phone
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cellular_phone"
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
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Have been infected by COVID-19 before
                                </label>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="LastName" className="form-label fw-normal h5">
                                    Other conditions
                                </label>
                                <div className="card">
                                    <div className="card-body border-3 border border-3 rounded-3">
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="Diabetes" name="diabetes" />
                                            <label className="form-check-label" htmlFor="Diabetes">
                                                Diabetes
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="Cardio-Vascular problems" name="Cardio_Vascular" />
                                            <label className="form-check-label" htmlFor="Cardio-Vascular problems">
                                                Cardio-Vascular problems
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="Cancer" name="cancer" />
                                            <label className="form-check-label" htmlFor="Cancer">
                                                Cancer
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="Obesity" name="obesity" />
                                            <label className="form-check-label" htmlFor="Obesity">
                                                Obesity
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="MRSA" name="MRSA" />
                                            <label className="form-check-label" htmlFor="MRSA">
                                                MRSA
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="Cholesterol" name="cholesterol" />
                                            <label className="form-check-label" htmlFor="Cholesterol">
                                                Cholesterol
                                            </label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="High Blood Pressure"
                                                name="high_blood_pressure"
                                            />
                                            <label className="form-check-label" htmlFor="High Blood Pressure">
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
                                        handleFormSubmit(ev);
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
