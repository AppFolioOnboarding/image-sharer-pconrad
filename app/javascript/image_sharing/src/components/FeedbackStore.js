import React from "react";
import {observable} from 'mobx'

class FeedbackStore extends React.Component {
  @observable name = 'enter name';
  @observable comment = 'enter comment';
}
