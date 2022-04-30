import './Login.css'

const Login = () => {
  return (
      <form className='login__form'>
        <h1>Login Page</h1>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Enter your email.." required/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password.." required/>
        <button>Login</button>
        <img src="/pizza2.png" alt="pizza-img" className='login__pizza'/>
      </form>
  )
}

export default Login