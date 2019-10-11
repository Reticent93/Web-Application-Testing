import React from 'react';
import Dashboard from './Dashboard';


function Display(props) {
    console.log('display', props)
	return (
		<div>
            
            <h1>Baseball</h1>
            <Dashboard strikes={props.strikes} balls={props.balls} />
			
		</div>
	);
}

export default Display;
