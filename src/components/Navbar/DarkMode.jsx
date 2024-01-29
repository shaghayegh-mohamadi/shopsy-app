import React from 'react'
import LightButton from "../../assets/website/light.png";
import DarkButton from "../../assets/website/dark.png";

const DarkMode = () => {
   const [theme , setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
   );
   const elemnt = document.documentElement;

   React.useEffect(() => {
    if (theme === "dark") {
        elemnt.classList.add("dark");
        localStorage.setItem("theme","dark");
    } else {
        elemnt.classList.remove("dark")
        localStorage.setItem("theme","light");
    }
   } , [theme])

  return (
    <div className="relative">
     <img src={LightButton}
      alt=''
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`w-12 cursor-pointer drop-shadow transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
     />
      <img src={DarkButton}
      alt=''
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-12 cursor-pointer drop-shadow transition-all duration-300 "
      />

    </div>
  )
}

export default DarkMode