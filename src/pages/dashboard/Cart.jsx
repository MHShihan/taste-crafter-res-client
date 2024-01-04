import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import loadingAnimation from "../../assets/animation/loadingAnimation.json";
import Lottie from "lottie-react";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch, isLoading] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  let count = 1;

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/user/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="w-3/4 mx-auto bg-white py-6">
      <div className="flex gap-10 justify-evenly mb-4">
        <h3 className="text-3xl font-bold uppercase">
          {isLoading && <Lottie animationData={loadingAnimation}></Lottie>}
          Total Order: {cart.length}
        </h3>
        <h3 className="text-3xl font-bold uppercase">
          Total Price: {totalPrice.toFixed(2)}
        </h3>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn  text-white bg-[#D1A054] hover:bg-[#e0ac5d] text-center ">
              PAY
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="btn  text-white bg-[#D1A054] hover:bg-[#e0ac5d] text-center "
          >
            PAY
          </button>
        )}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>{count++}</td>
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
                  <button
                    onClick={() => handleDelete(item._id)}
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
    </div>
  );
};

export default Cart;
