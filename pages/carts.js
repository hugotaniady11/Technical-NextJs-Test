import axios from 'axios'
import CartList from '@/components/CartList'

const cart = ({ carts }) => {
  return (
    <>
    <div>
      <h3 className='mb-4'>Cart List Admin Dashboard</h3>
      <CartList carts={carts}/>
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`https://dummyjson.com/carts/`)
  const carts = await res.data.carts;

  return {
    props: {
      carts
    }
  }
}

export default cart
