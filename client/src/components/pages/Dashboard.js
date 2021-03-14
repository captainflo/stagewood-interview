import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../utils/Card';
import Loading from '../utils/Loading';

const Dashborad = () => {
  const user = useSelector((state) => state.auth.authenticated);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h2 className="text-center title-dashboard">Dashborad</h2>
      <div className="row">
        <div className="col-md-12">
          <Card user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
