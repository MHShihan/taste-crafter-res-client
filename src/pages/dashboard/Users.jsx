import { FaRegTrashAlt } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";

const Users = () => {
  const [users, refetch] = useUsers();

  return (
    <div className="w-3/4 mx-auto bg-white py-6">
      <div className=" mb-4">
        <h3 className="text-3xl font-bold uppercase">
          Total Users: {users.length}
        </h3>
      </div>

      <div className="overflow-x-auto rounded-t-2xl">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white text-base ">
            <tr>
              <th>#</th>
              <th> Name </th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="font-medium"></td>
                <td>
                  <button
                    // onClick={() => handleDelete(item._id)}
                    className="py-2 px-2 rounded-md bg-red-700 hover:bg-red-00 text-lg text-white hover:scale-105"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
