import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import { NavLink } from 'react-router-dom';
// import { addImage } from "../../../aws/addimage.js";
import { updateUsername } from '../../../Services/ChangeUserName.js';
import changePassword from '../../../Services/ChangePassword.js';
import {fetchUsername} from '../../../Services/GetUserName.js';
import addAdmin from '../../../Services/AddAdmin.js';

const Settings = () => {
  const [currentUsername, setCurrentUsername] = useState('loading...');
  const [newUsername, setNewUsername] = useState('');
  const [profilePic, setProfilePic] = useState('https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'); // Default profile picture path
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem('role');

  
  useEffect(() => {
    const getUsername = async () => {
      try {
        const data = await fetchUsername();
        setCurrentUsername(data.username);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching username:', error);
        setLoading(false);
      }
    };

    getUsername();
  }, [setCurrentUsername]);

   const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUsername(newUsername);
      setCurrentUsername(newUsername);
      setNewUsername('');
    } catch (error) {
      console.error('Error updating username:', error);
    }
  };

  const handleProfilePicChange = (e) => {
    
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordButtonClick = () => {
    setShowChangePassword(!showChangePassword); // Toggle the state
    setPasswordChanged(false); // Reset passwordChanged state
  };


  const handlePasswordChange = async () => {
    if (newPassword === confirmPassword) {
      const result = await changePassword(oldPassword, newPassword);
      if (result.success) {
        setPasswordChanged(true);
        setOldPassword(''); // Reset oldPassword field
        setNewPassword(''); // Reset newPassword field
        setConfirmPassword(''); // Reset confirmPassword field
      } else {
        alert(result.message);
      }
    } else {
      alert("Passwords don't match. Please try again.");
    }
  };
  

  const handleAddAdminButtonClick = () => {
    setShowAddAdmin(!showAddAdmin); // Toggle the state
    setAdminUsername(''); // Reset adminUsername field
    setAdminEmail(''); // Reset adminEmail field
    setAdminPassword(''); // Reset adminPassword field
    setConfirmAdminPassword(''); // Reset confirmAdminPassword field
  };
  

  const handleAddAdmin = async () => {
    if (adminPassword === confirmAdminPassword) {
      try {
        const response = await addAdmin(adminUsername,adminEmail, adminPassword); // Call addAdmin function
        alert(response.message); // Display the response message
        // Reset admin fields if admin was successfully added
        setAdminUsername('');
        setAdminEmail('');
        setAdminPassword('');
        setConfirmAdminPassword('');
      } catch (error) {
        console.error('Error adding admin:', error);
        // Display error message if there was an error adding admin
        alert('Error adding admin. Please try again.');
      }
    } else {
      // Display error message if admin passwords don't match
      alert("Admin passwords don't match. Please try again.");
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md relative">
        <div className="relative">
          {/* Profile Picture */}
          <img
            src={profilePic}
            alt="User Pfp"
            className="rounded-full w-20 h-20 absolute top-0 right-2 border-2 border-white cursor-pointer"
            onClick={() => document.getElementById('fileInput').click()}
          />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleProfilePicChange}
          />
        </div>
        <h2 className="text-2xl mb-4">Settings</h2>
        <div className="mb-6">
          <h3 className="text-lg mb-2">Username: {currentUsername}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newUsername}
              onChange={handleUsernameChange}
              placeholder="Enter new username"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Change Username
            </button>
          </form>
        </div>


      {/* Button container to show Add Admin and Change Password options */}
      <div className="flex mb-6">
        <button
          onClick={handlePasswordButtonClick}
          className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
        >
          Change Password
        </button>

        <button
          style={{ display: role === 'Doctor' ? 'block' : 'none' }}
          onClick={handleAddAdminButtonClick}
          className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
        >
          Add Admin
        </button>
      </div>

      {/* Change Password option */}
      {showChangePassword && (
  <div className="mb-6">
    <h3 className="text-lg mb-2">Change Password</h3>
    <form>
      <div className="mb-2">
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Enter old password"
          className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
        />
      </div>
      <div className="mb-2">
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
        />
      </div>
      <div className="mb-2">
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
        />
      </div>
      <button
        type="button"
        onClick={handlePasswordChange}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Change Password
      </button>
      {passwordChanged && <p className="text-green-500 mt-2">Password changed successfully!</p>}
    </form>
  </div>
)}


      {/* Add Admin option */}
      {showAddAdmin && (
        <div className="mb-6">
          <h3 className="text-lg mb-2">Add Admin</h3>
          <form>
            <div className="mb-2">
              <input
                type="text"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                placeholder="Enter admin username"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
              />
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="Enter admin email"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter admin password"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                value={confirmAdminPassword}
                onChange={(e) => setConfirmAdminPassword(e.target.value)}
                placeholder="Confirm admin password"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
              />
            </div>
            <button
              type="button"
              onClick={handleAddAdmin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Admin
            </button>
          </form>
        </div>
      )}
      
        <div>
            
        <h3 className="text-lg mb-2">User Info:</h3>
        <NavLink
          to={'/info'}
          >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Info
          </button>
        </NavLink>
      </div>
      </div>

    </div>
  );
};

export default Settings;