export default function Projects() {
  return (
    <main>
      <h2>Projects</h2>
      <div className="cards">
        <div className="card">
          <div className="card-details">
            <p className="text-title">el mundo en fotogramas</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button" href="#link">
            More info
          </a>
        </div>

        <div className="card">
          <div className="card-details">
            <p className="text-title">remote island expeditions</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button" href="#link">
            More info
          </a>
        </div>

        <div className="card">
          <div className="card-details">
            <p className="text-title">movies to review</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button" href="#link">
            More info
          </a>
        </div>

        <div className="card">
          <div className="card-details">
            <p className="text-title">hire an expert</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button" href="#link">
            More info
          </a>
        </div>

        {/* <div className="card">
        <div className="card-details">
          <p className="text-title">breaking bad API</p>
          <p className="text-body">Card Details</p>
        </div>
        <a className="card-button" href="#link">
          More info
        </a>
      </div> */}
      </div>
    </main>
  );
}
