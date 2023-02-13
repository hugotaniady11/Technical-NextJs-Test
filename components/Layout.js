import Sidebar from './Sidebar.js'
import Meta from './Meta'

const Layout = ({children}) => {

  return (
    <>
        <Meta />
        <div className="ml-md-250" style={{marginLeft: '200px'}}>
          <Sidebar className="d-md-block d-none" />
          <div className='container mt-5'>
          <main>
              {children}
          </main>
          </div>
        </div>
    </>
  )
}

export default Layout
