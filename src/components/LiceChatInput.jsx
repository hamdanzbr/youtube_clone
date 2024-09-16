import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const LiveChatInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (message.trim() === '') return; // Avoid sending empty messages

    dispatch(addMessage({
      id: Date.now(), // Use timestamp as a unique ID
      authorDetails: {
        profileImageUrl: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid',
        displayName: 'Hamdan',
      },
      snippet: {
        displayMessage: message,
      },
    }));

    setMessage(''); // Clear the input field after sending
  };

  return (
    <form className="py-4 bg-gray-800 flex" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1  rounded-lg bg-gray-700 text-white"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="button"
        className=" bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={handleButtonClick}
      >
        Send
      </button>
    </form>
  );
};

export default LiveChatInput;
