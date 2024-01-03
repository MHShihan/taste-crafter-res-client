import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
  const [allMenu] = useMenu();

  const popularMenu = allMenu?.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 mt-24">
      <SectionTitle
        heading={"FROM OUR Popular MENU"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {popularMenu?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
