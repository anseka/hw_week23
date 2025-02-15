import React from 'react';

const Tariff = ({ name, price, speed, isSelected, onSelect }) => {
	return (
		<div
			className={`tariff-card ${price === 550 ? 'highlighted' : ''} ${
				isSelected ? 'selected' : ''
			}`}
			onClick={onSelect}>
			<h2>{name}</h2>
			<p className='price'>
				руб <span>{price}</span>/мес
			</p>
			<p className='speed'>до {speed} Мбит/сек</p>
			<p className='traffic'>Объем включенного трафика не ограничен</p>
		</div>
	);
};

export default Tariff;
