'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _deleteImgBtn = {
  "deleteImgBtn": "draftJsEmojiPlugin__deleteImgBtn__3zodG"
};

var _deleteImgBtn2 = _interopRequireDefault(_deleteImgBtn);

var _removeBlock = require('../utils/removeBlock');

var _removeBlock2 = _interopRequireDefault(_removeBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO make toolbarHeight to be determined or a parameter
var toolbarHeight = 44;

var DeleteImageBtn = function (_React$Component) {
  _inherits(DeleteImageBtn, _React$Component);

  function DeleteImageBtn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DeleteImageBtn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteImageBtn.__proto__ || Object.getPrototypeOf(DeleteImageBtn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      position: {}
    }, _this.onVisibilityChanged = function (visibleBlock) {
      var boundingRect = _this.props.store.getItem('boundingRect');
      var position = visibleBlock ? {
        top: boundingRect.height + boundingRect.top - toolbarHeight * 1.25,
        left: (boundingRect.left + boundingRect.width - toolbarHeight * 0.5) / 2,
        transform: 'translate(-50%) scale(1)',
        transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)'
      } : { transform: 'translate(-50%) scale(0)' };

      _this.setState({ position: position });
    }, _this.deleteImage = function (event) {
      event.stopPropagation();
      var getEditorState = _this.props.store.getItem('getEditorState');
      var setEditorState = _this.props.store.getItem('setEditorState');
      var editorState = getEditorState();
      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();
      var newContentState = (0, _removeBlock2.default)(contentState, selectionState.focusKey);
      setEditorState(_draftJs.EditorState.push(editorState, newContentState, 'delete-character'));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DeleteImageBtn, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.store.subscribeToItem('visibleBlock', this.onVisibilityChanged);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unsubscribeFromItem('visibleBlock', this.onVisibilityChanged);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: _deleteImgBtn2.default.deleteImgBtn,
          style: this.state.position,
          onClick: this.deleteImage
        },
        _react2.default.createElement(
          'svg',
          { height: '24', viewBox: '0 0 59 59', width: '24', xmlns: 'http://www.w3.org/2000/svg', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', style: { enableBackground: 'new 0 0 59 59' } },
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M29.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C28.5,50.553,28.948,51,29.5,51z', style: { fill: 'rgb(0, 0, 0)' } }),
            _react2.default.createElement('path', { d: 'M19.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C18.5,50.553,18.948,51,19.5,51z', style: { fill: 'rgb(0, 0, 0)' } }),
            _react2.default.createElement('path', { d: 'M39.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C38.5,50.553,38.948,51,39.5,51z', style: { fill: 'rgb(0, 0, 0)' } }),
            _react2.default.createElement('path', { d: 'M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289   C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h2.041l1.915,46.021C10.493,55.743,11.565,59,15.364,59   h28.272c3.799,0,4.871-3.257,4.907-4.958L50.459,8H52.5c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681   C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553   C20.665,4.952,20.988,3.504,21.792,2.681z M46.544,53.979C46.538,54.288,46.4,57,43.636,57H15.364   c-2.734,0-2.898-2.717-2.909-3.042L10.542,8h37.915L46.544,53.979z', style: { fill: 'rgb(0, 0, 0)' } })
          )
        )
      );
    }
  }]);

  return DeleteImageBtn;
}(_react2.default.Component);

exports.default = DeleteImageBtn;