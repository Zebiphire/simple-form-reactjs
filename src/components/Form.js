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
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <span>Email</span>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <span>Password</span>
      <input
        className={errorPassword && "error"}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <span>Confirm your password</span>
      <input
        className={errorPassword && "error"}
        placeholder="Password"
        type="password"
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
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
