import React from 'react';
import Tour from './Tour';

// Function Component
// const Tours = ({ tours, removeTour }) => {
//   return (
//     <section>
//       <div className="title">
//         <h2>our tours</h2>
//         <div className="underline"></div>
//       </div>
//       <div>
//         {tours.map((tour) => {
//           return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
//         })}
//       </div>
//     </section>
//   );
// };

// Class Component
class Tours extends React.Component {
  render() {
    const {tours, removeTour} = this.props;
    return (
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} removeTour={removeTour}/>;
          })}
        </div>
      </section>
    );
  }
}

export default Tours;
