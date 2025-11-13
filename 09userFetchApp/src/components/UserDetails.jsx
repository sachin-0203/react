import { useSelector } from "react-redux";

export const UserDetails = () => {
  const {userDetail} = useSelector(state => state.user);

  return (
    <div className="border border-sky-600 rounded-sm p-1 bg-sky-900 duration-200 fixed top-[35%] left-[40%]" >
      <div className="flex gap-2 px-2">
        <strong>Id:</strong>
        <div>{userDetail.id}</div>
      </div>
      <div className="flex gap-2 px-2">
        <strong>Name:</strong>
        <div>{userDetail.name}</div>
      </div>
      <div className="flex gap-2 px-2">
        <strong>username:</strong>
        <div>{userDetail.username}</div>
      </div>
      <div className="flex gap-2 px-2">
        <strong>Email:</strong>
        <div>{userDetail.email}</div>
      </div>
      <div className="flex gap-2 px-2">
        <strong>Phone:</strong>
        <div>{userDetail.phone}</div>
      </div>
      <div className="flex gap-2 px-2">
        <strong>Address:</strong>
        <div>{`${userDetail.address.street} , ${userDetail.address.city}`}</div>
      </div>

    </div>
  );
};
