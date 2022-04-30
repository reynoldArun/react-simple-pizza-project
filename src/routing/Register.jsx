import './Register.css'

const Register = () => {
  return (
      <form className='register__form'>
        <h1>Register Page</h1>
        <label htmlFor="Email">Email</label>
        <input type="text" name="email" placeholder="Enter your email.." required/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password.." required/>

        <label htmlFor="confirmpassword">ConfirmPassword</label>
        <input type="confirmpassword" name="confirmpassword" placeholder="Password.." required/>
        <button>Register</button>
        <img src="/pizza2.png" alt="pizza-img" className='register__pizza'/>
      </form>
  )
}

export default Register