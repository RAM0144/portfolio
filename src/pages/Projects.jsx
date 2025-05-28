function Projects() {
  return (
    <div className="container">
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">WeddingWise - Event Management App</h5>
      <p className="card-text">
      A full-stack wedding event management platform built with the MERN stack, offering event and vendor creation, booking options, 
      and booking details. The app uses JWT for secure user authentication, with token verification 
      for accessing event, vendor, and booking features, ensuring a seamless and secure experience.</p>
      <a href="https://github.com/RAM0144/event-management-application-fe" className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
        Frontend
      </a>
      <a href="https://github.com/RAM0144/event-management-application-be" className="btn btn-outline-secondary me-2" target="_blank" rel="noopener noreferrer">
        Backend
      </a>
      <a href="https://vermillion-treacle-1b3b48.netlify.app/" className="btn btn-outline-success" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
    </div>
    </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">E-commerce App</h5>
          <p className="card-text">
          A full-stack e-commerce platform built with the MERN stack, featuring new product creation, 
          JWT-based authentication, role-based access control, cart management, and seamless order placement.
          </p>
          <a href="https://github.com/RAM0144/E-Commerce-App-FE" className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
            Frontend
          </a>
          <a href="https://github.com/RAM0144/E-Commerce-App-BE" className="btn btn-outline-secondary me-2" target="_blank" rel="noopener noreferrer">
            Backend
          </a>
          <a href="https://resplendent-pixie-34c0be.netlify.app/login" className="btn btn-outline-success" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
