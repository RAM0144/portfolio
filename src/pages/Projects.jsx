function Projects() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">WeddingWise - Event Management App</h5>
          <p className="card-text">
            A full-stack wedding event management application. Features include event planning, vendor management, scheduling and JWT-based user authentication login & register.
          </p>
          <a href="https://github.com/RAM0144/weddingwise-event-management-app-fe" className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
            Frontend
          </a>
          <a href="https://github.com/RAM0144/weddingwise-event-management-app-be" className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
            Backend
          </a>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">E-commerce App</h5>
          <p className="card-text">
          A full-stack e-commerce platform developed with the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring JWT-based user authentication, role-based access control, cart management, and checkout functionality.
          </p>
          <a href="https://github.com/RAM0144/E-Commerce-App-FE" className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
            Frontend
          </a>
          <a href="https://github.com/RAM0144/E-Commerce-App-BE" className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
            Backend
          </a>
        </div>
      </div>

    </div>
  );
}

export default Projects;
