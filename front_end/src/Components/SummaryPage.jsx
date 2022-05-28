import axios from "axios";

export default function SummaryPage() {

  function renderFormResults() {
    axios
        .get("/SummaryPage/getFormInfo")
        .then((response) => {
          console.log(response.data);
        })
        .then(() => {

        })
        .catch(() => {

        })
        .finally(() => {

        });
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
