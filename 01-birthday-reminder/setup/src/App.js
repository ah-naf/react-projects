import React, { useState } from 'react';
import data from './data';
import List from './List';

// Function Component
// function App() {
//   const [people, setPeople] = useState(data);
//   return (
//     <main>
//       <section className="container">
//         <h3>{people.length} birthdays tody</h3>
//         <List people={people} />
//         <button onClick={() => setPeople([])}>Clear All</button>
//       </section>
//     </main>
//   );
// }

// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    }
    this.clearAll = this.clearAll.bind(this);
  }
  clearAll() {
    this.setState({people: []});
  }
  render() {
    return (
      <main>
        <section className="container">
          <h3>
          {
            this.state.people.length === 0 ? '0 birthday today' : this.state.people.length + ' birthdays today'
          }
          </h3>
          <List people={this.state.people} />
          <button onClick={this.clearAll}>Clear All</button>
        </section>
      </main>
    )
  }
}

export default App;
