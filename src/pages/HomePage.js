import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

function HomePage(props) {
	return (
		<div className="home-page">
			<Hero title={props.title} subtitle={props.subtitle} data={props.data}/>
			<Carousel />
		</div>
	)
}
export default  HomePage;
