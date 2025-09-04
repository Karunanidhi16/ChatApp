// import React, { useState } from 'react';
// import Userlist from '../components/Userlist.jsx';
// import Chatinput from '../components/Chatinput.jsx';
// import Message from '../components/Message.jsx';

// const ChatPage = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: '', content: 'hello', isCurrentUser: false },
//     { id: 2, sender: 'You', content: 'hiiiii', isCurrentUser: true },
//   ]);

//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState(''); // New state for the message input field

//   // Function to handle sending a new message
//   const handleSendMessage = (messageContent) => {
//     if (selectedUser) {
//       const newMessage = {
//         id: messages.length + 1,
//         sender: 'You',
//         content: messageContent,
//         isCurrentUser: true,
//       };
//       setMessages([...messages, newMessage]);
//       // The backend logic will go here later
//     } else {
//       alert('Please select a user to chat with.');
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Passing props to Userlist */}
//       <Userlist selectedUser={selectedUser} onUserClick={setSelectedUser} />
//       <div className="flex flex-col flex-grow p-4">
//         {/* Dynamic Chat header: This will change based on the selected user */}
//         {selectedUser ? (
//           <div className="bg-gray-800 p-4 rounded-t-lg shadow-md flex items-center mb-4">
//             <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
//             <h1 className="text-xl font-bold">{selectedUser.name}</h1>
//           </div>
//         ) : (
//           <div className="bg-gray-800 p-4 rounded-t-lg shadow-md flex items-center mb-4">
//             <h1 className="text-xl font-bold">Select a user to chat</h1>
//           </div>
//         )}

//         {/* Message area */}
//         <div className="flex-grow overflow-y-auto space-y-4">
//           {messages.map((message) => (
//             <Message
//               key={message.id}
//               sender={message.sender}
//               content={message.content}
//               isCurrentUser={message.isCurrentUser}
//             />
//           ))}
//         </div>

//         {/* Passing props to Chatinput to make it functional */}
//         <Chatinput
//           message={message}
//           setMessage={setMessage}
//           onSendMessage={handleSendMessage}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChatPage;
import React, { useState, useEffect } from 'react';
import Userlist from '../components/Userlist.jsx';
import Chatinput from '../components/Chatinput.jsx';
import Message from '../components/Message.jsx';

const ChatPage = () => {
  // Messages state starts as an empty array.
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');

  // This hook runs every time `selectedUser` changes.
  useEffect(() => {
    if (selectedUser) {
      // Simulate fetching chat history for the selected user.
      const userMessages = [
        { id: 1, sender: selectedUser.name, content: 'hello', isCurrentUser: false },
        { id: 2, sender: 'You', content: 'hiiii', isCurrentUser: true },
        
      ];
      setMessages(userMessages);
    } else {
      // If no user is selected, clear the chat area
      setMessages([]);
    }
  }, [selectedUser]); // The dependency array ensures this effect only runs when selectedUser changes.

  const handleSendMessage = (messageContent) => {
    if (selectedUser) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You', // Sender is always 'You' for outgoing messages
        content: messageContent,
        isCurrentUser: true,
      };
      setMessages([...messages, newMessage]);
    } else {
      alert('Please select a user to chat with.');
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Userlist selectedUser={selectedUser} onUserClick={setSelectedUser} />
      <div className="flex flex-col flex-grow p-4">
        {selectedUser ? (
          <div className="bg-gray-800 p-4 rounded-t-lg shadow-md flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
            <h1 className="text-xl font-bold">{selectedUser.name}</h1>
          </div>
        ) : (
          <div className="bg-gray-800 p-4 rounded-t-lg shadow-md flex items-center mb-4">
            <h1 className="text-xl font-bold">Select a user to chat</h1>
          </div>
        )}

        <div className="flex-grow overflow-y-auto space-y-4">
          {messages.map((message) => (
            <Message
              key={message.id}
              sender={message.sender}
              content={message.content}
              isCurrentUser={message.isCurrentUser}
            />
          ))}
        </div>

        <Chatinput
          message={message}
          setMessage={setMessage}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatPage;