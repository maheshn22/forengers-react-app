import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'
import ImageGallery from 'react-image-gallery';

import plantation01 from '../assets/gallery-page/plantation01.webp'
import plantation02 from '../assets/gallery-page/plantation02.webp'
import plantation03 from '../assets/gallery-page/plantation03.webp'
import plantation04 from '../assets/gallery-page/plantation04.webp'
import plantation05 from '../assets/gallery-page/plantation05.webp'
import plantation06 from '../assets/gallery-page/plantation06.webp'
import plantation07 from '../assets/gallery-page/plantation07.webp'
import plantation08 from '../assets/gallery-page/plantation08.webp'
import plantation09 from '../assets/gallery-page/plantation09.webp'

import paperbag01 from '../assets/gallery-page/paperbag01.webp'
import paperbag02 from '../assets/gallery-page/paperbag02.webp'
import paperbag03 from '../assets/gallery-page/paperbag03.webp'
import paperbag04 from '../assets/gallery-page/paperbag04.webp'

import cleanliness01 from '../assets/gallery-page/cleanliness01.webp'
import cleanliness02 from '../assets/gallery-page/cleanliness02.webp'
import cleanliness03 from '../assets/gallery-page/cleanliness03.webp'
import cleanliness04 from '../assets/gallery-page/cleanliness04.webp'
import cleanliness05 from '../assets/gallery-page/cleanliness05.webp'
import cleanliness06 from '../assets/gallery-page/cleanliness06.webp'
import cleanliness07 from '../assets/gallery-page/cleanliness07.webp'
import cleanliness08 from '../assets/gallery-page/cleanliness08.webp'


//import "react-image-gallery/styles/scss/image-gallery.scss";


import "react-image-gallery/styles/css/image-gallery.css";

function Gallery(props) {

	const plantationImages = [
		{
			original:plantation01,
			thumbnail: plantation01,
		},
		{
			original: plantation02,
			thumbnail: plantation02,
		},
		{
			original: plantation03,
			thumbnail: plantation03,
		},
		{
			original: plantation04,
			thumbnail: plantation04,
		},
		{
			original: plantation05,
			thumbnail: plantation05,
		},
		{
			original: plantation06,
			thumbnail: plantation06,
		},
		{
			original: plantation07,
			thumbnail: plantation07,
		},
		{
			original: plantation08,
			thumbnail: plantation08,
		},
		{
			original: plantation09,
			thumbnail: plantation09,
		},
		
	];

	const paperbagImages = [
		{
			original:paperbag01,
			thumbnail: paperbag01,
		},
		{
			original: paperbag02,
			thumbnail: paperbag02,
		},
		{
			original: paperbag03,
			thumbnail: paperbag03,
		},
		{
			original: paperbag04,
			thumbnail: paperbag04
		}
	
		
	];

	const cleanlinessImages = [
		{
			original:cleanliness01,
			thumbnail: cleanliness01,
		},
		{
			original: cleanliness02,
			thumbnail: cleanliness02,
		},
		{
			original: cleanliness03,
			thumbnail: cleanliness03,
		},
		{
			original: cleanliness04,
			thumbnail: cleanliness04,
		},
		{
			original: cleanliness05,
			thumbnail: cleanliness05,
		},
		{
			original: cleanliness06,
			thumbnail: cleanliness06,
		},
		{
			original: cleanliness07,
			thumbnail: cleanliness07,
		},
		{
			original: cleanliness08,
			thumbnail: cleanliness08,
		},
		
	];



	return (
		<div className="gallery-page page">
			<Hero title={props.title}/>
			
			<Content>
				<h1>Plantation: </h1>
				<ImageGallery items={plantationImages} />
				<br/>
				<br/>
				<h1>Cleanliness: </h1>
				<ImageGallery items={cleanlinessImages} />
				<br/>
				<br/>
				<h1>Paper bags: </h1>
				<ImageGallery items={paperbagImages} />
				<br/>
				<br/>
				
			
			
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
			</p>
			</Content>
		</div>
	)
}
export default  Gallery;
