import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const LiveChatMessages = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  if (!chatMessages) return null;

  return (
    <div className="p-4">
      <h2 className="text-white font-bold text-lg">Live Chat</h2>
      <div
        ref={chatContainerRef}
        className="flex flex-col overflow-y-auto h-[65vh] mt-4 space-y-4"
      >
        {chatMessages.map((message) => (
          <div key={message.id} className="flex">
            <img
              className="w-8 h-8 rounded-full"
              src={message.authorDetails.profileImageUrl}
              alt="User Avatar"
            />
            <div className="ml-2">
              <p className="text-white font-bold">{message.authorDetails.displayName}</p>
              <p className="text-gray-300">{message.snippet.displayMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveChatMessages;
