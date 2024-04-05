import React, { Children } from 'react'
import Sidebar from './Sidebar'
import NavbarComponent from './Navbar';

const Layout = (( Children) => { 
  return (
    <div>
      <React.Fragment>
        <NavbarComponent />
        <div class="columns mt-6">
            <div class="column is-2">
                <Sidebar/>
            </div>
            <div class="column has-background-light">
                <main className='mt-5'>{Children}</main>
            </div>
        </div>
      </React.Fragment>
    </div>
  );
});

export default Layout
