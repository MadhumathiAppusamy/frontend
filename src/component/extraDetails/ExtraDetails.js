import React from "react";

function ExtraDetails(props) {
  const gotoexperience = ()=>{
    props.history.push('/Experience')
  }
  return (
    <div>
      <h1 align="center">Extra Details</h1>

      <form>
        <h2>Skills/Languages</h2>

        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "center",
          }}
        >
          <input type="text" placeholder="Skill 1" size="30" />
          <input type="text" placeholder="Skill 2" size="30" />
          <input type="text" placeholder="Skill 3" size="30" />
        </div>
        <br></br>

        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "center",
          }}
        >
          <input type="text" placeholder="Skill 4" size="30" />
          <input type="text" placeholder="Skill 5" size="30" />
          <input type="text" placeholder="Skill 6" size="30" />
        </div>
        <br></br>

        <h2>interest</h2>
        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "center",
          }}
        >
          <input type="text" placeholder="Interest 1" size="30" />
          <input type="text" placeholder="Interest 2" size="30" />
          <input type="text" placeholder="Interest 3" size="30" />
        </div>
        <br></br>

        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "center",
          }}
        >
          <input type="text" placeholder="Interest 4" size="30" />
          <input type="text" placeholder="Interest 5" size="30" />
          <input type="text" placeholder="Interest 6" size="30" />
        </div>
        <br></br>

        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "center",
          }}
        >
          <button type="button" class="btn btn-danger" onClick={gotoexperience}>back</button>
          <button type="button" class="btn btn-secondary">next</button>
        </div>
        <br></br>
        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "center",
          }}
        >
          <button type="button" class="btn btn-primary">DOWNLOAD RESUME</button>
        </div>
      </form>
    </div>
  );
}
<footer>page1</footer>;
export default ExtraDetails;
