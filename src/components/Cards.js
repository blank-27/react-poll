import React from 'react';
import Card from './Card';

const Cards = ({dishes}) => {

    return (
        <div className="flex flex-wrap justify-center md:container md:mx-auto p-4 ">
            {dishes.map(dish =>{ 
                return(<Card key={dish.id} dish={dish}  />);
            })}
        </div>
    );
};

export default Cards;
