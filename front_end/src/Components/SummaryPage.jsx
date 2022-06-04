import axios from "axios";
import { useEffect, useState } from "react";

export default function SummaryPage() {
  const summaryPageFromInfoUrl = "SummaryPage/getFormInfo";

  const [isFilterButtonClicked, setIsFilterButtonClicked] = useState(false);

  const [filteredFormData, setFilteredFormData] = useState([]);

  const [formData, setFormData] = useState([]);

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
        setFilteredFormData(data);
      })
      .catch(() => {})
      .finally(() => {});
  }, []);

  function isFilterPassed(data) {
    const [dateOfBirth, city] = [data.date_of_birth, data.city];

    if (filterByCity === "none" && filterByDate.beg === null && filterByDate.end === null) {
      return true;
    }

    // Check if the city is correct.
    if (filterByCity !== "none" && filterByCity !== city) {
      return false;
    }

    // Check if date is valid.
    if (filterByDate.beg !== null && filterByDate.end !== null) {
      const currentDate = new Date(dateOfBirth);
      const begDate = new Date(filterByDate.beg);
      const endDate = new Date(filterByDate.end);

      if (currentDate < begDate || currentDate > endDate) {
        return false;
      }
    } else if (filterByDate.beg !== null && filterByDate.end === null) {
      const currentDate = new Date(dateOfBirth);
      const begDate = new Date(filterByDate.beg);

      if (currentDate < begDate) {
        return false;
      }
    } else if (filterByDate.beg === null && filterByDate.end !== null) {
      console.log("here3");
      const currentDate = new Date(dateOfBirth);
      const endDate = new Date(filterByDate.end);

      if (currentDate > endDate) {
        return false;
      }
    }

    return true;
  }

  function renderFilterForm() {
    return (
      <>
        <div className="card my-5">
          <div className="card-header bg-primary">
            <p className="mb-0">
              <b className="h4 text-light">Filter by City and Birth Date</b>
            </p>
          </div>
          <div className="card-body bg-light">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    const city = event.target.value;
                    setFilterByCity(city);
                  }}
                >
                  <option defaultValue="none">none</option>
                  <option value="Akko">Akko</option>
                  <option value="Arad">Arad</option>
                  <option value="Ariel">Ariel</option>
                  <option value="Ashdod">Ashdod</option>
                  <option value="Ashkelon">Ashkelon</option>
                  <option value="Bat Yam">Bat Yam</option>
                  <option value="Beer Sheva">Beer Sheva</option>
                  <option value="Beit Shean">Beit Shean	</option>
                  <option value="Beit Shemesh">Beit Shemesh</option>
                  <option value="Betar Illit">Betar Illit</option>
                  <option value="Dimona">Dimona</option>
                  <option value="Eilat">Eilat</option>
                  <option value="Elad">Elad</option>
                  <option value="Givatayim">Givatayim</option>
                  <option value="Hadera">Hadera</option>
                  <option value="Haifa">Haifa</option>
                  <option value="Harish">Harish</option>
                  <option value="Holon">Holon</option>
                  <option value="Jerusalem">Jerusalem</option>
                  <option value="Karmiel">Karmiel</option>
                  <option value="Maale Adumim">Maale Adumim</option>
                  <option value="Maalot Tarshiha">Maalot Tarshiha</option>
                  <option value="Modiin">Modiin</option>
                  <option value="Nahariya">Nahariya</option>
                  <option value="Nes Ziona">Nes Ziona</option>
                  <option value="Ramat-Gan">Ramat-Gan</option>
                  <option value="Sderot">Sderot</option>
                  <option value="Tel Aviv">Tel Aviv</option>
                  <option value="Yokneam">Yokneam</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">From</label>
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
              <div className="col-md-2">
                <label className="form-label">To</label>
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
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsFilterButtonClicked(true);
                  }}
                >
                  Filter
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  function renderTableRows(filteredFormData) {
    return filteredFormData.map((data, index) => {
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
      if (isFilterButtonClicked) {
        setFilteredFormData(
          formData.filter((data) => {
            if (isFilterPassed(data)) {
              return true;
            }
            return false;
          })
        );
        setIsFilterButtonClicked(false);
      }

      if (filteredFormData.length > 0) {
        return (
          <>
            <table className="table text-center">
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
              <tbody>{renderTableRows(filteredFormData)}</tbody>
            </table>
          </>
        );
      }
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
