import React from 'react';

const Profile = () => {
  return (
    <div>
        <div className='profile'>
            <center>
                <h2>Profile Page</h2>
            </center>
            <div className="d-flex flex-column profile-span">
                <span>Name</span>
                <input type="text"/>
                <span>Email</span>
                <input type="email"/>
                <span>Mobile</span>
                <input type="text"/>
            </div>
            <div>
                <button className="m-4">Save</button>
            </div>
        </div>
    </div>
  )
}

export default Profile
