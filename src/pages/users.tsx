import React, { useEffect, useState } from "react";
import { IUser } from "../interfacs/user.iterface";
import { Link } from "react-router-dom";

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Users List</h1>
      <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
        {users.map(({ id, name }) => (
          <Link
            to={`/user/${id}`}
            key={id}
            className="block p-3 text-lg text-blue-500 hover:text-blue-700 hover:bg-gray-200 rounded-md transition"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;