import MenuItem from "../menuItem/MenuItem";

const MenuItems = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
      {items?.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default MenuItems;
