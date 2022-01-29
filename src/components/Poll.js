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


// let itemList = JSON.parse(raw);
// let found = false;
// for (let item of itemList.averages) {
//     if (item.name === this.state.data.item_name) {
//         found = true;
//         item.count += 1;
//     }
// }
// if (!found) {
//     let newItem = {
//         name: this.state.data.item_name,
//         count: 1,
//     }
//     itemList.averages.push(newItem);
// }
// let newRaw = JSON.stringify(itemList);
// fs.writeFileSync("../database/items.json", newRaw);