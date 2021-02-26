const Button = ({ handleEvent, content }) => {
  return (
    <>
      <button className="btn flex" onClick={() => handleEvent()}>
        {content}
      </button>
    </>
  );
};

export default Button;
