

function General() {
  return (
    <>
      <div className="section">
        <h2>General Section</h2>
        <div><label htmlFor="first-name">First Name:</label><input id="first-name" type="text" placeholder="Joe"></input></div>
        <div><label>Last Name:</label><input type="text" placeholder="Smith"></input></div>
        <div><label>Email</label><input type="email" placeholder="joesmith@gmail.com"></input></div>
        <div><label>Phone Number</label><input type="tel" placeholder="07975 555555"></input></div>
      </div>
    </>
  )
}

export default General
