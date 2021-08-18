import React from 'react';


// Functional Component

// const Categories = ({categories, filterItems }) => {
//   return (
//     <div className="btn-container">
//       {
//         categories.map((category, index) => {
//           return <button className="filter-btn" key={index} type="button"
//           onClick={() => filterItems(category)} >{category}</button>
//         })
//       }
//     </div>
//   );
// };



// Class Component

class Categories extends React.Component {
  render() {
    return (
      <div className="btn-container">
        {
          this.props.categories.map((category, index) => {
            return <button className="filter-btn" key={index} type="button"
            onClick={() => this.props.filterItems(category)} >{category}</button>
          })
        }
      </div>      
    );
  }
}

export default Categories;
