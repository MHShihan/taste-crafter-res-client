import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation/loadingAnimation.json";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Users = () => {
  const [users, refetch, isLoading] = useUsers();
  const axiosSecure = useAxiosSecure();

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to make the user as Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/admin/makeAdmin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success",
              text: `${user.name} is an Admin Now.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/admin/deleteUsers/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="py-10 bg-[#F6F6F6]">
      <SectionTitle
        heading="Manage All  users"
        subheading="How many?"
      ></SectionTitle>
      <div className="w-3/4 mx-auto bg-white p-6">
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
                  <td className="font-medium">
                    {user?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="py-2 px-2 rounded-md text-2xl text-white bg-[#D1A054] hover:bg-[#e9b15e]  hover:scale-105"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="py-2 px-2 rounded-md bg-red-700 hover:bg-red-600 text-lg text-white hover:scale-105"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isLoading && <Lottie animationData={loadingAnimation}></Lottie>}
      </div>
    </div>
  );
};

export default Users;
