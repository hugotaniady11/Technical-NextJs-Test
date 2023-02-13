import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-light p-3 d-none d-md-block position-fixed" style={{top: '0', left: '0', bottom: '0', width: '180px'}}>
    <nav className="nav flex-column">
      <Link href="/" className='nav-link'>
       Products
      </Link>
      <Link href="/carts" className='nav-link'>
       Carts
      </Link>
    </nav>
  </aside>
  );
};

export default Sidebar;