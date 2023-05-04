import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(response);
            console.log(data);
            if (!response.ok) {
                setError(data.status_message + response.status)
            }
            setData(data);
            setLoading(false);

        } catch (error) {
            console.error(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData()
    }, [url]);

    return { data, loading, error }
}

export default useFetch;