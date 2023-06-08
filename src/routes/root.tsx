import { Outlet, useLocation } from 'react-router-dom'
import { Link } from '../components';
import './root.css'

export default function Root() {
  const { pathname } = useLocation()
  return (
    <div className='Root'>
      <aside>
        <nav className='Root__nav'>
          <Link to="movies" isActive={pathname.includes('movies')}>Movies</Link>
          <Link to="characters" isActive={pathname.includes('characters')}>Characters</Link>
          <Link to="quotes" isActive={pathname.includes('quotes')}>Quotes</Link>
        </nav>
      </aside>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}