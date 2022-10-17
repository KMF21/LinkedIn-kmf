import React from 'react'
import "../styles/InputOption.css"

function InputOption({Icon, title , color}) {
  return (
    <div className="inputOption">
        <Icon size="20" style={{color: color}} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption