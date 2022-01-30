const ResultCard = ({dish}) => {    
    return (
        <div className="text-center p-5 hover:drop-shadow-lg m-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <div className="flex flex-col justify-center items-center hover:cursor-pointer">
                <img className="mb-3 w-40 h-40 rounded-full shadow-lg" src={dish.image} alt=""/>
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{dish.dishName}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{dish.description}</span>
                <h4 className="mb-1 m-4 text-xl font-medium text-gray-700 dark:text-white">Points : {dish.TotalPoints}</h4>
                
            </div>
        </div>
        

    );
};

export default ResultCard;

