const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

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
          <button className="btn btn-outline btn-wide border-0 border-b-yellow hover:border-b-yellow border-b-2 text-yellow hover:text-yellow hover:bg-[#111827]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
