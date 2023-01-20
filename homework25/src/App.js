
import './App.css';

import Users from './modules/users/components/Users';
import Posts from './modules/posts/components/Posts';
import { useState } from 'react';
import Navigation from './modules/common/components/Navigation';
import Gallery from './modules/gallery/components/Gallery';


function App() {
    const [page, setPage] = useState('users');
      return (
        <div className='container'>
          <Navigation page={page} navigate={setPage}/>
          {page === 'users' ? <Users /> : null}
          {page === 'posts' ? <Posts /> : null}
          {page === 'gallery' ? <Gallery /> : null}
        </div>
    );
}

export default App;
