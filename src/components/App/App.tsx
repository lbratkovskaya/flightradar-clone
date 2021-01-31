import React, { useState } from 'react';
import axios from 'axios';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import StartForm from '../StartForm/StartForm';
import FlightsMap from '../FlightsMap';
import Airport from '../Airport/Airport';
import { IUser } from '../../types';
import './index.scss';

const App: React.FC = (): JSX.Element => {
  const [openAirportPanel, setOpenAirportPanel] = useState(false);
  const [userData, setUserData] = useState<null | IUser>(null);
  const code = 'MSQ';
  
  const getCurrentUser = (): null | IUser => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'auth/current_user',
    }).then((res) => {
      console.log(res.data);
      setUserData(res.data);
      return res.data;
    });
    return null;
  };

  const toggleAirportPanelOpen = () => {
    setOpenAirportPanel(!openAirportPanel);
  }
  
  return (
    <Router>
      {/* <Link to="/">Main page</Link> */}
      <div className="login-form">
        <Link to="/login">Login form</Link>
      </div>
      <Route exact path="/" render={() => 
        <FlightsMap
          userData={userData}
          onAirportIconClick={toggleAirportPanelOpen}
          onAircraftIconClick={() => {}}
        />
        }  
      />
      <Route exact path="/login" render={() => 
        <StartForm getCurrentUser={getCurrentUser} />
      }
      />
      <Airport code={code} openAirportPanel={openAirportPanel} />
    </Router>
  );
};

export default App;
