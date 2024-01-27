import React from "react";
import circle from "../assets/Circled Menu.png";
import puzzle from "../assets/Puzzle.png";
import support from "../assets/Support.png";
import help from "../assets/Help.png";
import briefcase from "../assets/Briefcase.png";
import icon from "../assets/Shutdown.png";
import name from "../assets/StatBoard.png";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/6 h-screen items-center p-5 flex flex-col">
      <div className="flex flex-col items-center">
        <img src={briefcase} alt="Logo" className="w-auto h-16" />
        <img src={name} alt="Logo" className="w-auto h-auto" />
      </div><br></br>

      <div className="m-5 mr-auto">
        <SidebarButton icon={circle} text="Dashboard" customClassName="bg-white text-black" />
        <SidebarButton icon={puzzle} text="Plugins" />
        <SidebarButton icon={support} text="Support" />
        <SidebarButton icon={help} text="Help" />
      </div>

      <div className="mt-auto flex justify-center items-center">
        <button className="bg-white text-red-700 px-24 py-3 hover:text-red-900 flex items-center">
          <img src={icon} alt="Icon" className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

const SidebarButton = ({ icon, text, customClassName }) => {
    const buttonClass = `flex items-center mb-3 text-left text-md hover:bg-white hover:text-black rounded-3xl px-14 py-3 w-full ${customClassName}`;
  
    return (
      <button className={buttonClass}>
        <img src={icon} alt="Icon" className="w-4 h-4 mr-2" />
        <span>{text}</span>
      </button>
    );
  };

export default Sidebar;
