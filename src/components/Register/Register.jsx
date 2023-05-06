import { useState } from "react";
import firebase from '../../firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault();

        if (!email && !password && !confirmPassword) {
            setError('Please fill all the fields')
            return
        }
        if (password !== confirmPassword) {
            setError('Parol mos kelmadi');
            return
        }

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error)
        }


    }

    return (
        <div>
            <h2>Register</h2>
            {error}
            <form onSubmit={handelSubmit}>
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>Confirm Password:
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <button type="submit">Register</button>
                {/* <Link to='/login'>Already have an account</Link> */}
            </form>
        </div>
    )
}

export default Register;