import React from 'react'
import styled from 'styled-components';
import '../style/palette.css'



const ProgressBarTube = styled.div`
	background-color: var(--levelTubeBackground);
	border-radius: 20px;
	position: relative;
	margin-top: 25px;
	height: 30px;
	width: 300px;
;`

const Level = styled.div`
	background-color: var(--levelTubeValueBackground);
	box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
	border-radius: 20px;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
;`

export default function Progress ({level}) {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${level}%`
		}
		setStyle(newStyle);
	}, 200);
	
	return (
		<>
			<ProgressBarTube>
				<Level style={style}/>
			</ProgressBarTube>
		</>
	)
}
    

