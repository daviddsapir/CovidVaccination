export default function StudyJourneyPage() {
  return (
    <>
      <header className="mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="h1 text-center">Study Journey</div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-6">
              <p className="lead">
                Here i explain my study journey including my previous knowledge and what are the resources (YouTube, Tutorials, installations,…) i've used for
                learning.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-6">
              <h4 className='text-primary'>Learning basic python</h4>
              <p className="lead">
                Django is a python framework. <br/>
                So, before jumping strait to learn Django, i had to study python.
                I've studied Python from docs i've found on google and watching Youtube videos and courses.
              </p>
              <h5 className="text-info">Docs</h5>
              <ul className='list' style={{}}>
                <li className="my-3">
                  <a href="https://devdocs.io/python~3.10/">https://devdocs.io/python~3.10/</a>
                </li>
                <li>
                  <a href="https://devdocs.io/python~3.10/">https://devdocs.io/python~3.10/</a>
                </li>
              </ul>
              <h5 className="text-info mt-4">Youtube</h5>
              <ul>
                <li>
                  <p className="my-0">Python Tutorial - Python Full Course for Beginners</p>
                  <p>Link to the course - <a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=11082s">Python Full Course for Beginners </a></p>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
