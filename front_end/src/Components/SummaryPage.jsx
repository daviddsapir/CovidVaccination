import axios from "axios";
import { useEffect, useState } from "react";

export default function SummaryPage() {
	const [formData, setFormData] = useState([]);

	const [filterByCity, setFilterByCity] = useState(null);

	const [filterByDate, setFilterByDate] = useState({
		beg: null,
		end: null,
	});

	useEffect(() => {
		axios
			.get("SummaryPage/getFormInfo")
			.then((response) => {
				const data = response.data.data;
				setFormData(data);
			})
			.catch(() => {})
			.finally(() => {});
	}, []);

	function isFilterPassed(data) {
		const [dateOfBirth, city] = [data.date_of_birth, data.city];

		if (filterByCity === "" && filterByDate.min === null && filterByDate.max === null) {
			return true;
		}

		if (filterByCity !== "" && filterByCity !== city) {
			return false;
		}

		if (filterByCity !== null) {
			const currentDate = new Date(dateOfBirth);
			if (currentDate >= filterByDate.min && currentDate <= filterByDate.max) {
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
							<div className="card-header lead fw-bold bg-light">
								Filter By City
							</div>
							<div className="card-body bg-light">
								<select className="form-select" size="3" aria-label="size 3 select example">
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card">
							<div className="card-header lead fw-bold bg-light">
								Filter By Birth Date
							</div>
							<div className="card-body bg-light">
								<div className="row g-3">
									<div className="col">
										<label className="lead" htmlFor="">From</label>
										<input type="date" className="form-control" placeholder="Begin Date"
											   aria-label="beg date" />
									</div>
									<div className="col">
										<label className="lead" htmlFor="">To</label>
										<input type="date" className="form-control" placeholder="End Date"
											   aria-label="end date" />
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
		return formData.map((data) => {
			// if (isFilterPassed(data)) {
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
			// }
		});
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
				<div className="container">
					{renderFilterForm()}
				</div>
				<div className="container-fluid">{renderFormResults()}</div>
			</main>
		</>
	);
}
