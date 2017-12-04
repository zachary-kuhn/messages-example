import React, { Component, PropTypes } from 'react';

class MessageCreator extends Component {
  static propTypes = {
    create: PropTypes.func
  };

  createMessage(e) {
    e.preventDefault();
    this.props.create(this.refs.content.value);
    this.refs.content.value = '';
  }

  render() {
    return (
      <form className="message-creator" onSubmit={this.createMessage.bind(this)}>
        <textarea className="message-creator__content" ref="content" required={true} />
        <input className="message-creator__post-button" type="submit" value="Post" />
      </form>
    )
  }
}

export default MessageCreator;
