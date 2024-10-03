import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Context from "../Context/Context";

export default function Navbar() {
  let nav = [
    { name: "Emporium", to: "/" },
    { icon: <ShoppingCartOutlinedIcon />, to: "/cart" },
    { name: "SignIn/SignUp", to: "/signin" },
    // {name: 'SignUp', to: '/signup'}
  ];
  let {setBackground,background} = useContext(Context)
  
  return (
    <div>
      <nav className="flex justify-center bottom-1">
        <ul className="">
          <div className="w-[50vw] flex justify-center text-lg items-center">
            {nav.map((ele, index) => (
              <div className="flex">
                <div className="text-lg m-6 group relative w-max">
                  <span>
                    <Link className={ele.name=='Emporium'?'text-2xl p-2 justify-self-start' : "p-2"} key={index} to={ele.to}
                    style={background?{color:'white'}:{color:'black'}}>
                      {ele.name}
                      {ele.icon}
                    </Link>
                  </span>
                  {ele.name != 'Emporium' && <span class="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>}
                </div>
                {ele.name == 'Emporium' && <div className="text-lg m-6 group relative w-max">
              <span>
                <DarkModeOutlinedIcon
                  className="cursor-pointer"
                  onClick={()=>setBackground(!background)}
                  style={background?{color:'white'}:{color:'black'}}
                />
              </span>

              <span class="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
            </div>}
              </div>
            ))}
            
          </div>
        </ul>
      </nav>
    </div>
  );
}
