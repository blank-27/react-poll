import axios from 'axios';
import React, {useLayoutEffect,useState} from 'react';


const Card = ({dish}) => {


    useLayoutEffect(() => {
        voted();
    })
    
    const [votedb,setVotedb] = useState(false); 
    //dishid passed
    const voted = () => {
        if(parseInt(localStorage.getItem('first')) !==dish.id){
            if(parseInt(localStorage.getItem('second'))!==dish.id){
                if(parseInt(localStorage.getItem('third'))!==dish.id){
                    setVotedb(false);
                }else{
                    setVotedb(true);
                }
            }else{
                setVotedb(true);
            }
        }else{
            setVotedb(true);
        }
    }
    

    const vote = (id)=>{

        // To check whom we have voted with rank
        if(localStorage.getItem('first') &&  localStorage.getItem('first')!=="null"){
            if(localStorage.getItem('second') &&  localStorage.getItem('second')!=="null"){
                if(localStorage.getItem('third') &&  localStorage.getItem('third')!=="null"){
                    alert("You have reached the limit of 3 votes");
                }else{
                    localStorage.setItem('third',id);
                    dish.TotalPoints+=10;                   
                }
            }else{
                localStorage.setItem('second',id);
                dish.TotalPoints+=20;
            }
        }else{
            localStorage.setItem('first',id);
            dish.TotalPoints+=30;
        }
        https://raw.githubusercontent.com/blank-27/react-poll/main/db.json
        axios.put(`http://localhost:5001/dishes/${id}`,{...dish});
        voted();
    }

    const unVote = (id) => {
        if(parseInt(localStorage.getItem('first')) !==id){
            if(parseInt(localStorage.getItem('second'))!==id){
                if(parseInt(localStorage.getItem('third'))!==id){
                    alert("You have not voted this");
                }else{
                    localStorage.setItem('third',null);
                    dish.TotalPoints-=10;
                    
                }
            }else{
                localStorage.setItem('second',null);
                dish.TotalPoints-=20;
            }
        }else{
            localStorage.setItem('first',null);
            dish.TotalPoints-=30;
        }
        axios.put(`http://localhost:5001/dishes/${id}`,{...dish});
        voted();
    }

    



    return (
        <div className="text-center p-5 hover:drop-shadow-lg m-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <div className="flex flex-col justify-center items-center">
                <img className="mb-3 w-40 h-40 rounded-full shadow-lg" src={dish.image} alt=""/>
                <h3 className="mb-userid text-xl font-medium text-gray-900 dark:text-white">{dish.dishName}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{dish.description}</span>
                <div className="flex mt-4 space-x-3 lg:mt-6">

                    {votedb ? 
                    <button onClick={() => unVote(dish.id)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Unvote</button> : <button onClick={() => vote(dish.id)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Vote</button>}

                    
                </div>
            </div>
        </div>
        

    );
};

export default Card;

