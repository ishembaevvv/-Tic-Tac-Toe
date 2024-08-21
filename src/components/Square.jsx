import React from 'react'

export default function Square({ square, setSquaresValue }) {
	return (
		<div>
			<button onClick={setSquaresValue}>{square}</button>
		</div>
	)
}
