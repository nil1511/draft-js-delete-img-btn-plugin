'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decorateComponentWithProps = require('decorate-component-with-props');

var _decorateComponentWithProps2 = _interopRequireDefault(_decorateComponentWithProps);

var _createDecorator = require('./createDecorator');

var _createDecorator2 = _interopRequireDefault(_createDecorator);

var _DeleteImageBtn = require('./DeleteImageBtn');

var _DeleteImageBtn2 = _interopRequireDefault(_DeleteImageBtn);

var _createStore = require('./utils/createStore');

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _createStore2.default)({ isVisible: false });

exports.default = function (config) {
  return {
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;

      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    decorator: (0, _createDecorator2.default)({ config: config, store: store }),
    DeleteImgBtn: (0, _decorateComponentWithProps2.default)(_DeleteImageBtn2.default, { store: store })
  };
};