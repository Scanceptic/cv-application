

function Work() {
  return (
    <>
      <div className="section">
        <h2>Work Section</h2>
        <div><label>Company Name:</label><input type="text" placeholder="Apple"></input></div>
        <div><label>Position:</label><input type="text" placeholder="Software Engineer"></input></div>
        <div><label>Responsibilites:</label><textarea type="text" placeholder="Completing tickets in a timely manner" className="large"></textarea></div>
        <div>
          <label>Start Date:</label><input type="date"></input>
          <label>End Date:</label><input type="date"></input>
        </div>
      </div>
    </>
  )
}

export default Work
