const Register = () => {
  return (
    <div className="registers w-[100vw] h-[100vh]">
      <div className="register_wreapers p-5 w-[40%] bg-white rounded">
        <h1 className="title text-[24px] font-[300]">Create an Account</h1>
        <form className=" flex flex-wrap">
          <input placeholder="First Name" className="register_input" />
          <input placeholder="Last Name" className="register_input" />
          <input placeholder="username" className="register_input" />
          <input placeholder="Email" className="register_input" />

          <input placeholder="password" className="register_input" />
          <input placeholder="confirm password" className="register_input" />

          <span className=" text-[12px] my-[20px]">
            By creating an account, I conssent to the processing of personal
            data in accordance with the <b> privacy law</b>
          </span>

          <button className="btn_register">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
