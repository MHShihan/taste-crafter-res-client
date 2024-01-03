import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation/loadingAnimation.json";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [allMenu, refetch, isLoading] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/admin/deleteItem/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="py-10 bg-[#F6F6F6]">
      <SectionTitle
        heading="Manage All Items"
        subheading="Hurry Up!"
      ></SectionTitle>
      <div className="w-3/4 mx-auto bg-white p-6">
        <div className=" mb-4">
          <h3 className="text-3xl font-bold uppercase">
            Total Menu Item: {allMenu?.length}
          </h3>
        </div>

        <div className="overflow-x-auto rounded-t-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-base ">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name </th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allMenu?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="font-medium">$ {item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="py-2 px-2 rounded-md bg-[#D1A054] hover:bg-[#d4a45b] text-lg text-white hover:scale-105">
                        <FaRegPenToSquare />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
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

export default ManageItems;
