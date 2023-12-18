import { useEffect, useState } from "react";

const useMenu = () => {
  const [allMenu, setAllMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllMenu(data);
        setIsLoading(false);
      });
  }, []);

  return [allMenu, isLoading];
};

export default useMenu;
