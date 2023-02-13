import Link from 'next/link'
import React, { useState } from 'react';

const CartList = ({carts}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = carts.slice(indexOfFirstData, indexOfLastData);

  const renderData = currentData.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.userId}</td>
        <td>{item.totalProducts}</td>
        <td>{item.totalQuantity}</td>
        <td>{item.total}</td>
        <td>{item.discountedTotal}</td>
        <td>
        <Link href='/carts/[id]' as={`/carts/${item.id}`}>
                <button className='btn btn-secondary btn-sm'>More Detail</button>
            </Link>
        </td>
    </tr>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(carts.length / perPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
      key={number}
      className={`page-item ${currentPage === number ? 'active' : ''}`}
      onClick={() => setCurrentPage(number)}
    >
       <a className="page-link" href="#">
        {number}
      </a>
      </li>
    );
  });

  return (
    <>
    <div className="table-responsive">
      <table className="table table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>User Id</th>
            <th>Total Products</th>
            <th>Total Quantity</th>
            <th>Price Before Discount</th>
            <th>Price After Discount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </table>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {renderPageNumbers}
        </ul>
      </nav>
    </>
  )
}

export default CartList
