import useFetch from "./useFetch";
import { AiOutlineSearch } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const RestCountries = () => {
    const { data, loading, error } = useFetch('https://restcountries.com/v3.1/all');


    if (loading) {
        return <div>Loading ...</div>
    }
    if (error) {
        <div>Error: {error}</div>
    }

    console.log(data);
    return (
        <>
            <div>RestCountries
                <AiOutlineSearch className="search-icon" />
                <RxHamburgerMenu />
                <p className="text-9xl font-bold underline text-blue-600">Hello World</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>01</div>
                <div>09</div>
                <div>09</div>
                <div>09</div>
                <div>09</div>
                <div>09</div>
            </div>
        </>
    )
}

export default RestCountries