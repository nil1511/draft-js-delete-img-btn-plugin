import decorateComponentWithProps from 'decorate-component-with-props';
import createDecorator from './createDecorator';
import DeleteImageBtn from './DeleteImageBtn';
import createStore from './utils/createStore';

const store = createStore({ isVisible: false });

export default (config) => ({
  initialize: ({ getEditorState, setEditorState }) => {
    store.updateItem('getEditorState', getEditorState);
    store.updateItem('setEditorState', setEditorState);
  },
  decorator: createDecorator({ config, store }),
  DeleteImgBtn: decorateComponentWithProps(DeleteImageBtn, { store }),
});
