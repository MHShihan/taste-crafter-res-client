import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(food, user.email);
    } else {
      Swal.fire({
        title: "You Are Not Logged In?",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //  Sent to the login page
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="text-base text-base-100 absolute right-6 top-4 bg-[#111827] p-1 rounded-sm">
        ${price}
      </p>
      <div className="card-body text-justify font-inter pt-2 ">
        <div>
          <h2 className=" text-center font-bold text-xl">{name}</h2>
        </div>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-2">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline btn-wide border-0 border-b-yellow hover:border-b-yellow border-b-2 text-yellow hover:text-yellow hover:bg-[#111827]"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
