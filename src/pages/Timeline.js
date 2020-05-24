import React from 'react'
import Hero from '../components/Hero'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import Pokeball from '../assets/pokeball.png'
import { MdEvent } from "react-icons/md";
import event1 from '../assets/gallery-page/plantation01.webp'
import event2 from '../assets/gallery-page/plantation02.webp'
import event3 from '../assets/gallery-page/plantation03.webp'
import event4 from '../assets/gallery-page/plantation04.webp'
import event5 from '../assets/gallery-page/plantation05.webp'
import event6 from '../assets/gallery-page/plantation06.webp'


function Timeline(props) {
	return (
		<div className="page">
		<Hero title={props.title} />
		<VerticalTimeline>
				<div>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2011 - present"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={ <MdEvent />}
				>
					<h3 className="vertical-timeline-element-title">Event</h3>
					<h4 className="vertical-timeline-element-subtitle">Location</h4>
					<p>
					Description
					</p>
					<img src={event1} className="event-img" alt="Event"></img>
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<MdEvent />}
				>
					<h3 className="vertical-timeline-element-title">Event</h3>
					<h4 className="vertical-timeline-element-subtitle">Location</h4>
					<p>
					Description
					</p>
					<img src={event2} className="event-img" alt="Event"></img>
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2008 - 2010"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<MdEvent />}
				>
					<h3 className="vertical-timeline-element-title">Event</h3>
					<h4 className="vertical-timeline-element-subtitle">Location</h4>
					<p>
					Description
					</p>
					<img src={event3} className="event-img" alt="Event "></img>
				</VerticalTimelineElement>
				
					<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
					date="2006 - 2008"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<MdEvent />}
				>
					<h3 className="vertical-timeline-element-title">Event</h3>
					<h4 className="vertical-timeline-element-subtitle">Location</h4>
					<p>
					Description
					</p>
					<img src={event4} className="event-img" alt="Event "></img>
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="April 2013"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<MdEvent />}
				>
					<h3 className="vertical-timeline-element-title">Event</h3>
					<h4 className="vertical-timeline-element-subtitle">Location</h4>
					<p>
					Description
					</p>
					<img src={event5} className="event-img" alt="Event "></img>
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
					date="November 2012"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<MdEvent />}
				>
					<h3 className="vertical-timeline-element-title">Event</h3>
					<h4 className="vertical-timeline-element-subtitle">Location</h4>
					<p>
					Description
					</p>
					<img src={event6} className="event-img" alt="Event "></img>
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2002 - 2006"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<MdEvent />}
				>
					<h3 className="vertical-timeline-element-title">Event</h3>
					<h4 className="vertical-timeline-element-subtitle">Location</h4>
					<p>
						Description
					</p>
					<img src={event1} className="event-img" alt="Event "></img>
				</VerticalTimelineElement>
				</div>


				<VerticalTimelineElement
					iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
					icon= {<MdEvent />}
				/>
			</VerticalTimeline>
		</div>
	)
}

export default Timeline;
