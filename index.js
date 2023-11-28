const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Congratulations</h1>
    <div className="miniContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="imgLogo"
      />
      <p className="para">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="imgLogo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
