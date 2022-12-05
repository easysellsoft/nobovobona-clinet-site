import React, { useEffect, useState } from 'react'
import ProfileTable from './ProfileTable';
import './Profile.css'
import api from '../Home/components/api/Api';
function Profile() {
  const [isLoading, setIsLoading] = useState(false);
    const [defaultTd, setDefaultTd] = useState([]);
    const user = JSON.parse(localStorage.getItem("nobovabna_client"));
    useEffect(() => {
      setIsLoading(true);
      api
        .get("webapi/client_api/user_profile.php?p_user=" + user?.user_id)
        .then((data) => {
          console.log(data?.data);
          setDefaultTd(data?.data);
          setIsLoading(false);
        });
    }, []);
  return (
    <div className="profileCard" style={{ width: "100%" }}>
      {/* <ProfileTable />
       */}
      <div>
        {defaultTd.map((item, idx) => (
          <div class="card">
            <img
              src="https://www.w3schools.com/w3images/team2.jpg"
              alt="John"
              style={{ width: "100%" }}
            />
            <h1>{item.name}</h1>
            <p class="title">CEO & Founder</p>
            <p>{item.email}</p>
            <p> {item.time_stamp.split(/\s(.+)/)[0]} </p>

            <p>
              <button>Contact</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Profile);