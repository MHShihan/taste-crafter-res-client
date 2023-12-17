import PopularMenu from "../home/PopularMenu";
import Cover from "../../shared/cover/Cover";
import saladCover from "../../assets/menu/salad-bg.jpg";
import OutlineButton from "../../components/buttons/OutlineButton";

const SaladSection = () => {
  return (
    <section>
      <Cover
        img={saladCover}
        height={"700px"}
        heading={"Salad"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <div className="flex justify-center">
        <OutlineButton btnTitle={"ORDER YOUR favourite FOOD"}></OutlineButton>
      </div>
    </section>
  );
};

export default SaladSection;
