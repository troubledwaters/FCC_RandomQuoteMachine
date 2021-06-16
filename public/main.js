"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var quotes = [{
  quote: 'll be back',
  author: 'Терминатор'
}, {
  quote: 'Хьюстон, у нас проблема',
  author: 'James Arthur Lovell'
}, {
  quote: 'Welcome home, good Hunter. What is it you desire?',
  author: 'The Doll'
}, {
  quote: 'Я в своём познании настолько преисполнился, что как будто бы уже 100 триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, понимаешь?',
  author: 'Идущий к реке'
}];
var colors = ['#917898', '#4c394f', '#79ad9f', '#c49b60', '#acbb7d', '#334500', '#396159', '#396159', '#4e5560', '#866a67', '#8b8da0', '#b19a78', '#9a784a', '#af8d8b', '#2b6684', '#8dc6d9', '#60ccd9'];

var QuoteMachine = /*#__PURE__*/function (_React$Component) {
  _inherits(QuoteMachine, _React$Component);

  var _super = _createSuper(QuoteMachine);

  function QuoteMachine(props) {
    var _this;

    _classCallCheck(this, QuoteMachine);

    _this = _super.call(this, props);
    _this.state = {};
    _this.setRandomQuote = _this.setRandomQuote.bind(_assertThisInitialized(_this));
    _this.setRandomColor = _this.setRandomColor.bind(_assertThisInitialized(_this));
    _this.changeQuote = _this.changeQuote.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(QuoteMachine, [{
    key: "setRandomQuote",
    value: function setRandomQuote() {
      var _this2 = this;

      var cureentQuoteIndex = quotes.findIndex(function (el, i, arr) {
        return el.quote === _this2.state.quote;
      });
      var newQuotes = quotes.slice();
      newQuotes.splice(cureentQuoteIndex, 1);
      var rand = Math.floor(Math.random() * newQuotes.length);
      this.setState({
        quote: newQuotes[rand].quote,
        author: newQuotes[rand].author
      });
      $('#tweet-quote').on("click", function (e) {
        var currentQuote = $('#text').text();
        var currentAuthor = $('#author').text();
        $(this).attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      });
      $('#tumblr-quote').on("click", function (e) {
        var currentQuote = $('#text').text();
        var currentAuthor = $('#author').text();
        $(this).attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=' + currentAuthor + '&content=' + encodeURIComponent(currentQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
      });
    }
  }, {
    key: "setRandomColor",
    value: function setRandomColor() {
      var _this3 = this;

      var cureentColorIndex = colors.findIndex(function (el, i, arr) {
        return el === _this3.state.color;
      });
      var newColors = colors.slice();
      newColors.splice(cureentColorIndex, 1);
      var rand = Math.floor(Math.random() * newColors.length);
      this.setState({
        color: newColors[rand]
      });
    }
  }, {
    key: "changeQuote",
    value: function changeQuote() {
      this.setRandomQuote();
      this.setRandomColor();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.changeQuote();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "container-fluid",
        style: {
          backgroundColor: this.state.color
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "row main-content"
      }, /*#__PURE__*/React.createElement("div", {
        id: "quote-box",
        className: "col-4 align-self-center"
      }, /*#__PURE__*/React.createElement("div", {
        id: "text",
        style: {
          color: this.state.color
        }
      }, this.state.quote), /*#__PURE__*/React.createElement("div", {
        id: "author",
        style: {
          color: this.state.color
        }
      }, "- ", this.state.author), /*#__PURE__*/React.createElement("div", {
        className: "row buttons"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-3 left-buttons"
      }, /*#__PURE__*/React.createElement("a", {
        id: "tweet-quote",
        className: "btn small-button",
        target: "_top",
        style: {
          backgroundColor: this.state.color
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fab fa-twitter"
      })), /*#__PURE__*/React.createElement("a", {
        id: "tumblr-quote",
        className: "btn small-button",
        target: "_blank",
        style: {
          backgroundColor: this.state.color
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fab fa-tumblr"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-9 right-buttons"
      }, /*#__PURE__*/React.createElement("button", {
        id: "new-quote",
        type: "button",
        className: "btn",
        style: {
          backgroundColor: this.state.color
        },
        onClick: this.changeQuote
      }, "New quote"))))));
    }
  }]);

  return QuoteMachine;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(QuoteMachine, null), document.getElementById('root'));