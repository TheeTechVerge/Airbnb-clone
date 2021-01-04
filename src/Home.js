import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";

function Home() {
	return (
		<div className='home'>
			<Banner />
			<div className='home__section'>
				<Card
					src='https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720'
					title='Online Experiences'
					description='Unique activities we can do together, led by a world of hosts.'
				/>
				<Card
					src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
					title='Unique Stays'
					description='Spaces that are more than just a place to sleep.'
				/>
				<Card
					src='https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=697%2C465'
					description='Comfortable private places, with room for friends or family'
					title='Entire Homes'
				/>
			</div>
			<div className='home__section'>
				<Card
					src='https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg'
					title='3 Bedroom Flat in Bournemouth'
					description='Superhost with a stunning view of the beachside in Sunny Bournemouth'
					price='$130/night'
				/>
				<Card
					src='https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg'
					title='Penthouse in London'
					description='Enjoy the amazing site of London with this stunning penthouse'
					price='$350/night'
				/>
				<Card
					src='https://media.nomadicmatt.com/2018/apartment.jpg'
					title='1 Bedroom Apartment'
					description='Superhost with great amenities and a fabulous shopping complex Nearby'
					price='$230/night'
				/>
			</div>
		</div>
	);
}

export default Home;
