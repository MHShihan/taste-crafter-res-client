import useMenu from "./useMenu";

const useFilteredMenu = () => {
  const [allMenu] = useMenu();

  const dessert = allMenu?.filter((item) => item.category === "dessert");
  const salad = allMenu?.filter((item) => item.category === "salad");
  const pizza = allMenu?.filter((item) => item.category === "pizza");
  const soup = allMenu?.filter((item) => item.category === "soup");
  const offered = allMenu?.filter((item) => item.category === "offered");
  const drinks = allMenu?.filter((item) => item.category === "drinks");

  return [dessert, salad, pizza, soup, offered, drinks];
};

export default useFilteredMenu;
