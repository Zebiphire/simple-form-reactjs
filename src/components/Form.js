const Form = (
  setStep,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setErrorPassword,
  name,
  email,
  password,
  confirmPassword,
  errorPassword
) => {
  // const handleSubmit = (event) => {
  //   console.log("je suis dans onSubmit");
  //   console.log(name);
  //   console.log(email);
  //   console.log(password);
  //   console.log(confirmPassword);
  //   console.log(event);
  //   event.preventDefault();
  //   if (password === confirmPassword) {
  //     setStep(true);
  //     setErrorPassword(false);
  //   } else {
  //     setErrorPassword(true);
  //     setStep(false);
  //   }
  // };

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

  return (
    <form
      onSubmit={() => {
        setStep();
      }}
    >
      <span>Name</span>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <span>Email</span>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <span>Password</span>
      <input
        className={errorPassword && "error"}
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <span>Confirm your password</span>
      <input
        className={errorPassword && "error"}
        placeholder="Password"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {errorPassword && (
        <span className="error-password">
          Les mots de passe ne sont pas identiques !
        </span>
      )}
      <input className="button" type="submit" value="Register" />
    </form>
  );
};

export default Form;
