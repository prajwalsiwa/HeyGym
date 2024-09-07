import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileNavigation = () => {
  const Menus = [
    { name: "Home", icon: "home", dis: "translate-x-0" },
    { name: "Members", icon: "group", dis: "translate-x-16" },
    { name: "Alert", icon: "notifications", dis: "translate-x-32" },
    { name: "Register", icon: "app_registration", dis: "translate-x-48" },
    { name: "Settings", icon: "settings", dis: "translate-x-64" },
  ];

  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const handleMenuClick = (i: number, name: string) => {
    console.log(name)
    if(name==='Home'){
      navigate('/')
    }
    navigate(`./${name.toLocaleLowerCase()}`);
    setActive(i);
  };
  return (
    <div className="bg-white w-full max-h-[4.4rem] px-6 rounded-t-xl">
      <ul className="flex relative  ">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16 justify-center flex ">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => {
                handleMenuClick(i, menu.name);
              }}
            >
              <span
                className={`text-2xl cursor-pointer duration-500 material-symbols-outlined  ${
                  i === active && "-mt-6 text-white z-50"
                }`}
              >
                {menu.icon}
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
