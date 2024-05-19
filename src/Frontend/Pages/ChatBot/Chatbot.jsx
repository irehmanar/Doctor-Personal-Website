import axios from 'axios';
import { useState } from 'react';
import './Chatbot.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Navbar from '../../Components/Navbar/Navbar'
function Chatbot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [showHeading, setShowHeading] = useState(true); // State variable to manage heading display

  async function generateAnswer() {
    setAnswer("Loading...");
    try {
      const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD7rSksN9lWtkqaDER3vcT50dPbEUYg5Ys", {
        contents: [
          { parts: [{ text: question }] }
        ]
      });
      const strippedAnswer = response.data.candidates[0].content.parts[0].text.replace(/\*/g, ''); // Remove asterisks from the response
      setAnswer(strippedAnswer);
      setShowHeading(false); // Hide heading after receiving an answer
    } catch (error) {
      console.error("Error fetching answer:", error);
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.target.blur(); // Remove focus from the textarea
      generateAnswer();
    }
  }

  return (
    <>
    <Navbar/>
    <div className="chatbot">
      
    <div class="section-title">
          <h2>ChatBot</h2>
          <p>Your Medical Chatbot</p>
        </div>
      <div className="chat">
        <div className="message patient-message">
          <p className="text">Hello Doctor, I have a question...</p>
        </div>
        <div className="message doctor-message">
          <p className="text">Sure, go ahead and ask.</p>
        </div>
        {/* Display previous messages here */}
      </div>
      <div className="input">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress} // Call handleKeyPress function when Enter key is pressed
          placeholder="Type your question here..."
        ></textarea>
        <button onClick={generateAnswer}><ArrowUpwardIcon/></button>
      </div>
      <div className="answer-container">
        {answer && <p className="answer">{answer}</p>}
      </div>
    </div>
    </>
  );
}

export default Chatbot;
