const serverUrl = process.env.REACT_APP_PROXY_URL

export const fetchData = async () => {
    const res = await fetch(serverUrl, {
        method: 'GET',
    })
    return await res.json();
}


