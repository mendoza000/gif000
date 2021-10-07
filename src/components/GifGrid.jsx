import React from 'react'
import 'animate.css'
import GifGridItem from './GifGridItem'
import {useFetchGifs} from '../hooks/useFetchGifs'
import './GifGrid.css'

const GifGrid = ({cat}) => {

	const {data: images, loading} = useFetchGifs(cat)

	return(
		<div className="animate__animated animate__slideInLeft">
			<h2>{cat}</h2>
			{loading && 'Cargando...'}
			<div className="cardContainer">
				{
				images.map(img => {
					return <GifGridItem 
								key={img.id}
								{...img}
							/>
				})
			}
			</div>
		</div>
	)

}

export default GifGrid