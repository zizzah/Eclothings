const Register = () => {
  return (
    <div className="login w-[100vw] h-[100vh]">
      <div className="longin_wreapers p-5 w-[25%] bg-white rounded">
        <h1 className="title text-[24px] font-[300]">Sign In</h1>
        <form className=" flex flex-wrap flex-col">
          <input placeholder="username" className="register_input my-[10px]" />

          <input placeholder="password" className="register_input my-[10px]" />

          <button className="btn_register  my-5">LOGIN</button>
          <a href="h">FORGOT YOUR PASSWORD ?</a>
          <a href="h">DO NOT HAVE AN ACCOUNT SIGN UP ?</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
