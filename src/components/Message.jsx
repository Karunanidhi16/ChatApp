import React from "react";

const Message = ({sender,content,isCurrentUser}) => {
    const messageClass = isCurrentUser ? 'bg-blue-600 text-white self-end' : 'bg-gray-700 text-white self-start';

    return (
         <div className={`p-3 rounded-lg max-w-sm mb-2 ${messageClass}`}>
      <div className="font-semibold">{sender}</div>
      <div>{content}</div>
    </div>
    );
};

export default Message;