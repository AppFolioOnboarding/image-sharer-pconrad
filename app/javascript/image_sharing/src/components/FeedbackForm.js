import {observer} from "mobx-react";
import React from "react";
import {action} from "mobx";
import FeedbackStore from "./FeedbackStore";
import Input from "./Input";
import Submit from "./Submit";

@observer(["FeedbackStore"])
class FeedbackForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      onClick : props.onClick
    };
  }

  @action onNameChange = (e) => {
    FeedbackStore.name = e.target.value;
  }

  @action onCommentChange = (e) => {
    FeedbackStore.comment = e.target.value;
  }

  render() {
    return (
      <form>
        <div className="field-list">
          <Input
            title={'Name'}
            name={'name'}
            defaultValue={FeedbackStore.name}
            onChange={this.onNameChange}
          />
          <Input
            title={'Comment'}
            name={'comment'}
            defaultValue={FeedbackStore.comment}
            onChange={this.onCommentChange}
          />
        </div>
        <Submit onClick={this.state.onClick}/>
      </form>
    );
  }
}

export default FeedbackForm;
