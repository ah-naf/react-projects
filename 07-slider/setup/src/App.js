import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

// Functional Component

// function App() {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if(index < 0) {
//       setIndex(lastIndex);
//     }
//     if(index > lastIndex) {
//       setIndex(0);
//     }
//   },[index,people])

//   return (
//     <section className="section">
//       <div className="title">
//         <h2>
//           <span>/</span>reviews
//         </h2>
//       </div>
//       <div className="section-center">
//         {people.map((person, personIndex) => {
//           const { id, image, name, title, quote } = person;
//           // more stuff
//           let position = "nextSlide";
//           if (personIndex === index) {
//             position = "activeSlide";
//           }
//           if(personIndex === index-1 || (index === 0 && personIndex === people.length-1)) {
//             position = 'lastSlide';
//           }
//           return (
//             <article className={position} key={id}>
//               <img src={image} alt={name} className="person-img" />
//               <h4>{name}</h4>
//               <p className="title">{title}</p>
//               <p className="text">{quote}</p>
//               <FaQuoteRight className="icon" />
//             </article>
//           );
//         })}
//         <button className="prev" onClick={() => setIndex(index-1)}>
//           <FiChevronLeft />
//         </button>
//         <button className="next" onClick={() => setIndex(index+1)}>
//           <FiChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }


// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
      index: 0,
    };
  }

  componentDidUpdate(prevState) {
    if(this.state.index < 0) {
      this.setState({index: this.state.people.length-1});
    }
    if(this.state.index >= this.state.people.length) {
      this.setState({index: 0});
    }
  }

  render() {
    return (
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          {this.state.people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            // more stuff
            let position = "nextSlide";
            if (personIndex === this.state.index) {
              position = "activeSlide";
            }
            if(personIndex === this.state.index-1 || (this.state.index === 0 && personIndex === this.state.people.length-1)) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => this.setState({index:this.state.index-1})}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => this.setState({index:this.state.index+1})}>
            <FiChevronRight />
          </button>
        </div>
      </section>      
    );
  }
}

export default App;
