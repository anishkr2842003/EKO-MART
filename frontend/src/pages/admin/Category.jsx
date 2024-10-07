import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

const Category = () => {

  const [categories,setCategories] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const fetchCategories = async()=>{
      try {
        const response = await axios.get('http://localhost:8000/api/allcategory');
          setCategories(response.data.categories);
        setLoading(false)
        // console.log(response)
      } catch (error) {
        setLoading(false)
        console.log(`Error in fetching category data`)
      }
    }
    fetchCategories()
  },[])

  if(loading){
    return (
      <div><h2>Loading...</h2></div>
    )
  }

  return (
    <div>
      <h5>Product Category ({categories.length})</h5>
      <ProductTable>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Category Name</th>
            {/* <th>Starting Price</th> */}
            <th>Total Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          categories.length > 0 ? categories.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.catname}</td>
              {/* <td>${category.price}</td> */}
              <td>{category.stocks}</td>
              <td>
                {/* <button className="see-btn">See</button> */}
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          )) : <tr><td colSpan={4}><h4>No category found</h4></td></tr>
          }
        </tbody>
      </ProductTable>
    </div>
  );
};

export default Category;
