import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';

import penImage from '../src/images/pen.png';
import balloonImage from '../src/images/balloon.png';
import flagImage from '../src/images/flag.png';


const cardsData = [
    {
        image: penImage,
        title: 'Первый блок',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    },
    {
        image: balloonImage,
        title: 'Второй блок',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    },
    {
        image: flagImage,
        title: 'Третий блок',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit!',
    },
];

const App = () => {
    return (
        <div className="app">
            <Header title="Что Вам необходимо?"/>
            <div className="cards-container">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
