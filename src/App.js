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

  const handleSubmit = (event) => {
    console.log("=== je suis dans handleSubmit ====");
    console.log(event);
    console.log(name);
    event.preventDefault();
    if (password === confirmPassword) {
      setStep(true);
      setErrorPassword(false);
    } else {
      alert("Les mots de passe ne sont pas identiques !!");
      console.log("=== je suis dans else ====");
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
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setErrorPassword={setErrorPassword}
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
