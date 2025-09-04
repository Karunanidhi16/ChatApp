import React, {useState} from "react";

const Chatinput = ({message,setMessage,onSendMessage}) => {
    // const [message, setMesssage] = useState('');
    // const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()){
          onSendMessage(message);
            setMesssage('');}
    };


      return (
    <form onSubmit={handleSubmit} className="flex p-4 border-t border-gray-700 bg-gray-800">
          <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-grow p-3 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        className="p-3 bg-blue-600 text-white rounded-r-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Send
      </button>
    </form>
  );
};

export default Chatinput