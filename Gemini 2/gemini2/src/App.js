import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  console.log(chatHistory, "CHAT HISTORY");

  const surpriseOptions = [
    'What are the latest developments in the ongoing conflict in Ukraine?',
    'What recent breakthroughs have there been in COVID-19 vaccine development or distribution?',
    'How are countries responding to the recent surge in global inflation rates?',
    'What are the main points of the newly announced US infrastructure plan?',
    'Who are the top contenders for the upcoming FIFA World Cup?',
    'What are the latest transfer rumors in the Premier League?',
    'How is the new NBA season shaping up with recent player trades and team changes?',
    'What are the highlights of the recent Olympic Games?',
    'What are the key storylines in this year\'s Tour de France?',
    'What are the latest trends in digital marketing strategies for 2024?',
    'How are brands leveraging TikTok for successful marketing campaigns?',
    'What are the best practices for creating a successful email marketing campaign?',
    'How are companies using AI to enhance their customer service experience?',
    'What is the impact of influencer marketing on consumer behavior?',
    'What are the top challenges facing small businesses in 2024?',
    'How is the remote work trend affecting corporate real estate investments?',
    'What are the recent trends in sustainable business practices?',
    'How are companies adapting to changes in consumer preferences for eco-friendly products?',
    'What are the impacts of rising interest rates on global business investments?'
  ];

  const surprise = () => {
    const random = Math.floor(Math.random() * surpriseOptions.length);
    setValue(surpriseOptions[random]);
  };

  const getResponse = async () => {
    if (!value) {
      setError("Error!!! Please ask a question!");
      return;
    }
    setError(""); // Clear any previous errors

    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch('http://localhost:8000/gemini2', options);
      const data = await response.text();
      console.log(data);
      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        {
          role: "user",
          part: value,
        },
        {
          role: "model",
          part: data,
        },
      ]);

      setValue("");
    } catch (error) {
      console.error(error);
      setError("Something went wrong! Please try again later.");
    }
  };

  const clear = () => {
    setValue("");
    setError("");
    setChatHistory([]);
  };

  const removeAsterisks = (text) => text.replace(/\*/g, '');

  return (
    <div className="app">
      <p className='quntion'>What do you want to know?
        <button className="surprise" onClick={surprise}>Surprise Me!!!</button>
      </p>
      <div className="input-container">
        <input
          value={value}
          placeholder="How Make Coffee At Home?"
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && <button onClick={getResponse} disabled={!chatHistory}>Ask Me</button>}
        {error && <button onClick={clear}>Clear</button>}
      </div>
      {error && <p>{error}</p>}



      <div className="search-result">
        {chatHistory.map((chatItem, _index) => (
          <div key={_index}>
            <p className="answer">{chatItem.role} : {removeAsterisks(chatItem.part)}</p>
          </div>
        ))}
      </div>



    </div>
  );
};

export default App;
