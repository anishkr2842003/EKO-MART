import React from 'react';
import styled from 'styled-components';

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 15px;
  text-align: left;

  th, td {
    padding: 12px 15px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
    color: #333;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  td button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }

  .see-btn {
    background-color: #4CAF50;
    color: white;
  }

  .edit-btn {
    background-color: #FFC107;
    color: white;
  }

  .delete-btn {
    background-color: #F44336;
    color: white;
  }
`;

const products = [
  { id: 1, name: 'Product 1', price: 100, category: 'Category A' },
  { id: 2, name: 'Product 2', price: 150, category: 'Category B' },
  { id: 3, name: 'Product 3', price: 200, category: 'Category A' },
  // Add more products as needed
];

const Category = () => {
  return (
    <div>
      <h5>Product List</h5>
      <ProductTable>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Category Name</th>
            <th>Starting Price</th>
            <th>Total Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                {/* <button className="see-btn">See</button> */}
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </div>
  );
};

export default Category;
