import React, { Component } from 'react';
import './style/index.scss';
import Card from './Card';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			images: [
				"https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/4:3/w_480,c_limit/GettyImages-468366251.jpg",
				"https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/4:3/w_480,c_limit/GettyImages-468366251.jpg",
				"https://www.100resilientcities.org/wp-content/uploads/2017/06/London-hero-crop.jpg",
				"https://www.100resilientcities.org/wp-content/uploads/2017/06/London-hero-crop.jpg",
				"https://images.wowcher.co.uk/images/deal/8929303/777x520/376078.jpg",
				"https://images.wowcher.co.uk/images/deal/8929303/777x520/376078.jpg",
				"https://www.hellomagazine.com/imagenes/travel/2018061449462/things-to-do-in-rome-3-days/0-243-749/Colosseum-Rome-t.jpg",
				"https://www.hellomagazine.com/imagenes/travel/2018061449462/things-to-do-in-rome-3-days/0-243-749/Colosseum-Rome-t.jpg",
				"https://www.b92.net/news/pics/2017/03/10/68769367758c1f7d74bf9c979113101_690x460.jpg",
				"https://www.b92.net/news/pics/2017/03/10/68769367758c1f7d74bf9c979113101_690x460.jpg",
				"http://iacpm.org/wp-content/uploads/2017/11/AmsterdamImageonSTD.jpg",
				"http://iacpm.org/wp-content/uploads/2017/11/AmsterdamImageonSTD.jpg",
				"https://s.inyourpocket.com/gallery/64940.jpg",
				"https://s.inyourpocket.com/gallery/64940.jpg",
				"http://nomadcapitalist.com/wp-content/uploads/2017/08/Kalemegdan.jpg",
				"http://nomadcapitalist.com/wp-content/uploads/2017/08/Kalemegdan.jpg"
			]
		};
	}

	componentDidMount() {

		let shuffleImg = this.shuffle(this.state.images);
		this.setState({
			images: shuffleImg
		})
	}

	shuffle = array => {
		let currentI = array.length;
		let tempValue;
		let randomI;

		while (currentI > 0) {

			randomI = Math.floor(Math.random() * currentI);
			currentI--;

			tempValue = array[currentI];
			array[currentI] = array[randomI];
			array[randomI] = tempValue;
		}
		return array;
	}

	handleClick = (event) => {        
        

        console.log(event.target.style.backgroundImage);
    }

	render() {
		return (
			<div className="App">
				<div className="grid-container">
					{this.state.images.map((el, i) => {
						return (<Card value={el} key={i} handleClick={this.handleClick}/>)
					})}
				</div>
			</div>
		);
	}
}

export default App;
