const [userName, userEntered] = useState();
const userInfoHandler = (event) => {
  userEntered(event.target.value);
};
const [passWord, passwordEntered] = useState();
const userPasswordHandler = (event) => {
  passwordEntered(event.target.value);
};

const loginSubmition = (event) => {
  event.preventDefault();
  const loginInfo = {
    userName: userName,
    passsword: passWord
  };
  console.log(loginInfo);
};

const Login = (props) => {
    <form onSubmit={loginSubmition}>
    <label>
      Name:
      <input type="text" name="name" onChange={userInfoHandler} />
    </label>
    <label>
      Password:
      <input type="text" name="password" onChange={userPasswordHandler} />
    </label>
    <input type="submit" value="Submit" />
  </form>

}
export default Login;