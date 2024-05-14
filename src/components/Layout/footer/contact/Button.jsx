
function MyButton() {
  // const emailAddress = "stellaoziomaug@gmail.com";

  const handleEmailSubmission = () => {
    window.location.href 
    // = `mailto:${emailAddress}`;
  };

  return (
    <button className="btns" type="submit" onClick={handleEmailSubmission}>
      Submit
    </button>
  );
}

export default MyButton;
