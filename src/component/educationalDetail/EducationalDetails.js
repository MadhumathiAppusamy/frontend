import React from "react";

function EducationalDetails(props) {
  const gotopersonal = () => {
    props.history.push("/");
  };
  const gotoproject = () => {
    props.history.push("/Project");
  };
  return (
    <div>
      <h1 align="center">Educational Details</h1>
      <div>
        <form>
          <div
            style={{
              display: "flex",
              columnGap: "230px",
              justifyContent: "center",
              marginLeft: "-10px",
            }}
          >
            <input type="text" placeholder="college/universitry*" size="28" />
            <input type="date" name="Startdate" size="70"></input>
            <input type="date" name="Enddate" size="70"></input>
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              columnGap: "20px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="Qualification*" size="28" />
            <input type="text" placeholder="Description*" size="93" />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              columnGap: "230px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="School*" size="28" />
            <input type="date" name="Startdate" size="30"></input>
            <input type="date" name="Enddate" size="30"></input>
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              columnGap: "20px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="Qualification*" size="28" />
            <input type="text" placeholder="Description*" size="93" />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              columnGap: "50px",
              justifyContent: "center",
            }}
          >
            <button type="button" class="btn btn-danger" onClick={gotopersonal} type="submit">
              back
            </button>
            <button type="button" class="btn btn-danger" onClick={gotoproject} type="submit">
              next
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <div>
        <footer align="center">Page2</footer>
      </div>
    </div>
  );
}

export default EducationalDetails;
