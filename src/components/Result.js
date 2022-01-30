import React, {useEffect,useState} from 'react';
import ResultCard from './ResultCard';

const Result = () => {

    useEffect(() =>{
        fetchDishes();
    },[]);

    const [dishes,setDishes] = useState([]);

    const fetchDishes = async () =>{
        const data = await fetch('https://react-poll-blank.herokuapp.com/dishes?_sort=TotalPoints&_order=desc');
        const dishes = await data.json();
        setDishes(dishes);
    };


    return (
        <div className="flex flex-wrap justify-center md:container md:mx-auto p-4 ">
            {dishes.map(dish =>{ 
                return(<ResultCard key={dish.id} dish={dish}  />);
            })}
        </div>
    );
};

export default Result;
