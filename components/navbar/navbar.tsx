import React from "react"


const Navbar:React.FC = () =>{

    return(
    <nav>
        <div className="bg-slate-900 max-w-7xl mx-auto px-4 flex justify-center">
        <ul className="flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>
    </nav>)
}

export default Navbar;