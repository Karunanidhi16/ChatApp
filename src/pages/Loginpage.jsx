import React from 'react'

const Loginpage = () => {
    return(
        <div className="flex items-center justify-center min-h-screen bg-red-800">
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
                    <form>
                        <div className="mb-4">
                            <input type="text"
                            placeholder="username"
                            className='w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        </div>
                        <div className="mb-6">
                            <input type="password" 
                             placeholder="Password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
                        </div>
                        <button 
                        type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >sign in</button>
                    </form>
             
            </div>
        </div>
    );
};
export default Loginpage