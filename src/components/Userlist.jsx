import React from "react";

const users = [
    {id:2, name:'kannu', status:'Online'},
    {id:1, name:'Shaa', status:'Offline'},
    {id:3, name:'a', status:'Offline'},

]

const Userlist = ({selectedUser,onUserClick}) => {
    return(
    <div className="bg-gray-800 text-white w-1/4 p-4 rounded-l-lg overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}
              onClick={() => onUserClick(user)} className={`flex items-center p-2 mb-2 rounded-lg cursor-pointer ${selectedUser && selectedUser.id === user.id ? 'bg-gray-700' :  'hover:bg-gray-700'}`}>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-lg font-semibold">{user.name.charAt(0)}</span>
            </div>
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className={`text-sm ${user.status === 'Online' ? 'text-green-400' : 'text-gray-400'}`}>
                {user.status}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default Userlist