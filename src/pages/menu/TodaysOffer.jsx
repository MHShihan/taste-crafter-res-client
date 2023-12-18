import OutlineButton from "../../components/buttons/OutlineButton";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuItems from "../../shared/menuItems/MenuItems";

const TodaysOffer = ({ items }) => {
  return (
    <div>
      <SectionTitle
        heading="Today,s Offer"
        subheading="Dont't miss"
      ></SectionTitle>

      <MenuItems items={items}></MenuItems>

      <OutlineButton btnTitle={"ORDER YOUR favourite FOOD"}></OutlineButton>
    </div>
  );
};

export default TodaysOffer;
