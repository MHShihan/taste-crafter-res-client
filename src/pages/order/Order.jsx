import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../../assets/order/order.jpg";
import Cover from "../../shared/cover/Cover";
import { useState } from "react";
import useFilteredMenu from "../../hooks/useFilteredMenu";
import OrderTab from "./OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [dessert, salad, pizza, soup, drinks] = useFilteredMenu();

  return (
    <div>
      <Cover
        img={orderImg}
        height={"700px"}
        heading={"Order"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <main className="max-w-7xl mx-auto mt-12 p-2">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </main>
    </div>
  );
};

export default Order;
