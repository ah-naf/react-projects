import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

// Function Component
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [tours, setTours] = useState([]);

//   const removeTour = (id) => {
//     const newTours = tours.filter((tour) => tour.id !== id);
//     setTours(newTours);
//   }

//   const fetchTours = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const tours = await response.json();
//       setLoading(false);
//       setTours(tours);
//     }catch(error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchTours();
//   }, [])

//   if (loading) {
//     return (
//       <main>
//         <Loading />
//       </main>
//     );
//   }
//   if(tours.length === 0) {
//     return <main>
//       <div className="title">
//         <h2>no toure left</h2>
//         <button className='btn' onClick={() => fetchTours()}>refresh</button>
//       </div>
//     </main>
//   }
//   return <main>
//     <Tours tours={tours} removeTour={removeTour} />
//   </main>;
// }

// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tours: [],
    };
    this.fetchTours = this.fetchTours.bind(this);
    this.removeTour = this.removeTour.bind(this);
  }
  removeTour(id) {
    const tours = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({ tours: tours });
  }
  async fetchTours() {
    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ loading: false });
    this.setState({ tours: data });
  }
  componentDidMount() {
    this.fetchTours();
  }
  render() {
    if (this.state.loading) {
      return (
        <main>
          <Loading />
        </main>
      );
    }
    if (this.state.tours.length === 0) {
      return (
        <main>
          <div className="title">
            <h2>no toure left</h2>
            <button className="btn" onClick={this.fetchTours}>
              refresh
            </button>
          </div>
        </main>
      );
    }
    return (
      <main>
        <Tours tours={this.state.tours} removeTour={this.removeTour} />
      </main>
    );
  }
}

export default App;
