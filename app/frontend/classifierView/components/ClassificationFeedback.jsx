import React, { Component } from "react";
import ModalComponentDialog from '../../pf-lib/modal/containers/ModalWindow.jsx'
import PropTypes from "prop-types";
import { MODALS } from '../../configs.jsx';

class ClassificationFeedback extends Component {
  static get propTypes() {
    return {
      imageFile: PropTypes.object,
      setSelectedOption: PropTypes.func,
      selectedOption: PropTypes.number,
      handleFeedBackPOST: PropTypes.func,
    }
  }

  constructor(){
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleFormSubmit(e){
    this.props.handleFeedBackPOST(e, this.props.selectedOption, this.props.imageFile);
  }

  handleOptionChange(e){
    this.props.setSelectedOption(Number.parseInt(e.target.value));
  }

  createModalFooter(){
    return (
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleFormSubmit}>Save</button>
      </div>
    )
  }

  createModalContent(){
    return (
      <div>
        <p> Please rate the accuracy of the results! </p>
        <form onSubmit={this.handleFormSubmit}>
          <div className="radio">
            <label>
              <input type="radio" value={1}
                     checked={this.props.selectedOption === 1}
                     onChange={this.handleOptionChange} />
              Top Choice
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value={2}
                     checked={this.props.selectedOption === 2}
                     onChange={this.handleOptionChange}/>
              Within the top 5 choices
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value={3}
                     checked={this.props.selectedOption === 3}
                     onChange={this.handleOptionChange}/>
              None of the above!
            </label>
          </div>
        </form>
      </div>
    );
  }

  render() {
    let content = this.createModalContent();
    return (
      <ModalComponentDialog
        mid={MODALS.FEEDBACK_MODAL}
        modalTitle={"Classification Feedback"}
        modalContent={content}
        modalFooter={this.createModalFooter()}/>
    );
  }
}

export default ClassificationFeedback;

