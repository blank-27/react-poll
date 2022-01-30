import { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();

const Login = ({LogIn}) => {
    // console.log(errors);

    const { register, handleSubmit, formState: { e } } = useForm();
    const onSubmit = (data,e) => {
        // console.log(data);
        // e.preventDefault();
        LogIn(data);
    }




    return (
        <div className="container flex justify-center m-auto mt-10">
            <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Username</label>
                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required {...register("username", {})} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password"  id="password"  placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required  {...register("password", {})}/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
