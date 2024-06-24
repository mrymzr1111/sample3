

import './App.css';
import { useState } from 'react';
import data from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  }

  return (
    <div className='section-center'>
      <h4>Beautiful Lorem</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='total'>Number of paragraphs:</label>
        <input type='number' name='total' value={count} min="1" max={data.length} onChange={(e) => setCount(e.target.value)} />
        <button type='submit'>Create</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </div>
  );
}

export default App;