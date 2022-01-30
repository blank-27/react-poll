// import fs from 'fs';
import React, {useEffect,useState} from 'react';
import Cards from './Cards';



const Poll = () => {

    useEffect(() =>{
        fetchDishes();
    },[]);

    const [dishes,setDishes] = useState([]);

    const fetchDishes = async () =>{
        const data = await fetch('http://localhost:5001/dishes');
        const dishes = await data.json();
        setDishes(dishes);
    };
    return (
        <Cards dishes={dishes} />
    );
};

export default Poll;
