import Add from "../img/addAvatar.png";
import { auth, storage } from "../firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setError] = useState(false)
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

try{
  const res = await createUserWithEmailAndPassword(auth, email, password)

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
  uploadTask.on(
 
  (error) => {
    // Handle unsuccessful uploads
    setError(true);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      //console.log('File available at', downloadURL);
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
      });
          
   await setDoc(doc(db, "users",res.user.uid),{
    uid: res.user.uid,
    displayName,
    email,
    photoURL: downloadURL,
   });

   await setDoc(doc(db,"userChats",res.user.uid),{})
   navigate("/");


  });
  }
);


}catch(err){
     setError(true)
}


  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="file" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account?Login
        </p>
      </div>
    </div>
  );
};

export default Register;
