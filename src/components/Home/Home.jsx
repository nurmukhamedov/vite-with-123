import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
const Home = (props) => {

    const history = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/login')
    }

    return (
        <div>
            {props.user ? <button onClick={handleLogout}>Logout</button> : 'Home'}
        </div>
    )
}

export default Home