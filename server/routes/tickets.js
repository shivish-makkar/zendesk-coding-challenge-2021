const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
require('dotenv/config');

const token = process.env.API_OAUTH_TOKEN;
const startTime = '1625084286';
const initialUrl = `https://zcc-shivish.zendesk.com/api/v2/incremental/tickets/cursor.json?start_time=${startTime}`;

// Helper function to wait before calling an API again
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function to call an API
const fetchData = async (url) => {
    const response = await fetch(url,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    // Handling API call rate limits
    if (response.status === 429) {
        alert('Rate limited. Waiting to retry…')
        await wait(response.retry-after)
        await fetchData(url)
    }

    return await response.json();
}

/* GET all current tickets from the account linked with provided token. */
router.get('/', async function(req, res, next) {
    try {
        // Initial API Call
        const {tickets, end_of_stream, after_url} = await fetchData(initialUrl);

        // Assigning returned values to a re-assignable value
        let endOfStream = end_of_stream;
        let afterUrl = after_url;
        let totalTickets = tickets;

        // Calling the API until no more data is left to be accessed
        while (!endOfStream) {
            const {tickets, end_of_stream, after_url} = await fetchData(afterUrl)

            endOfStream = end_of_stream;
            afterUrl = after_url;
            totalTickets = [...totalTickets, ...tickets]
        }

        res.send(totalTickets);
    } catch (error) {
        res.status(500).send()
    }

});

module.exports = router;
