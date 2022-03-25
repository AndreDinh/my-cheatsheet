// import {useState} from 'react';
// const Login = (props) => {
//   // const [[userName, setUserName], [password, setPassWord]] =
//   //   useUserLoginState();

//   const [loginDetails, setLoginDetails] = useState({
//     username: "",
//     password: "",
//   });

//   // const userInfoHandler = (event) => {
//   //   userEntered(event.target.value);
//   // };
//   // const userPasswordHandler = (event) => {
//   //   passwordEntered(event.target.value);
//   // };

//   const loginSubmition = (event) => {
//     event.preventDefault();
//     const loginInfo = {
//       userName: "",
//       password: "",
//     };
//     setLoginDetails(loginInfo);
//     console.log(loginInfo);
//   };

//   return (
//     <form onSubmit={loginSubmition}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={userName}
//           onChange={(e) => setLoginDetails({...loginDetails, userName: e.target.value})}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="text"
//           name="password"
//           value={passWord}
//           onChange={(e) => setPassWord(e.target.value)}
//         />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// };
// export default Login;

// export function useUserLoginState() {
//   const [passWord, setPassword] = useState("");
//   const [userName, setUsernName] = useState("");

//   return [
//     [password, setPassword],
//     [userName, setUsernName],
//   ];
// }
