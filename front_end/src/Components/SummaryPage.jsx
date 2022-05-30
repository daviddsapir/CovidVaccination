import axios from "axios";
import { useEffect, useState } from "react";

export default function SummaryPage() {
	const [formData, setFormData] = useState([]);

	const [filterByCity, setFilterByCity] = useState(null);

	const [filterByDate, setFilterByDate] = useState({
		min: null,
		max: null
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

	function renderTableRows() {
		return (
			formData.map((data) => {
				if (isFilterPassed(data)){
					return (
						<>
							<tr>
								<th scope="row">1</th>
								<td>{data.first_name}</td>
								<td>{data.last_name}</td>
								<td>{data.date_of_birth}</td>
								<td>{data.address}</td>
								<td>{data.city}</td>
								<td>{data.zip_code}</td>
								<td>{data.land_line}</td>
								<td>{data.cellular_phone}</td>
								<td>{data.been_infected}</td>
								<td>{data.other_conditions}</td>
							</tr>
						</>
					);
				}
			})
		);
	}

	function renderFormResults() {
		if (formData.length === 0) {
			return (
				<>
					<h2>No one </h2>
				</>
			)
		} else {
			return (
				<>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Date Of Birth</th>
								<th scope="col">City</th>
								<th scope="col">Zip Code</th>
								<th scope="col">Cellular Phone</th>
								<th scope="col">Been Infected</th>
								<th scope="col">Other Conditions</th>
							</tr>
						</thead>
						<tbody>
							{renderTableRows()}
						</tbody>
					</table>
				</>
			)
		}
	}

	return (
		<>
			<header className="m-2">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-6">
							<div className="h1 text-center">Form Summary</div>
							{renderFormResults()}
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
