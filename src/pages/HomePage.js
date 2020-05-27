import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Content from '../components/Content';

function HomePage(props) {
	return (
		<div className="home-page page lead bold">
			<Content>
			<Hero title={props.title} subtitle={props.subtitle} />
			<p>
				<b>
				{props.data1}<br></br>
				{props.data2}
				</b>
			</p>
			<Carousel />
			</Content>
		</div>
	)
}
export default  HomePage;
