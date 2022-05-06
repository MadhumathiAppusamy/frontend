import React from 'react'

function ProjectDeveloped(props) {
  const gotoeducation = ()=>{
    props.history.push('/Education')
  }
  const gotoexperience = ()=>{
    props.history.push('/Experience')
  }
  return (
    <div >
      <form>
        <h1 align="center">Project Developed</h1>
        <h1 align="center">Project1</h1>
        <div style={{ display: 'flex', columngap: '50px',justifyContent:'center' }}>
          <input type="text" placeholder="title*" size='70' /></div><br></br>
          <div style={{ display: 'flex', columgap: '50px',justifyContent:'center' }}>
          <input type="text" placeholder="link*" size='70' /></div><br></br>
          <div style={{ display: 'flex', columgap: '50px',justifyContent:'center' }}>
        <input type="text" placeholder="description*" size='70' /></div><br></br>

        <h1 align="center">Project2</h1>
        <div style={{ display: 'flex', columgap: '50px',justifyContent:'center' }}>
          <input type="text" placeholder="title*" size='70' /></div><br></br>
          <div style={{ display: 'flex', columgap: '50px',justifyContent:'center' }}>
          <input type="text" placeholder="link*" size='70' /></div><br></br>
          <div style={{ display: 'flex', columgap: '50px',justifyContent:'center' }}>
          <input type="text" placeholder="description*" size='70'/></div><br></br>
          
      </form>

       <div style={{ display: 'flex', columnGap: '50px',justifyContent:'center' }}>
        <button  type="button" class="btn btn-danger" onClick={gotoeducation} >back</button>
        <button type="button" class="btn btn-danger" onClick={gotoexperience} >next</button>
      </div><br></br>
      <div>
        <footer align="center">Page3</footer>
      </div>
    </div>
  )
}

export default ProjectDeveloped