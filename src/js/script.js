const quotes = [
    { quote: 'll be back', author: 'Терминатор' },
    { quote: 'Хьюстон, у нас проблема', author: 'James Arthur Lovell' },
    { quote: 'Welcome home, good Hunter. What is it you desire?', author: 'The Doll' },
    { quote: 'Я в своём познании настолько преисполнился, что как будто бы уже 100 триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, понимаешь?', author: 'Идущий к реке' },
];

const colors = [
    '#917898',
    '#4c394f',
    '#79ad9f',
    '#c49b60',
    '#acbb7d',
    '#334500',
    '#396159',
    '#396159',
    '#4e5560',
    '#866a67',
    '#8b8da0',
    '#b19a78',
    '#9a784a',
    '#af8d8b',
    '#2b6684',
    '#8dc6d9',
    '#60ccd9',
];

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setRandomQuote = this.setRandomQuote.bind(this);
        this.setRandomColor = this.setRandomColor.bind(this);
        this.changeQuote = this.changeQuote.bind(this);
    }
    setRandomQuote() {
        let cureentQuoteIndex = quotes.findIndex((el, i, arr) => {
            return el.quote === this.state.quote
        });
        let newQuotes = quotes.slice();
        newQuotes.splice(cureentQuoteIndex, 1);
        let rand = Math.floor(Math.random() * (newQuotes.length));
        this.setState({
            quote: newQuotes[rand].quote,
            author: newQuotes[rand].author
        })


        $('#tweet-quote').on("click", function (e) {
            let currentQuote = $('#text').text();
            let currentAuthor = $('#author').text();
            $(this).attr(
                'href',
                'https://twitter.com/intent/tweet?text=' +
                encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
            )
        })


        $('#tumblr-quote').on("click", function (e) {
            let currentQuote = $('#text').text();
            let currentAuthor = $('#author').text();
            $(this).attr(
                'href',
                'https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=' +
                (currentAuthor) +
                '&content=' +
                encodeURIComponent(currentQuote) +
                '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
            )
        })
    }
    setRandomColor() {
        let cureentColorIndex = colors.findIndex((el, i, arr) => {
            return el === this.state.color
        });
        let newColors = colors.slice();
        newColors.splice(cureentColorIndex, 1);
        let rand = Math.floor(Math.random() * (newColors.length));
        this.setState({
            color: newColors[rand]
        })
    }
    changeQuote() {
        this.setRandomQuote();
        this.setRandomColor();
    }
    componentDidMount() {
        this.changeQuote();
    }
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: this.state.color }}>
                <div className="row main-content">
                    <div id="quote-box" className="col-4 align-self-center" >
                        <div id="text" style={{ color: this.state.color }}>{this.state.quote}</div>
                        <div id="author" style={{ color: this.state.color }}>- {this.state.author}</div>
                        <div className="row buttons">
                            <div className="col-3 left-buttons">
                                <a id="tweet-quote" className="btn small-button" target="_top" style={{ backgroundColor: this.state.color }}><i className="fab fa-twitter"></i></a>
                                <a id="tumblr-quote" className="btn small-button" target="_blank" style={{ backgroundColor: this.state.color }} ><i className="fab fa-tumblr"></i></a>
                            </div>
                            <div className="col-9 right-buttons">
                                <button id="new-quote" type="button" className="btn" style={{ backgroundColor: this.state.color }} onClick={this.changeQuote}>New quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<QuoteMachine />, document.getElementById('root'));

