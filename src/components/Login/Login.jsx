import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../../firebase.js';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email && !password) {
            setError('Please fill all the fields')
            return
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('User topilmadi')
            } else if (error.code === 'auth/wrong-password') {
                setError('Parol xato')
            } else {
                setError(error.message)
            }
        }
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <h2>Login</h2>
            {error}
            <form onSubmit={handleLogin}>
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>Passwsord:
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="button" onClick={toggleShowPassword}>{showPassword ? 'Hide' : 'Show'} Password</button>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login