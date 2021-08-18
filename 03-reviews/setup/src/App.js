import React from 'react';
import Review from './Review';

// Functional Component

// function App() {
//   return (
//     <main>
//       <section className="container">
//         <div className="title">
//           <h2>our reviews</h2>
//           <div className="underline"></div>
//         </div>
//         <Review />
//       </section>
//     </main>
//   );
// }

// Class Component
class App extends React.Component {
  render() {
    return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>      
    );
  }
}

export default App;
