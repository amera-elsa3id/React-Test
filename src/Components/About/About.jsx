
import { NavLink, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <>
    <div className='flex '>
      <div className="w-1/4">
      <ul className='flex gap-3'>
        <li>
          <NavLink to={''}>Gallery</NavLink>
        </li>
        <li>
          <NavLink to={'ux'}>Ux</NavLink>
        </li>
      </ul>
      </div>
      <div className="w-3/4">
      <Outlet/>
      </div>
    </div>
    </>
  )
}
