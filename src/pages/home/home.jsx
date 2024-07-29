import React, { useEffect, useState,useRef } from "react";
import "./home.css";
import { auth } from "../helper/firebase";
import { signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier,getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OtpInput from 'react-otp-input';
import toast, { Toaster } from 'react-hot-toast';
import firebase from "firebase/compat/app";
function Home() {
  const [value, setValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [verificationCode, setVerificationCode] = useState('');
  // const [verificationId, setVerificationId] = useState('');
  const [otp, setOtp] = useState('');
  const [Otpshow, setOtpshow] = useState(false);
  const[user,setUser]=useState(null);
  const navigate = useNavigate();
  // const auth=getAuth;
  // const recaptchaRef = useRef(null);
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue(storedEmail);
    }
  }, []);
  function onCaptchVerify(){
    if(!window.recaptchaVerifier){
      // const auth=getAuth(app);
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // alert('signup');
          // onSignup()
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
          alert('expired');
        }
      },auth);
    }
    else
    // console.log('error')
    grecaptcha.reset(window.recaptchaWidgetId);
  }

function onSignup(){
onCaptchVerify(onSignup);
  const appVerifier = window.recaptchaVerifier
  const formatphoneNumber='+' +  phoneNumber
  signInWithPhoneNumber(auth, '+917643921464', appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // setLoading(false);
      setOtpshow(true); 
      toast.success('Otp send successfully!')
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error);
      // setLoading(false);
    });
}
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      localStorage.setItem("email", email);
      setValue(email);
      navigate('/dashboard');
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  function onOtpVerify(){
    const confirmationResult = window.confirmationResult;
    confirmationResult.confirm(otp)
      .then((result) => {
        const user = result.user;
        toast.success('User signed in successfully');
        navigate('/dashboard'); 
      }).catch((error) => {
        console.error("Error verifying OTP:", error);
        toast.error('Invalid OTP!');
      });
  }
  return (
    <div>
      <div className="mainContainer">
        <nav className="navBar">
          <div className="appName">
            <h2>Quill Notes</h2>
          </div>
          <div className="button">
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        </nav>
        <div className="centerContainer">
          <div className="upper">
            <h1 className="upperHeading">The ultimate</h1>
            <h1 className="upperHeading first">
              <span className="spanHeading">note list&nbsp;</span>
              Application
            </h1>
          </div>
          <div className="middle">
            <h3 className="middleText">
              Manage tasks, write notes, and organize projects. Quill Notes is
              the<br></br>
            </h3>
            <h3 className="middleText second">fastest way to get work done!</h3>
          </div>
          <div className="lower">
                <Toaster toastOptions={{duration:4000}}></Toaster>
                <div id="recaptcha-container"></div> 
                {/* <div ref={recaptchaRef}></div> */}
            {Otpshow?(
              <>
              <div 
               className="flex items-center justify-center mt-8 w-440px  ">
                   <OtpInput
                    value={otp}
                    inputStyle={{width:"40px",
                      height:"40px",
                      color:"aliceblue",
                      backgroundColor:'rgb(55,51,51)',
                    }}
                    onChange={setOtp}
                    numInputs={6}
                    autoFocus
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                   />
               </div>
               <div className="flex justify-center">
                <button type="submit" className="loginButton mt-8 ml-18 w-60px" onClick={onOtpVerify} >
                verify OTP
              </button>
               </div>
               </>
            ):
            <div className="inputBox">
             <PhoneInput
             className="phonenoInput"
               country={'in'}
               value={phoneNumber}
               onChange={setPhoneNumber}
               containerStyle={{
                 margin: '1px 0',
                //  width:'0'
                // padding:'0',
                marginLeft:'10px',
                paddingRight:'0px',
                marginRight:'9px',


               }}
               dropdownStyle={{
                 backgroundColor:'rgb(55,51,51)',
                 width: '440px',
                 height:'90px',
                // padding:'0',
               }}
               buttonStyle={{
                 backgroundColor:'rgb(55,51,51)',
                 border:'0px solid white',
                //  width:'30px'
                // padding:'0',
                // marginRight:'9px',
               }}
               inputStyle={{
                 width: '370px',
                 border: '0px solid #ccc',
                 borderRadius: '4px',
                paddingRight:'0px',
                 fontSize: '22px',
                 color:'aliceblue',
                 backgroundColor:'rgb(55,51,51)',
               }} 
              />
             <button type="submit" className="loginButton"onClick={onSignup} >
               Send OTP
             </button>
           {/* </form> */}
           </div>
           }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
