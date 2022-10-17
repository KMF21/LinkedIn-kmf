import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePicture,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePicture,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://p.kindpng.com/picc/s/206-2062823_
        imagem-png-linkedin-transparent-png.png"
        alt=""
      />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name(required if registered"
        />
        <input
          type="text"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          placeholder="profile Picture url(optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          SignIn
        </button>
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={register}>
            Register now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
