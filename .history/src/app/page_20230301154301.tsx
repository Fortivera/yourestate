
export default Login(){



  return (
    <>
      <Form method="get" id="login-form">

        <div className="flex flex-col justify-center items-center pt-80">
          <div className="border-2 border-gray-400 bg-blue-100">
            <div className="flex justify-center p-2 ">

              <label className="w-20" htmlFor="Name">Username</label>
              <input id="Name" type="text" name="Name" aria-label="User name" placeholder="Username" required />

            </div>
            <div className="container flex justify-center p-2">
              <label className="w-20" htmlFor="Password">Password</label>
              <input id="Password" type="text" name="Password" aria-label="User Password" placeholder="Password" required />
            </div>
            {/* <button type="submit" aria-label="Login button">Login</button> */}
            <button type="button" aria-label="Sign-up button" onClick={() => {
              if (location.state) {
                navigate(location.state.from)
              }
            }}>
              <Link to={"/dashboard"}>Login</Link>
            </button>
            <button type="button" aria-label="Sign-up button">
              <Link to={"/user"}>Sign up</Link>
            </button>
          </div>

        </div>

      </Form>
    </>
  )
}
