//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
	return(
		<div className="container">
			<div clasName="clock"><FontAwesomeIcon icon={faClock} /></div>
			<div clasName="four">0</div>
			<div clasName="three">0</div>
			<div clasName="two">0</div>
			<div clasName="one">0</div>
		</div>
	);
}

ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));



