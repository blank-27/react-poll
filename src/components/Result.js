import React, {useEffect,useState} from 'react';
import ResultCard from './ResultCard';

const Result = () => {

    useEffect(() =>{
        fetchDishes();
    },[]);

    const [dishes,setDishes] = useState([]);

    const fetchDishes = async () =>{
        const data = await fetch('http://localhost:5001/dishes?_sort=users&_order=desc');
        const dishes = await data.json();
        setDishes(dishes);
    };
    dishes.sort(function(a, b) {
        return !(a.users.length - b.users.length);
    });

    return (
        <div className="flex flex-wrap justify-center md:container md:mx-auto p-4 ">
            {dishes.map(dish =>{ 
                return(<ResultCard key={dish.id} dish={dish}  />);
            })}
        </div>
    );
};

export default Result;
