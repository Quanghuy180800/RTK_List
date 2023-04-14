import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/usersSlice";

const UserList = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.users);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
    setUsers(list);
  }, [dispatch, list]);

  return (
    <div className="container">
      <div className="list-item">
        <table id="user">
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
          {users?.map((user, index) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{` ${user.company.name} ${user.company.catchPhrase} ${user.company.bs} `}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UserList;
