"use client";
import React, { useState } from "react";

const AccountSettings = () => {
  // ফর্ম ইনপুট স্টেট ম্যানেজমেন্ট
  const [profile, setProfile] = useState({
    firstName: "Dianne",
    lastName: "Russell",
    email: "dianne.russell@gmail.com",
    phoneNumber: "(671) 555-0110",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white font-sans text-black py-8 px-4 md:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* MAIN CONTAINER WITH THE BLUE GLOW BORDER FROM IMAGE */}
        <div className="border-2 border-[#1e90ff] rounded-xl bg-white shadow-sm overflow-hidden">
          {/* Card Header Title */}
          <div className="px-6 py-5 border-b border-gray-100 bg-white">
            <h1 className="text-xl font-semibold text-gray-900 tracking-wide">
              Account Settings
            </h1>
          </div>

          {/* Form Body Fields Wrapper */}
          <div className="p-6 flex flex-col gap-8">
            {/* 1. Account Information Section */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleProfileChange}
                    className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#00b207] transition-colors bg-white text-gray-800 font-light"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleProfileChange}
                    className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#00b207] transition-colors bg-white text-gray-800 font-light"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#00b207] transition-colors bg-white text-gray-800 font-light"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={profile.phoneNumber}
                    onChange={handleProfileChange}
                    className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#00b207] transition-colors bg-white text-gray-800 font-light"
                  />
                </div>
              </div>

              {/* Save Changes Button */}
              <button className="bg-[#00b207] hover:bg-[#009906] text-white font-semibold text-sm px-6 py-2.5 rounded-full self-start transition-colors duration-200 mt-2 shadow-xs">
                Save Changes
              </button>
            </form>

            {/* 2. Change Password Section */}
            <div className="border-t border-gray-100 pt-8 flex flex-col gap-5">
              <h2 className="text-lg font-semibold text-gray-900 tracking-wide">
                Change Password
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >
                {/* Current Password Field */}
                <div className="flex flex-col gap-1.5 max-w-full">
                  <label className="text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="current"
                    placeholder="Password"
                    value={password.current}
                    onChange={handlePasswordChange}
                    className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#00b207] transition-colors bg-white text-gray-800 font-light"
                  />
                </div>

                {/* New Password & Confirm Password Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new"
                      placeholder="Password"
                      value={password.new}
                      onChange={handlePasswordChange}
                      className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#00b207] transition-colors bg-white text-gray-800 font-light"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm"
                      placeholder="Password"
                      value={password.confirm}
                      onChange={handlePasswordChange}
                      className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#00b207] transition-colors bg-white text-gray-800 font-light"
                    />
                  </div>
                </div>

                {/* Change Password Button */}
                <button className="bg-[#00b207] hover:bg-[#009906] text-white font-semibold text-sm px-6 py-2.5 rounded-full self-start transition-colors duration-200 mt-2 shadow-xs">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
