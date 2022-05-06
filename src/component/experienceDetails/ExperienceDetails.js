import React from 'react'

function ExperienceDetails(props) {
  const gotoproject = ()=>{
    props.history.push('/Project')
  }
  const gotoextra = ()=>{
    props.history.push('/Extra')
  }
  
  return (
    
    <div>
      <h1 align="center">Experience Details</h1>
      <form>
      <h1>Experience 1</h1>
      <div  style={{ display: 'flex', columnGap: '50px',justifyContent:'center' }}>
      <input type="text" placeholder="Institute/Organisation*" size='30' />
      <input type="text" placeholder="Position*" size='30'/>
        <input type="text" placeholder="Duration*" size='30'/>
      </div><br></br>
      <div style={{ display: 'flex', columnGap: '50px',justifyContent:'center' }}>
        <input type="text" placeholder="Description*" size='115'/>
        </div><br></br>
      <h1>Experience 2</h1>
      <div  style={{ display: 'flex', columnGap: '50px',justifyContent:'center' }}>
      <input type="text" placeholder="Institute/Organisation*" size='30'/>
      <input type="text" placeholder="Position*" size='30'/>
      <input type="text" placeholder="Duration*" size='30'/>
      </div><br></br>
      <div  style={{ display: 'flex', columnGap: '50px',justifyContent:'center' }}>
        <input type="text" placeholder="Description*" size='115'/>
        </div>
    </form><br></br>
      <div  style={{ display: 'flex', columnGap: '50px',justifyContent:'center' }}>
        <button type="button" class="btn btn-danger" onClick={gotoproject} type="submit">back</button>
        <button type="button" class="btn btn-danger" onClick={gotoextra} type="submit">next</button>
      </div><br></br>
      <div>
        <footer align="center">Page4</footer>
      </div>
    </div>
  )
}

export default ExperienceDetails