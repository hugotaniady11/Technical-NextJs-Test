import axios from "axios";
import Link from "next/link";

const cart = ({cart}) => {
  // const router = useRouter();
  // const {id} = router.query;
  // console.log(cart);
  return (
    <>
    <div>
      <h3 className='mb-4'>Cart: {cart.id}</h3>
      <h6>Details</h6>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          User: {cart.userId}
        </li>
        <li className="list-group-item">
          Add On
        </li>
        <li className="list-group-item">
          # of Items: {cart.totalQuantity}
        </li>
        <li className="list-group-item">
          Total: {cart.total}
        </li>
      </ul>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Discount Percentage</th>
              <th>Discounted Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.discountPercentage}</td>
                <td>{item.discountedPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    <br />
    <div>
      <Link href='/carts/'>
        <button className='btn btn-primary' type="button">Go Back</button>
      </Link>
    </div>
    </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await axios.get(`https://dummyjson.com/carts/${context.params.id}`);
  const cart = await res.data;
  return {
    props: {
      cart
    }
  }
}

export const getStaticPaths = async() => {
  const res = await axios.get(`https://dummyjson.com/carts`);
  const carts = await res.data.carts;

  const ids = carts.map((cart) => cart.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return{
    paths,
    fallback: false,
  }
}

export default cart
