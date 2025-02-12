import Tariff from './components/tariff';
import './components/tariff.css';

function App() {
	const tariffs = [
		{ name: 'Безлимитный 300', price: 300, speed: 10 },
		{ name: 'Безлимитный 450', price: 450, speed: 50 },
		{ name: 'Безлимитный 550', price: 550, speed: 100 },
		{ name: 'Безлимитный 1000', price: 1000, speed: 200 },
	];

	return (
		<div className='tariffs-container'>
			{tariffs.map((tariff) => (
				<Tariff
					key={tariff.price}
					name={tariff.name}
					price={tariff.price}
					speed={tariff.speed}
					isHighlighted={tariff.price === 550}
				/>
			))}
		</div>
	);
}

export default App;
