import React from "react";

function AccountDetails() {
  return (
    <>
      <form action="#" className="account-details-area">
          <h2 className="title">Account Details</h2>
          <div className="input-half-area">
            <div className="single-input">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="single-input">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <input type="text" placeholder="Display Name" required />
          <input type="email" placeholder="Email Address *" required />
          <input type="email" placeholder="Email Address *" />
          <input type="password" placeholder="Current Password *" required />
          <input type="password" placeholder="New Password *" />
          <input type="password" placeholder="Confirm Password *" />
          <button className="rts-btn btn-primary">Save Change</button>
        </form>
    </>
  );
}

export default AccountDetails;
