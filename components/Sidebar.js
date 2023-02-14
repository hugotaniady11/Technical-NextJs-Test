import React from 'react';
import Link from 'next/link';

const Sidebar = () => {

  const styles = {
    sidebar: {
      display: "block",
      "@media (max-width: 700px)": {
        display: "none"
      }
    }
  };

  return (
    <div style={styles.sidebar}>
      <aside className="bg-light p-5 d-md-block d-none d-md-block position-fixed " style={{top: '0', left: '0', bottom: '0', width: '160px'}}>
    <nav className="nav flex-column">
    <ul className="navbar-nav">
      <li className='nav-item'>
        <Link href="/" className='nav-link'>
          <h6>Products</h6>
        </Link>
        </li>
      <li className='nav-item'>
        <Link href="/carts" className='nav-link'>
        <h6>Carts</h6>
        </Link>
        </li>

      </ul>
      
      
    </nav>
  </aside>
    </div>
  );
};

export default Sidebar;