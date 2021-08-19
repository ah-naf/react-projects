import React, { useState } from 'react';
import data from './data';

// Functional Component

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(count <= 0) {
      setText(data);
    } else {
      let newText = [];
      console.log(data);
      for(let i=0; i<Math.min(count,100); i++) {
        newText.push(data[Math.floor(Math.random() * data.length)]);

      }
      setText(newText);
    }
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count}
        onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="btn" >generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item,index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
