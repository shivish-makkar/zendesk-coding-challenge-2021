const token = process.env.REACT_APP_API_OAUTH_TOKEN;

export const fetchData = async (url) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
        }
    })
    // const {tickets, after_url, end_of_stream} = await res.json();
    // return {tickets, after_url, end_of_stream};
    return await res.json();
}


