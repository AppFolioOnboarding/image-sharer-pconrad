import React from "react";

class Submit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      onClick : props.onClick
    };
    console.log("Feedback Form Props:")
    console.log(props)
  }

  render() {
    return (
      <div className="submit">
        <input value="Submit"  type="submit"  onClick={this.state.onClick}/>
      </div>
    );
  }
}

export default Submit;
