const serverUrl = 'http://localhost:9000/tickets'

export const fetchData = async () => {
    const res = await fetch(serverUrl);
    return await res.json();
}


