const Form = ({
  setStep,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  name,
  email,
  password,
  confirmPassword,
  errorPassword,
}) => {
  return (
    <form onSubmit={setStep}>
      <span>Name</span>
      <input placeholder="Name" type="text" value={name} onChange={setName} />
      <span>Email</span>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={setEmail}
      />
      <span>Password</span>
      <input
        className={errorPassword && "error"}
        placeholder="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <span>Confirm your password</span>
      <input
        className={errorPassword && "error"}
        placeholder="Password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
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
