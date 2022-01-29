import axios from 'axios';
import React, {useEffect,useState} from 'react';


let userid = 2;

const Card = ({dish}) => {


    const [voted,setvoted] = useState(dish.users.includes(userid));


    const vote = (id)=>{
        console.log(dish.users);

        if(!dish.users){
            dish.users=[];
        }
        if(dish.users.includes(userid)){
            //removing id
            dish.users = dish.users.filter((id)=>{
                return id!==userid;
            }); 
            setvoted(false);
        }else{
            dish.users.push(userid);
            setvoted(true);
        }
        axios.put(`http://localhost:5001/dishes/${id}`,{...dish});
    }
    
    return (
        <div className="text-center p-5 hover:drop-shadow-lg m-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <div className="flex flex-col justify-center items-center">
                <img className="mb-3 w-40 h-40 rounded-full shadow-lg" src={dish.image} alt=""/>
                <h3 className="mb-userid text-xl font-medium text-gray-900 dark:text-white">{dish.dishName}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{dish.description}</span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                    <button onClick={() => vote(dish.id)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">{voted ? "unvote" : "vote"}</button>
                </div>
            </div>
        </div>
        

    );
};

export default Card;

