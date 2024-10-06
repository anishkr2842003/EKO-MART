import React from 'react'

function AddCategory() {
  return (
    <>
      <form action="#" className="account-details-area">
          <h2 className="title">Account Details</h2>
          <div className="input-half-area">
            <div className="single-input">
              <input type="text" placeholder="Category Name" />
            </div>
            <div className="single-input">
              <input type="number" placeholder="Total Stock" />
            </div>
          </div>
          <input type="text" placeholder="Description" required />
          <button className="rts-btn btn-primary">Save Change</button>
        </form>
    </>
  )
}

export default AddCategory
