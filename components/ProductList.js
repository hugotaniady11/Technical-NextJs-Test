import React, { useState } from 'react'

const ProductList = ({products}) => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique brands
  const uniqueBrands = [...new Set(products.map(product => product.brand))];
  // Get unique categories
  const uniqueCategories = [...new Set(products.map(product => product.category))];

 const handleBrandChange = event => {
  setSelectedBrand(event.target.value);
};
const handleCategoryChange = event => {
  setSelectedCategory(event.target.value);
};



// Filter products 
const filteredProducts = products
  .filter(product => product.brand === selectedBrand || !selectedBrand)
  .filter(product => product.category === selectedCategory || !selectedCategory)
  .filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

// Logic for displaying current products
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
       <div className='d-flex justify-content-end py-4'>
        <form className="form-inline my-2 my-lg-0 col-4">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          </form>
       </div>
       <div>
       <label htmlFor="brand-select">Brand:</label>
        <select
          id="brand-select"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">All</option>
          {uniqueBrands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <label htmlFor="category-select">Category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
        <option value="">All</option>
          {uniqueCategories.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        </div>

      <div className='py-4'>
        <div className='table-responsive'>
          <table className='table'>
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr className="text-center" key={index}>
              <td>{product.id}</td>
              <td className="text-start">{product.title}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>  
            </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div>
      <nav aria-label="Page navigation example">
            <ul className="pagination">
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
              <li 
              key={i}
              className="page-item" 
              onClick={() => paginate(i + 1)}>
                <a className="page-link" href="#">
                {i + 1}
                </a>
              </li>
        ))}
            </ul>
          </nav>
        
      </div>
    </div>
  )
}

export default ProductList
