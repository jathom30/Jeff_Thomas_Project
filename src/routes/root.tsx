import { Outlet } from 'react-router-dom'
import { Link } from '../components';
import './root.css'

export default function Root() {
  return (
    <div className='Root'>
      <aside>
        <nav className='Root__nav'>
          <Link to="movies">Movies</Link>
          <Link to="characters">Characters</Link>
          <Link to="quotes">Quotes</Link>
        </nav>
      </aside>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}