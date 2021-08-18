import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories =['all', ...new Set(items.map((item) => item.category))];

// Functional Component

// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     if(category === 'all') {
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   }

//   return <main>
//     <section className="menu section">
//       <div className="title">
//         <h2>our menu</h2>
//         <div className="underline"></div>
//       </div>
//       <Categories categories={categories} filterItems={filterItems} />
//       <Menu items={menuItems} />
//     </section>
//   </main>;
// }



// Class Component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: items,
      categories: allCategories,
    };
    this.filterItems = this.filterItems.bind(this);
  }

  filterItems(category) {
    if(category === 'all') {
      this.setState({menuItems: items});
      return ;
    }
    const newItems = items.filter((item) => item.category === category);
    this.setState({menuItems: newItems});
  }

  render() {
    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={this.state.categories} filterItems={this.filterItems} />
          <Menu items={this.state.menuItems} />
        </section>
      </main>   
    );
  }
}

export default App;
