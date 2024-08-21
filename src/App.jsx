import { useState } from 'react'
import Square from './components/Square'

function App() {
	const [squares, setSquares] = useState(Array(9).fill(null))
	const [isNextX, setIsNextX] = useState(true)

	let isWinner = false
	let winner = null

	const setSquaresValue = (id) => {
		let newSquares = squares.slice()
		newSquares[id] = isNextX ? 'x' : 'o'
		setIsNextX(!isNextX)
		setSquares(newSquares)
	}

	const checkWinner = () => {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		for (let combination of winningCombinations) {
			let [a, b, c] = combination

			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[b] === squares[c]
			) {
				isWinner = true
				return squares[a]
			}
		}
		return null
	}

	winner = checkWinner()

	if (winner) {
		setTimeout(() => {
			setSquares(Array(9).fill(null))
			setIsNextX(true)
		}, 3000)
	}

	return (
		<div className='App'>
			Побидитель: {winner}
			<p>Xод у: {isNextX ? 'x' : 'o'}</p>
			<div className='Board'>
				{squares.map((square, index) => {
					return (
						<span key={index}>
							<Square
								square={square}
								setSquaresValue={() => setSquaresValue(index)}
							/>
						</span>
					)
				})}
			</div>
		</div>
	)
}

export default App
