'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_table2.default.defaultProps = _skJs.SK.assign({}, {
  bordered: false,
  defaultExpandAllRows: false,
  expandRowByClick: false,
  indentSize: 15,
  loading: false,
  rowSelection: null,
  showHeader: true,
  size: _Const.SIZE.Default
}, _table2.default.defaultProps, {});

_table2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/table-cn/#Table
  bordered: _propTypes2.default.bool,
  columns: _propTypes2.default.array,
  components: _propTypes2.default.object,
  dataSource: _propTypes2.default.array,
  defaultExpandAllRows: _propTypes2.default.bool,
  defaultExpandedRowKeys: _propTypes2.default.array,
  expandedRowKeys: _propTypes2.default.array,
  expandedRowRender: _propTypes2.default.func,
  expandRowByClick: _propTypes2.default.bool,
  footer: _propTypes2.default.func,
  indentSize: _propTypes2.default.number,
  loading: _propTypes2.default.any, //
  locale: _propTypes2.default.object,
  pagination: _propTypes2.default.object,
  rowClassName: _propTypes2.default.func,
  rowKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  rowSelection: _propTypes2.default.object,
  scroll: _propTypes2.default.object,
  showHeader: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  title: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onExpand: _propTypes2.default.func,
  onExpandedRowsChange: _propTypes2.default.func,
  onHeaderRow: _propTypes2.default.func,
  onRow: _propTypes2.default.func
}, _table2.default.propTypes, {});

var SKTable = function (_AntdComp) {
  _inherits(SKTable, _AntdComp);

  function SKTable() {
    var _ref;

    _classCallCheck(this, SKTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKTable.__proto__ || Object.getPrototypeOf(SKTable)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKTable';
    return _this;
  }

  _createClass(SKTable, [{
    key: 'addExtendChangedMonitor',
    value: function addExtendChangedMonitor() {
      this.addChangedMonitor(this.props.loadingId);
      this.addChangedMonitor(this.props.paginationId);
    }
  }, {
    key: 'rmvExtendChangedMonitor',
    value: function rmvExtendChangedMonitor() {
      this.rmvChangedMonitor(this.props.loadingId);
      this.rmvChangedMonitor(this.props.paginationId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          columns = _props.columns,
          scroll = _props.scroll;


      var tmpScroll = { y: false };
      tmpScroll.x = columns.reduce(function ($sum, $item) {
        return $sum + $item.width;
      }, 0);
      tmpScroll = scroll || tmpScroll;

      return _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), {
        dataSource: this.skVal(),
        loading: this.skModel().skVal(this.props.loadingId),
        pagination: this.skModel().skVal(this.props.paginationId),
        scroll: tmpScroll }));
    }
  }]);

  return SKTable;
}(_AntdComp3.default);

