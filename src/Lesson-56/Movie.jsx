import useFetch from "./useFetch"

const Movie = () => {
    const { data, loading, error } = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=9fb0a1aac1518937a0a495440a1ef66f');

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    console.log(data);

    return (
        <div>Movie</div>
    )
}

export default Movie