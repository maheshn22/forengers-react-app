import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'
import ImageGallery from 'react-image-gallery';



//import "react-image-gallery/styles/scss/image-gallery.scss";


import "react-image-gallery/styles/css/image-gallery.css";

function Gallery(props) {

	const images = [
		{
			original: 'https://picsum.photos/id/1018/1000/600/',
			thumbnail: 'https://picsum.photos/id/1018/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1015/1000/600/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1019/1000/600/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1018/1000/600/',
			thumbnail: 'https://picsum.photos/id/1018/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1015/1000/600/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1019/1000/600/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},

	];


	return (
		<div className="gallery-page page">
			<Hero title={props.title}/>
			
			<Content>
				<h1>Plantation: </h1>
				<ImageGallery items={images} />
				<br/>
				<br/>
				<h1>Cleanliness: </h1>
				<ImageGallery items={images} />
				<br/>
				<br/>
				<h1>Paper bags: </h1>
				<ImageGallery items={images} />
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
