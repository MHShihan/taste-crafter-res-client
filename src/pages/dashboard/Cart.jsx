import { FaRegTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/usecart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  let count = 1;

  return (
    <div className="w-3/4 mx-auto bg-white py-6">
      <div className="flex gap-10 justify-evenly mb-4">
        <h3 className="text-3xl font-bold uppercase">
          Total Order: {cart.length}
        </h3>
        <h3 className="text-3xl font-bold uppercase">
          Total Price: {totalPrice}
        </h3>
        <button className="btn  text-white bg-[#D1A054] hover:bg-[#e0ac5d] text-center ">
          PAY
        </button>
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
                <th>{count++}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="font-medium">$ {item.price}</td>
                <th>
                  <button className="py-2 px-2 rounded-md bg-red-700 hover:bg-red-600 text-lg text-white">
                    <FaRegTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
