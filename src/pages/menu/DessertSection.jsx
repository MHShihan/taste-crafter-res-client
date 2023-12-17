import OutlineButton from "../../components/buttons/OutlineButton";
import Cover from "../../shared/cover/Cover";
import PopularMenu from "../home/PopularMenu";
import sectionCover1 from "../../assets/menu/dessert-bg.jpeg";

const DessertSection = () => {
  return (
    <section>
      <Cover
        img={sectionCover1}
        height={"700px"}
        heading={"DESSERTS"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <div className="flex justify-center">
        <OutlineButton btnTitle={"ORDER YOUR favourite FOOD"}></OutlineButton>
      </div>
    </section>
  );
};

export default DessertSection;
