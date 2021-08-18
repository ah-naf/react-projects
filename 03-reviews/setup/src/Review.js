import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

// Functional Component

// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];

//   const nextPerson = () => {
//     setIndex((index) => {
//       let newIndex = (index + 1) % people.length;
//       return newIndex;
//     });
//   }

//   const prevPerson = () => {
//     setIndex((index) => {
//       let newIndex = ((index - 1) + people.length) % people.length;
//       return newIndex;
//     });
//   }

//   const surpriseMe = () => {
//     setIndex(Math.floor(Math.random() * people.length));
//   }


//   return (
//     <article className="review">
//       <div className="img-container">
//         <img src={image} alt={name} className="person-img" />
//         <span className="quote-icon">
//           <FaQuoteRight />
//         </span>
//       </div>
//       <h4 className="author">{name}</h4>
//       <p className="job">{job}</p>
//       <p className="info">{text}</p>
//       <div className="button-container">
//         <button className="prev-btn" onClick={prevPerson}>
//           <FaChevronLeft />
//         </button>
//         <button className="next-btn" onClick={nextPerson}>
//           <FaChevronRight />
//         </button>
//       </div>
//       <button className="random-btn" onClick={surpriseMe}>surprise me</button>
//     </article>
//   );
// };


// Class Component

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index : 0,
    }
    this.prevPerson = this.prevPerson.bind(this);
    this.nextPerson = this.nextPerson.bind(this);
    this.surpriseMe = this.surpriseMe.bind(this);
  }

  prevPerson() {
    let newIndex = (this.state.index + 1) % people.length;
    this.setState({index:newIndex});
  }

  nextPerson() {
    let newIndex = ((this.state.index - 1) + people.length) % people.length;
    this.setState({index:newIndex});
  }

  surpriseMe() {
    let newIndex = Math.floor(Math.random() * people.length);
    this.setState({index:newIndex});
  }

  render() {
    const { name, job, image, text } = people[this.state.index];
    return (
      <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={this.prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={this.nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={this.surpriseMe}>surprise me</button>
    </article>
    );
  }
}


export default Review;
