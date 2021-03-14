import '../../styles/card.css';

const Card = ({ user }) => {
  return (
    <div className="card-wrapper">
      <div className="card-header-user">
        <div className="card-image-wrapper">
          <img className="card-image" src={user.avatar} alt="backgroung" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ed213a"
          fillOpacity="1"
          d="M0,320L480,192L960,224L1440,192L1440,0L960,0L480,0L0,0Z"
        ></path>
      </svg>
      <div className="card-wrapper-body">
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};
export default Card;
