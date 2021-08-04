const serverUrl = 'http://localhost:9000/tickets'

export const fetchData = async () => {
    try {
        const res = await fetch(serverUrl);
        return await  res.json();
    } catch (e) {
        return "Error";
    }
}


