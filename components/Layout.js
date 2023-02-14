import Sidebar from './Sidebar.js'
import Meta from './Meta'
const Layout = ({children}) => {
  const styles = {
    maxWidth: {
      maxWidth: "100%",
      marginLeft: "180px",
      "@media (max-width: 700px)": {
        marginLeft: "0"
      }
    }
  };

  return (
    <>
        <Meta />
        <div style={styles.maxWidth}>
          <Sidebar />
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
