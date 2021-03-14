import '../../styles/index.css';

const Welcome = () => {
  return (
    <div>
      <h2 className="title">Interview test with Stagewood</h2>
      <img
        className="img-fluid"
        src={process.env.PUBLIC_URL + `/images/tyket-app-screens.jpg`}
        alt="banner"
      />
    </div>
  );
};

export default Welcome;
