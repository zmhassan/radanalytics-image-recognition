import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class ButtonComponent extends Component{

  constructor(props){
    super(props);
    this.openModel = this.openModel.bind(this);
  }

  openModel(){
    this.props.toggleModal();
  }

  render(){
    return (
      <div className="pointer" onClick={this.openModel}>
        {this.props.content}
      </div>
    );
  }
}

// Ensure that the toggleModal is the same that is passed to
// ModalComponentDialog
ButtonComponent.propTypes = {
  toggleModal: PropTypes.func,
  mid: PropTypes.string,
  content: PropTypes.element
};

export default ButtonComponent;