SKTable.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _table2.default.defaultProps, {
  compTag: _table2.default,
  bordered: true,
  loadingId: undefined,
  paginationId: undefined
});
SKTable.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _table2.default.propTypes, {
  loadingId: _propTypes2.default.string.isRequired,
  paginationId: _propTypes2.default.string.isRequired
});
exports.default = SKTable;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvdGFibGUvU0tUYWJsZS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJib3JkZXJlZCIsImRlZmF1bHRFeHBhbmRBbGxSb3dzIiwiZXhwYW5kUm93QnlDbGljayIsImluZGVudFNpemUiLCJsb2FkaW5nIiwicm93U2VsZWN0aW9uIiwic2hvd0hlYWRlciIsInNpemUiLCJEZWZhdWx0IiwicHJvcFR5cGVzIiwiYm9vbCIsImNvbHVtbnMiLCJhcnJheSIsImNvbXBvbmVudHMiLCJvYmplY3QiLCJkYXRhU291cmNlIiwiZGVmYXVsdEV4cGFuZGVkUm93S2V5cyIsImV4cGFuZGVkUm93S2V5cyIsImV4cGFuZGVkUm93UmVuZGVyIiwiZnVuYyIsImZvb3RlciIsIm51bWJlciIsImFueSIsImxvY2FsZSIsInBhZ2luYXRpb24iLCJyb3dDbGFzc05hbWUiLCJyb3dLZXkiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJzY3JvbGwiLCJ0aXRsZSIsIm9uQ2hhbmdlIiwib25FeHBhbmQiLCJvbkV4cGFuZGVkUm93c0NoYW5nZSIsIm9uSGVhZGVyUm93Iiwib25Sb3ciLCJTS1RhYmxlIiwiYXJncyIsImNvbXBOYW1lIiwiYWRkQ2hhbmdlZE1vbml0b3IiLCJwcm9wcyIsImxvYWRpbmdJZCIsInBhZ2luYXRpb25JZCIsInJtdkNoYW5nZWRNb25pdG9yIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0bXBTY3JvbGwiLCJ5IiwieCIsInJlZHVjZSIsIiRzdW0iLCIkaXRlbSIsIndpZHRoIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1ZhbCIsInNrTW9kZWwiLCJ1bmRlZmluZWQiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxnQkFBTUEsWUFBTixHQUFxQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2pDQyxZQUFVLEtBRHVCO0FB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QVdDLFNBQWhDLENBRmxCO0FBR1Msb0JBQVksS0FBS2MsT0FBTCxHQUFlRCxLQUFmLENBQXFCLEtBQUtkLEtBQUwsQ0FBV0UsWUFBaEMsQ0FIckI7QUFJUyxnQkFBUUksU0FKakIsSUFERjtBQU9EOzs7Ozs7QUEzQ2tCVixPLENBQ1p0QyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZ0JBQU1BLFlBQTNDLEVBQXlEO0FBQzdFK0MsMEJBRDZFO0FBRTdFN0MsWUFBVSxJQUZtRTtBQUc3RXlDLGFBQVdlLFNBSGtFO0FBSTdFZCxnQkFBY2M7QUFKK0QsQ0FBekQsQztBQURIcEIsTyxDQU9aM0IsUyxHQUFZLFNBQUdWLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNVLFNBQXZCLEVBQWtDLGdCQUFNQSxTQUF4QyxFQUFtRDtBQUNwRWdDLGFBQVcsb0JBQVViLE1BQVYsQ0FBaUI2QixVQUR3QztBQUVwRWYsZ0JBQWMsb0JBQVVkLE1BQVYsQ0FBaUI2QjtBQUZxQyxDQUFuRCxDO2tCQVBBckIsTyIsImZpbGUiOiJhbnRkL3RhYmxlL1NLVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RhYmxlfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7U0laRX0gZnJvbSAnLi4vLi4vQ29uc3QnO1xuXG5UYWJsZS5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYm9yZGVyZWQ6IGZhbHNlLFxuICBkZWZhdWx0RXhwYW5kQWxsUm93czogZmFsc2UsXG4gIGV4cGFuZFJvd0J5Q2xpY2s6IGZhbHNlLFxuICBpbmRlbnRTaXplOiAxNSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHJvd1NlbGVjdGlvbjogbnVsbCxcbiAgc2hvd0hlYWRlcjogdHJ1ZSxcbiAgc2l6ZTogU0laRS5EZWZhdWx0XG59LCBUYWJsZS5kZWZhdWx0UHJvcHMsIHt9KTtcblxuVGFibGUucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvdGFibGUtY24vI1RhYmxlXG4gIGJvcmRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICBjb21wb25lbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRFeHBhbmRBbGxSb3dzOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZXhwYW5kZWRSb3dSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICBleHBhbmRSb3dCeUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5kZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9hZGluZzogUHJvcFR5cGVzLmFueSwvL1xuICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHBhZ2luYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHJvd0NsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHJvd0tleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuZnVuY1xuICBdKSxcbiAgcm93U2VsZWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzY3JvbGw6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNob3dIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4cGFuZGVkUm93c0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSGVhZGVyUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Sb3c6IFByb3BUeXBlcy5mdW5jXG59LCBUYWJsZS5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tUYWJsZSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBUYWJsZS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBUYWJsZSxcbiAgICBib3JkZXJlZDogdHJ1ZSxcbiAgICBsb2FkaW5nSWQ6IHVuZGVmaW5lZCxcbiAgICBwYWdpbmF0aW9uSWQ6IHVuZGVmaW5lZFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBUYWJsZS5wcm9wVHlwZXMsIHtcbiAgICBsb2FkaW5nSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwYWdpbmF0aW9uSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1RhYmxlJztcbiAgfVxuXG4gIGFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5sb2FkaW5nSWQpO1xuICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uSWQpO1xuICB9XG5cbiAgcm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLmxvYWRpbmdJZCk7XG4gICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLnBhZ2luYXRpb25JZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBjb2x1bW5zLCBzY3JvbGx9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCB0bXBTY3JvbGwgPSB7eTogZmFsc2V9O1xuICAgIHRtcFNjcm9sbC54ID0gY29sdW1ucy5yZWR1Y2UoKCRzdW0sICRpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gJHN1bSArICRpdGVtLndpZHRoO1xuICAgIH0sIDApO1xuICAgIHRtcFNjcm9sbCA9IHNjcm9sbCB8fCB0bXBTY3JvbGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLnNrVmFsKCl9XG4gICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnNrTW9kZWwoKS5za1ZhbCh0aGlzLnByb3BzLmxvYWRpbmdJZCl9XG4gICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt0aGlzLnNrTW9kZWwoKS5za1ZhbCh0aGlzLnByb3BzLnBhZ2luYXRpb25JZCl9XG4gICAgICAgICAgICAgICBzY3JvbGw9e3RtcFNjcm9sbH0vPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==