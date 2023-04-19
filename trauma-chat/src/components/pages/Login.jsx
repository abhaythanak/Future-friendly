//import '../Css/Login.Css'

export default function Login() {
    return(
        <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Trauma Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
    )
};
