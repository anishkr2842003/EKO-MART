import React, { useRef, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function AddCategory() {

  const [catname, setCatname] = useState("")
  const [stocks, setStocks] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)

  const fileInputRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData();

    formData.append("catname", catname)
    formData.append("image", image)
    formData.append("stocks", stocks)
    formData.append("description", description)

    if (!catname || !stocks || !description || !image) {
      toast.error("All fileds are required")
    } else {
      try {
        const response = await axios.post('https://eko-mart.onrender.com/api/addcategory', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        // console.log(response.data.message)
        setCatname("")
        setStocks("")
        setDescription("")
        setImage(null)
        fileInputRef.current.value = null
        toast.success(response.data.message)
      } catch (error) {
        console.error(error.response)
      }
    }
  }

  return (
    <>
      <form className="account-details-area" onSubmit={handleSubmit} encType="multipart/form-data">
        <h2 className="title">Account Details</h2>
        <div className="input-half-area">
          <div className="single-input">
            <input type="text" placeholder="Category Name" value={catname} onChange={(e) => setCatname(e.target.value)} />
          </div>
          <div className="single-input">
            <input type="number" placeholder="Total Stock" value={stocks} onChange={(e) => setStocks(e.target.value)} />
          </div>
        </div>
        <div style={{ margin: '20px 0' }}>
          <input
            type="file"
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
              backgroundColor: '#f9f9f9',
            }}
            ref={fileInputRef}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <input type="text" placeholder="Description" required value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className="rts-btn btn-primary" type='submit'>Save Change</button>
      </form>
      <ToastContainer autoClose={3000} closeButton={false} />
    </>
  )
}

export default AddCategory
