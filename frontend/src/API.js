const token = process.env.REACT_APP_API_OAUTH_TOKEN;

export const fetchData = async (url) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
        }
    })
    return await res.json();
}


