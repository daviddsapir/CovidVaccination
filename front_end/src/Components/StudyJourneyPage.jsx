import django_course from '../Images/django_course.jpg'
import connect from '../Images/connect.png'
import mosh_react from '../Images/mosh_react.jpg'
import moshe_python from '../Images/moshe_python.jpg'

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
        <div className="container-fluid my-4">
          <div className="row justify-content-center">
            <div className="col-6">
              <p className="lead">
                Here I explain my study journey including my previous knowledge and what are the resources (YouTube, Tutorials, installations,…) i've used for
                learning.
              </p>
            </div>
          </div>


          <div className="row justify-content-center mt-3">
            <div className="col-6">
              <h3 className='text-primary text-decoration-underline'>Learning basic python</h3>
              <p className="lead">
                Django is a python framework. <br/>
                So, before jumping strait to learn Django, i had to study python.
                I've studied Python from documentation i've found on google and watching Youtube videos and courses.
              </p>
              <h5 className="text-info">Documentation</h5>
              <ul className='list' style={{ listStyleType:'none' }}>
                <li className="my-3">
                  <a href="https://devdocs.io/python~3.10/">https://devdocs.io/python~3.10/</a>
                </li>
              </ul>
              <h5 className="text-info mt-4">Youtube</h5>
              <ul className='list' style={{ listStyleType:'none' }}>
                <li>
                  <p className="lead">This course is very good for those who are just begging learning python and also want to gain deeper understand in python.</p>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={moshe_python} className="card-img-top" alt="Python course image" />
                    <div className="card-body">
                      <p className="card-title lead fw-bold">Python Tutorial - Python Full Course for Beginners</p>
                      <p className="fw-light">Python tutorial - Python full course for beginners - Go from Zero to Hero with Python (includes machine learning & web development projects).</p>
                      <dov className="row text-center">
                        <div className="col">
                          <a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=11082s" className="btn btn-primary">Go To Course on YouTube</a>
                        </div>
                      </dov>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          <div className="row justify-content-center mt-5">
            <div className="col-6">
              <h3 className='text-primary text-decoration-underline'>Learning React</h3>
              <p className="lead">
                I had a basic knowledge in react SPA framework so after watching the great course of python in the youtube channel Programming with Mosh.
                I've decided to learn react in more depth by viewing another course of mosh about react and by reading a book "The Road to React".
                I've learned a lot from this course and the book.
              </p>
              <h5 className="text-info">Book</h5>
              <ul className='list' style={{ listStyleType:'none' }}>
                <li>
                  <p>Link to the book - <a href="https://sd.blackball.lv/library/The_Road_to_React_(2020).pdf">The Road To React</a> </p>
                </li>
              </ul>
              <h5 className="text-info mt-4">Youtube</h5>
              <ul className='list' style={{ listStyleType:'none' }}>
                <li>
                  <p className="lead">
                    Mosh goes in depth and explains not only about programming in react but also about how react works behind the sense.
                    This knowledge made me a better programmer in react so i hope it will make you too!
                  </p>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={mosh_react} className="card-img-top" alt="Python course image" />
                    <div className="card-body">
                      <p className="card-title lead fw-bold">React JS - React Tutorial for Beginners</p>
                      <p className="fw-light">React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! </p>
                      <dov className="row text-center">
                        <div className="col">
                          <a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=11082s" className="btn btn-primary">Go To Course on YouTube</a>
                        </div>
                      </dov>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-6">
              <h3 className='text-primary text-decoration-underline'>Learning Django</h3>
              <p className="lead">
                I had zero knowledge in django.
                I found some free courses and videos on youtube that gave me all the knowledge i need to complete the task (and even more) and
                a perfect documentation of how to create and sync postgres sql Database with django.
                I've also used the "Django documentation" website when i got stuck.
              </p>
              <h5 className="text-info">Documentation</h5>
              <ul className='list' style={{ listStyleType:'none' }}>
                <li className="my-3">
                  <a href="https://docs.djangoproject.com/en/4.0/">Django documentation</a>
                </li>
                <li className="my-3">
                  <a href="https://stackpython.medium.com/how-to-start-django-project-with-a-database-postgresql-aaa1d74659d8">How to Start Django Project with a Database(PostgreSQL)</a>
                </li>
              </ul>
              <h5 className="text-info mt-4">Youtube</h5>
              <ul className='list' style={{ listStyleType:'none' }}>
                <li>
                  <p className="lead mt-4">Course that gives basic understanding of Django</p>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={django_course} className="card-img-top" alt="Python course image" />
                    <div className="card-body">
                      <p className="card-title fw-light">Build a discord-like application with Python Django.</p>
                      <p className="fw-light"></p>
                      <dov className="row text-center">
                        <div className="col">
                          <a href="https://youtu.be/PtQiiknWUcI" className="btn btn-primary">Go To Course on YouTube</a>
                        </div>
                      </dov>
                    </div>
                  </div>
                </li>
                <li className="mt-4">
                  <p className="lead">Connect postgresql with django</p>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={connect} className="card-img-top" alt="Python course image" />
                    <div className="card-body">
                      <p className="card-title fw-light">How to Connect PostgresSQL Database with Django Project</p>
                      <p className="fw-light"></p>
                      <dov className="row text-center">
                        <div className="col">
                          <a href="https://youtu.be/dYDoGHV-9hY" className="btn btn-primary">Go To YouTube</a>
                        </div>
                      </dov>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
