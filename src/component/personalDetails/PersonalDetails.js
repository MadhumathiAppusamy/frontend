import React from "react";

function PersonalDetails(props) {
  const gotoeducation = () => {
    props.history.push("/Education");
  };
  return (
    <div>
      <h2 align="center">Personal Details</h2>
      <div>
        <form>
          <div
            style={{
              display: "flex",
              columnGap: "50px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="firstname*" size="30" />
            <input type="text" placeholder="lastname*" size="30" />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              columnGap: "50px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="Email*" size="30" />
            <input type="text" placeholder="phonenumber*" size="30" />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              columnGap: "50px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="your website*" size="30" />
            <input type="text" placeholder="GitHub*" size="30" />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              columnGap: "50px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="Linked In*" size="30" />
            <input type="text" placeholder="Twitter*" size="30" />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              columnGap: "50px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="Facebook*" size="30" />
            <input type="text" placeholder="Instagram*" size="30" />
          </div>
          <br></br>
        </form>
      </div>
      <div
        style={{ display: "flex", columnGap: "50px", justifyContent: "center" }}
      >
        <button type="button" class="btn btn-secondary" >Back</button>
        <br></br>
        <button type="button" class="btn btn-danger" onClick={gotoeducation} >
          Next
        </button>
        
      </div>
      <br></br>
      <div>
        <footer align="center">Page1</footer>
      </div>
    </div>
  );
}

export default PersonalDetails;
