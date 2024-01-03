const MenuItem = (props = {}) => {
  const { item } = props || {};
  const { name, recipe, image, price } = item;

  return (
    <div className="flex space-x-2 font-inter">
      <img
        src={image}
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] "
      />
      <div>
        <h4 className="text-[#151515] uppercase text-xl ">{name} -------</h4>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow font-bold">${price}</p>
    </div>
  );
};

export default MenuItem;
