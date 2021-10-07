import React from 'react'
import 'animate.css'
import './GifGridItem.css'

const GifGridItem = ({url, title}) => {
	
	return(
		<div className="card animate__animated animate__slideInLeft">
			<img src={url} alt={title}/>
			<p>{title}</p>
			
		</div>
	)

}

export default GifGridItem