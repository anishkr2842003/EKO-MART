import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddProduct() {

  const [title,setTitle] = useState("");
  const [images,setImages] = useState([])
  const [description,setDescription] = useState("")
  const [category,setCategory] = useState("")
  const [brandName,setBrandName] = useState("")
  const [weight,setWeight] = useState("")
  const [originalprice,setOriginalPrice] = useState("")
  const [sellingprice,setSellingPrice] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const formData = new FormData();
    formData.append('title', title)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('brandname', brandName)
    formData.append('weight', weight)
    formData.append('originalprice', originalprice)
    formData.append('sellingprice', sellingprice)

    images.forEach((image)=> formData.append("images", image))

      // printing from data on console
      //   for(let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      try {
        const response = await axios.post('http://localhost:8000/api/addproduct', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        toast.success(response.data.message)
        console.log(response.data.message)
      } catch (error) {
        console.error(`Error in uploading product : ${error}`)
      }


  }


  return (
    <>
      <form onSubmit={handleSubmit}  className="account-details-area" encType="multipart/form-data">
        <h2 className="title">Add Product</h2>
        <div className="input-half-area">
          <div className="single-input">
            <input type="text" placeholder="Product name" value={title}  onChange={(e) => setTitle(e.target.value)}/>
          </div>
        </div>
        <div style={{ margin: '20px 0' }}>
          <input
            type="file"
            multiple
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
              backgroundColor: '#f9f9f9',
            }}
            onChange={(e) => setImages([...e.target.files])} 
          />
        </div>
        <input type="text" placeholder="Product Description" required value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <input type="text" placeholder="Product Category" required value={category} onChange={(e)=>setCategory(e.target.value)}/>
        <div className="input-half-area">
          <div className="single-input">
            <input type="text" placeholder="Brand name" value={brandName} onChange={(e)=>setBrandName(e.target.value)}/>
          </div>
          <div className="single-input">
            <input type="text" placeholder="Weight *" required value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
        </div>
        <div className="input-half-area">
          <div className="single-input">
            <input type="number" placeholder="Orignal Price" value={originalprice} onChange={(e)=>setOriginalPrice(e.target.value)}/>
          </div>
          <div className="single-input">
            <input type="number" placeholder="Selling Price" required value={sellingprice} onChange={(e)=>setSellingPrice(e.target.value)}/>
          </div>
        </div>
        <button className="rts-btn btn-primary" type='submit'>Save Change</button>
      </form>
      <ToastContainer autoClose={3000} closeButton={false}/>
    </>
  )
}

export default AddProduct
