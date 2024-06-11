/**
 * @returns {Promise Object}  quote information
 */
const fetchQuote = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    return(data[0]);

}

/**
 * 
 * @param {HTMLDivelement} element 
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';

    const quote = await fetchQuote();
    
    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (quote) => {
        quoteLabel.innerHTML = quote.quote;
        authoLabel.innerHTML = quote.author;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    })

    fetchQuote()
        .then(renderQuote);   

}

