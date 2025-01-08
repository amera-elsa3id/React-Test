

import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <div className="container fixed-top ">
        <ul className="flex justify-around align-items-center ">
            <li>
            <NavLink to={''}>Home</NavLink>

            </li>
            <li>

            <NavLink to={'about'}>About</NavLink>
            </li>
            <li>
            <NavLink to={'parent'}>Parent</NavLink>

            </li>
        </ul>
    </div>
    </>
  )
}
