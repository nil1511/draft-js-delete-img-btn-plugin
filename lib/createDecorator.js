'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDisplayName = function getDisplayName(WrappedComponent) {
  var component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

exports.default = function (_ref) {
  var store = _ref.store;
  return function (WrappedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(BlockDeleteImg, _Component);

      function BlockDeleteImg() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, BlockDeleteImg);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = BlockDeleteImg.__proto__ || Object.getPrototypeOf(BlockDeleteImg)).call.apply(_ref2, [this].concat(args))), _this), _this.componentDidUpdate = function () {
          if (_this.props.blockProps.isFocused && _this.props.blockProps.isCollapsedSelection) {
            // TODO figure out if and how to achieve this without fetching the DOM node
            // eslint-disable-next-line react/no-find-dom-node
            var blockNode = _reactDom2.default.findDOMNode(_this);
            var boundingRectReletiveToParent = {
              top: blockNode.offsetTop,
              left: blockNode.offsetLeft,
              width: blockNode.offsetWidth,
              height: blockNode.offsetHeight
            };
            store.updateItem('boundingRect', boundingRectReletiveToParent);
            store.updateItem('visibleBlock', _this.props.block.getKey());
            // Only set visibleBlock to null in case it's the current one. This is important
            // in case the focus directly switches from one block to the other. Then the
            // Alignment tool should not be hidden, but just moved.
          } else if (store.getItem('visibleBlock') === _this.props.block.getKey()) {
            store.updateItem('visibleBlock', null);
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(BlockDeleteImg, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          store.updateItem('visibleBlock', null);
        }
      }, {
        key: 'render',
        value: function render() {
          var elementProps = _objectWithoutProperties(this.props, []);

          return _react2.default.createElement(WrappedComponent, elementProps);
        }
      }]);

      return BlockDeleteImg;
    }(_react.Component), _class.displayName = 'BlockDeleteImg(' + getDisplayName(WrappedComponent) + ')', _class.WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent, _temp2;
  };
};