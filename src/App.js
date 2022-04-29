import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

function App() {
  library.add(faEnvelope, faKey, faListAlt);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setStep(true);
      setErrorPassword(false);
    } else {
      setStep(false);
      setErrorPassword(true);
    }
  };

  return (
    <div className="App">
      {step === false ? <h1>Create account</h1> : <h1>Results</h1>}
      {step === false ? (
        <Form
          setStep={handleSubmit}
          setName={handleNameChange}
          setEmail={handleEmailChange}
          setPassword={handlePasswordChange}
          setConfirmPassword={handleConfirmPasswordChange}
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          errorPassword={errorPassword}
        />
      ) : (
        <StepTwo
          name={name}
          email={email}
          password={password}
          setStep={setStep}
        />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
