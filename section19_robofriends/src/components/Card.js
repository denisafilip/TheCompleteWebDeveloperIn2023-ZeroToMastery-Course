import React, {Fragment} from 'react';

const Card = ({ id, name, email}) => {
    return (
        <Fragment>
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-100 h-100 mb-3 rounded-full shadow-lg" src={`https://robohash.org/${id}?200x200`} alt="profile"/>
                    <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
                    {/*<div className="flex mt-4 space-x-3 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                    </div>*/}
                 </div>
            </div>
        </Fragment>
    );
}

export default Card;