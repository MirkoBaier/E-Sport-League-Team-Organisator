import { signInWithGoogle } from '../../firebase/clientApp';

const Login = () => {
    return (
        <div>
            <button className="button" onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    )
}

export default Login;