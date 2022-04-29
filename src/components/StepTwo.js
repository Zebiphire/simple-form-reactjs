const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <div className="stepTwo">
      <div>
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>Password: {password}</span>
      </div>
      <button className="back" onClick={() => setStep(false)}>
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
