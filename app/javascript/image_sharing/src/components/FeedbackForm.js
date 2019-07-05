import {observer} from "mobx-react";
import React from "react";
import {action} from "mobx";
import feedbackStore from "./feedbackStore";
import Input from "./Input";
import Submit from "./Submit";

@observer(["feedbackStore"])
class FeedbackForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      onClick : props.onClick
    };
  }

  @action onNameChange = (e) => {
    feedbackStore.name = e.target.value;
  }

  @action onCommentChange = (e) => {
    feedbackStore.comment = e.target.value;
  }

  render() {
    return (
      <form>
        <div className="field-list">
          <Input
            title={'Name'}
            name={'name'}
            defaultValue={feedbackStore.name}
            onChange={this.onNameChange}
          />
          <Input
            title={'Comment'}
            name={'comment'}
            defaultValue={feedbackStore.comment}
            onChange={this.onCommentChange}
          />
        </div>
        <Submit onClick={this.state.onClick}/>
      </form>
    );
  }
}

export default FeedbackForm;
