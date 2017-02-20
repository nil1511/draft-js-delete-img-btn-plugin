import React from 'react';
import { EditorState } from 'draft-js';
import styles from '../deleteImgBtn.css';
import removeBlock from '../utils/removeBlock';

// TODO make toolbarHeight to be determined or a parameter
const toolbarHeight = 44;

export default class DeleteImageBtn extends React.Component {

  state = {
    position: {},
  }

  componentWillMount() {
    this.props.store.subscribeToItem('visibleBlock', this.onVisibilityChanged);
  }

  componentWillUnmount() {
    this.props.store.unsubscribeFromItem('visibleBlock', this.onVisibilityChanged);
  }

  onVisibilityChanged = (visibleBlock) => {
    const boundingRect = this.props.store.getItem('boundingRect');
    const position = visibleBlock ? {
      top: (boundingRect.height + boundingRect.top + window.scrollY) - toolbarHeight,
      left: boundingRect.left + window.scrollX + (boundingRect.width / 2),
      transform: 'translate(-50%) scale(1)',
      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
    } : { transform: 'translate(-50%) scale(0)' };

    this.setState({ position });
  }

  deleteImage = (event) => {
    event.stopPropagation();
    const getEditorState = this.props.store.getItem('getEditorState');
    const setEditorState = this.props.store.getItem('setEditorState');
    const editorState = getEditorState();
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = removeBlock(contentState, selectionState.focusKey);
    setEditorState(EditorState.push(editorState, newContentState, 'delete-character'));
  }

  render() {
    return (
      <div
        className={styles.deleteImgBtn}
        style={this.state.position}
        onClick={this.deleteImage}
      >
        <svg height="24" viewBox="0 0 59 59" width="24" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" style={{ enableBackground: 'new 0 0 59 59' }}>
          <g>
            <path d="M29.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C28.5,50.553,28.948,51,29.5,51z" style={{ fill: 'rgb(0, 0, 0)' }} />
            <path d="M19.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C18.5,50.553,18.948,51,19.5,51z" style={{ fill: 'rgb(0, 0, 0)' }} />
            <path d="M39.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C38.5,50.553,38.948,51,39.5,51z" style={{ fill: 'rgb(0, 0, 0)' }} />
            <path d="M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289   C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h2.041l1.915,46.021C10.493,55.743,11.565,59,15.364,59   h28.272c3.799,0,4.871-3.257,4.907-4.958L50.459,8H52.5c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681   C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553   C20.665,4.952,20.988,3.504,21.792,2.681z M46.544,53.979C46.538,54.288,46.4,57,43.636,57H15.364   c-2.734,0-2.898-2.717-2.909-3.042L10.542,8h37.915L46.544,53.979z" style={{ fill: 'rgb(0, 0, 0)' }} />
          </g>
        </svg>
      </div>
    );
  }
}
