import React from "react";

export const UserInfo = ({user}) => {

  if (!user) {
    return <div>Loading user data...</div>;
  }
  return (
    <div>
      <div className="space-y-2">
        <div className="flex gap-2 px-2">
          <strong>Id:</strong>
          <div>{user.id}</div>
        </div>

        <div className="flex gap-2 px-2">
          <strong>Name:</strong>
          <div>{user.name}</div>
        </div>
        <div className="flex gap-2 px-2">
          <strong>Username:</strong>
          <div>{user.username}</div>
        </div>
        <div className="flex gap-2 px-2">
          <strong>Email:</strong>
          <div>{user.email}</div>
        </div>
        <div className="flex gap-2 px-2">
          <strong>Phone:</strong>
          <div>{user.phone}</div>
        </div>
        <div className="flex gap-2 px-2">
          <strong>Address:</strong>
          <div>{user.address.street},{user.address.city}</div>
        </div>
      </div>
    </div>
  );
};
