import React from 'react'

const Title = (props) => {
  return (
    <>  
        <h1 style={{fontSize: '2.5em',textTransform:'uppercase',textAlign:'center',fontWeight:'700',padding:'3% 0% 0%'}}>{props.title}</h1>
    </>
  )
}

export default Title
