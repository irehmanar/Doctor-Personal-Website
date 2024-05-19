import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import { addImage } from "../../../aws/addimage.js";
import { updateUsername } from '../../../Services/ChangeUserName.js';

const Settings = () => {
  const [currentUsername, setCurrentUsername] = useState('Guest');
  const [newUsername, setNewUsername] = useState('');
  const [profilePic, setProfilePic] = useState('https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'); // Default profile picture path
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('');

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
    console.log(newUsername);
  };
  useEffect(() => {
    addImage()
  },[]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUsername(newUsername);
    setNewUsername('');
    updateUsername(newUsername);
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


  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
      // Logic to change password
      setPasswordChanged(true);
      // Reset password fields
      setNewPassword('');
      setConfirmPassword('');
    } else {
      // Display error message or handle password mismatch
      alert("Passwords don't match. Please try again.");
    }
  };

  const handleAddAdminButtonClick = () => {
    setShowAddAdmin(!showAddAdmin); // Toggle the state
    setAdminEmail(''); // Reset adminEmail field
    setAdminPassword(''); // Reset adminPassword field
    setConfirmAdminPassword(''); // Reset confirmAdminPassword field
  };

  const handleAddAdmin = () => {
    if (adminPassword === confirmAdminPassword) {
      // Logic to add admin
      // For demonstration purposes, let's just alert the admin email
      alert(`Admin added with email: ${adminEmail} and password: ${adminPassword}`);
      // Reset admin fields
      setAdminEmail('');
      setAdminPassword('');
      setConfirmAdminPassword('');
    } else {
      // Display error message or handle password mismatch
      alert("Admin passwords don't match. Please try again.");
    }
  };

  return (
    <div>
      <Navbar/>
       <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md relative">
      <div className="relative">
        {/* Profile Picture */}
        <img
          src={profilePic}
          alt="User Pfp"
          className="rounded-full w-20 h-20 absolute top-2 right-2 border-2 border-white cursor-pointer"
          onClick={() => document.getElementById('fileInput').click()}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleProfilePicChange}
        />
        {/* End of Profile Picture */}

        {/* Text below the Profile Picture */}
        <p className="text-xs text-gray-500 mt-2 text-right absolute top-24 right-2 left-2">Click To Update</p>
        {/* End of Text */}
      </div>
      <h2 className="text-2xl mb-4">Settings</h2>
      <div className="mb-6">
        <h3 className="text-lg mb-2">Username</h3>
        <p className="mb-2">Username: {currentUsername}</p>
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
            <form id = "aws-form" encType="multipart/form-data">
            <input className="file-input" type="file" name="test"></input>
            <input className="file-input" type="file" name="test2"></input>
              <button type ="submit">Upload</button>
          </form>
        <h3 className="text-lg mb-2">Forms Page</h3>
        <p className="mb-4">This section will link to forms page (to be integrated later).</p>
          <a href="/forms" className="text-blue-500 hover:text-blue-700">Go to Forms Page</a>
      </div>
      </div>

    </div>
  );
};

export default Settings;