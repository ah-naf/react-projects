import React, { useState } from 'react';


// Function Component
// const Tour = ({ id, image, info, price, name, removeTour }) => {
//   const [readMore, setReadMore] = useState(false);
//   return (
//     <article className="single-tour">
//       <img src={image} alt={name} />
//       <footer>
//         <div className="tour-info">
//           <h4>{name}</h4>
//           <h4 className="tour-price">${price}</h4>
//         </div>
//         <p>
//           {readMore ? info : `${info.substring(0, 200)}...`}
//           <button onClick={() => setReadMore(!readMore)}>
//             {readMore ? "show less" : "read more"}
//           </button>
//         </p>
//         <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
//       </footer>
//     </article>
//   );
// };

// Class Component
class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {readMore: false};
    this.changeReadMore = this.changeReadMore.bind(this);
  }
  changeReadMore() {
    this.setState({readMore: !this.state.readMore});
  }
  render() {
    const {removeTour, tour} = this.props;
    const {id, image, info, price, name} = tour;
    return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {this.state.readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={this.changeReadMore}>
            {this.state.readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>      
    );
  }
}

export default Tour;
