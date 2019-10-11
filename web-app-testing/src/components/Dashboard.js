import React, {useState} from 'react';

function Dashboard(props) {
    console.log('props', props)
const [strikes, setStrikes] = useState(0)
const [balls, setBalls] = useState(0)

const changing = () => {
    if(strikes === 0) {
        console.log(strikes)
    setStrikes(strikes + 1)
}

if (strikes === 3) {
    setStrikes(0)
}

if(balls === 0) {
    setBalls(balls + 1)
}
if(balls === 4) {
    setBalls(0)
}
}

	return (
		<div>
            <div>{strikes}</div>
            
			<button className='strike' onClick={() => setStrikes(changing)}>Strikes</button>
            <div>{balls}</div>
			<button className='ball' onClick={() => setBalls(changing)}>Balls</button>
            <br />
            <button>Foul</button>
            <button>Hit</button>
		</div>
	);
}

export default Dashboard;
