import { getAuth,  signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../../firebase/firebase";

export const login =(uid) =>({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = user.result;
      })
      .catch((error) => {
  
      });
  };
};

export const logout =() =>({
  type:'LOGOUT'
});
export const startLogOut = () => {
  return () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
};