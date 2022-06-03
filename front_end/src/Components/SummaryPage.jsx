import axios from "axios";
import { useEffect, useState } from "react";

export default function SummaryPage() {
	const summaryPageFromInfoUrl = "SummaryPage/getFormInfo";

	const [formData, setFormData] = useState([
		{
			"first_name": "asd",
			"last_name": "123",
			"date_of_birth": "0123-03-12",
			"address": "123",
			"city": "One",
			"zip_code": "123123",
			"land_line": "123",
			"cellular_phone": "123",
			"been_infected": false,
			"other_conditions": "Cardio_Vascular, cancer, obesity, MRSA"
		},
		{
			"first_name": "asd",
			"last_name": "asd",
			"date_of_birth": "2323-02-23",
			"address": "123",
			"city": "One",
			"zip_code": "123",
			"land_line": "123",
			"cellular_phone": "123",
			"been_infected": true,
			"other_conditions": "diabetes, cancer, MRSA, cholesterol"
		}
	]);

	const [filterByCity, setFilterByCity] = useState("none");

	const [filterByDate, setFilterByDate] = useState({
		beg: null,
		end: null,
	});

	useEffect(() => {
		axios
			.get(summaryPageFromInfoUrl)
			.then((response) => {
				const data = response.data.data;
				setFormData(data);
			})
			.catch(() => {})
			.finally(() => {});
	}, []);

	function isFilterPassed(data) {
		const [dateOfBirth, city] = [data.date_of_birth, data.city];

		if (filterByCity === "none" && filterByDate.beg === null && filterByDate.end === null) {
			return true;
		}

		if (filterByCity !== "none") {
			if (filterByCity)
			console.log(filterByCity, city)
			return false;
		}

		if (filterByDate.beg !== null && filterByDate.end !== null) {
			console.log(filterByDate)
			const currentDate = new Date(dateOfBirth);
			console.log(currentDate);
			if (currentDate >= filterByDate.beg && currentDate <= filterByDate.end) {
				return true;
			}
		}

		return true;
	}

	function renderFilterForm() {
		return (
			<>
				<div className="row m-5 justify-content-center">
					<div className="col-4 mx-5">
						<div className="card">
							<div className="card-header lead fw-bold bg-light">Filter By City</div>
							<div className="card-body bg-light">
								<select
									className="form-select"
									aria-label="Default select example"
									onChange={(event) => {
										const city = event.target.value;
										setFilterByCity(city);
									}}
								>
									<option value="none">none</option>
									<option value="One">One</option>
									<option value="Two">Two</option>
									<option value="Three">Three</option>
								</select>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card">
							<div className="card-header lead fw-bold bg-light">Filter By Birth Date</div>
							<div className="card-body bg-light">
								<div className="row g-3">
									<div className="col">
										<label className="lead">From</label>
										<input
											type="date"
											className="form-control"
											placeholder="Begin Date"
											aria-label="beg date"
											onChange={(event) => {
												let begDate = filterByDate;
												begDate.beg = event.target.value;
												setFilterByDate(begDate);
											}}
										/>
									</div>
									<div className="col">
										<label className="lead">To</label>
										<input
											type="date"
											className="form-control"
											placeholder="End Date"
											aria-label="end date"
											onChange={(event) => {
												let endDate = filterByDate;
												endDate.end = event.target.value;
												setFilterByDate(endDate);
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	function renderTableRows() {
		const filteredData = formData.filter((data) => {
			if (isFilterPassed(data)) {
				return true;
			}
			console.log("here");
			return false;
		});

		if (filteredData.length > 0) {
			return formData.map((data, index) => {
				return (
					<>
						<tr>
							<td>{data.first_name}</td>
							<td>{data.last_name}</td>
							<td>{data.date_of_birth}</td>
							<td>{data.address}</td>
							<td>{data.city}</td>
							<td>{data.zip_code}</td>
							<td>{data.land_line}</td>
							<td>{data.cellular_phone}</td>
							<td>{data.been_infected ? "Been Infected" : ""}</td>
							<td>{data.other_conditions}</td>
						</tr>
					</>
				);
			});
		} else {
			return (
				<>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col">
								<h2 className="text-center">No Results</h2>
							</div>
						</div>
					</div>
				</>
			);
		}
	}

	function renderFormResults() {
		if (formData.length === 0) {
			return (
				<>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col">
								<h2 className="text-center">No registration info available in the system...</h2>
							</div>
						</div>
					</div>
				</>
			);
		} else {
			return (
				<>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Date Of Birth</th>
								<th scope="col">Address</th>
								<th scope="col">City</th>
								<th scope="col">Zip Code</th>
								<th scope="col">Land Line</th>
								<th scope="col">Cellular Phone</th>
								<th scope="col">Been Infected</th>
								<th scope="col">Other Conditions</th>
							</tr>
						</thead>
						<tbody>{renderTableRows()}</tbody>
					</table>
				</>
			);
		}
	}

	return (
		<>
			<header className="m-2">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-6">
							<div className="h1 text-center">Form Summary</div>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className="container">{renderFilterForm()}</div>
				<div className="container-fluid">{renderFormResults()}</div>
			</main>
		</>
	);
}
