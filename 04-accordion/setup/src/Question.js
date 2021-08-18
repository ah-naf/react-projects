import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Functional Component

// const Question = ({title, info}) => {
//   const [showInfo, setShowInfo] = useState(false);

//   return <article className="question">
//     <header>
//       <h4>{title}</h4>
//       <button className="btn" onClick={() => setShowInfo(!showInfo)}>
//         {showInfo ? <AiOutlineMinus/>:<AiOutlinePlus/>}
//       </button>
//     </header>
//     {showInfo && <p>{info}</p>}
//   </article>;
// };

// Class Component

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: false };
    this.change = this.change.bind(this);
  }
  change() {
    let val = !this.state.showInfo;
    this.setState({ showInfo: val });
  }
  render() {
    const { title, info } = this.props.question;
    return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={this.change}>
            {this.state.showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {this.state.showInfo && <p>{info}</p>}
      </article>
    );
  }
}

export default Question;
