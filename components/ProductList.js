import React, { useState } from 'react';
const ProductList = ({products}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [filter, setFilter] = useState('');
  // const [filterType, setFilterType] = useState('');
  const [sortColumn, setSortColumn] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  // const [loading, setLoading] = useState(false);

  const filteredData = products.filter((products) => {
    return products.title.toLowerCase().includes(filter.toLowerCase());
  })
  .sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  });

  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

  const renderData = currentData.map((item) => {
    return (
      <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td>{item.category}</td>  
          </tr>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / perPage); i++) {
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
    <div className='d-flex justify-content-end'>
      <form className="form-inline my-2 my-lg-0 col-4">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        </form>
      </div>
      <div className="table-responsive">
      <table className="table">
      <thead>
        <tr>
          <th onClick={() => setSortColumn('id')}>#</th>
          <th onClick={() => setSortColumn('title')}>Product Name</th>
          <th onClick={() => setSortColumn('brand')}>Brand</th>
          <th onClick={() => setSortColumn('price')}>Price</th>
          <th>Stock</th>
          <th onClick={() => setSortColumn('category')}>Category</th>
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

export default ProductList
