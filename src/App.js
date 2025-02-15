import React, { useState } from 'react';
import Tariff from './components/Tariff';
import './components/Tariff.css';

function App() {
	const tariffs = [
		{ name: 'Безлимитный 300', price: 300, speed: 10 },
		{ name: 'Безлимитный 450', price: 450, speed: 50 },
		{ name: 'Безлимитный 550', price: 550, speed: 100 },
		{ name: 'Безлимитный 1000', price: 1000, speed: 200 },
	];

	const [selectedTariff, setSelectedTariff] = useState(null);

	return (
		<div className='tariffs-container'>
			{tariffs.map((tariff) => (
				<Tariff
					key={tariff.price}
					// name={tariff.name}
					// price={tariff.price}
					// speed={tariff.speed}
					isSelected={selectedTariff === tariff.price}
					onSelect={() => setSelectedTariff(tariff.price)}
					{...tariff}
				/>
			))}
		</div>
	);
}

export default App;
