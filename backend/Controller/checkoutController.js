import Razorpay from "razorpay";

const razorpayInstance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

export const createOrder = async (req, res) => {
  const { amount, currency } = req.body;
  const options = {
    amount: amount * 100,
    currency: currency || "INR",
    receipt: "unique",
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json({ message: "Order successfully", order: order });
  } catch (error) {
    res.status(500).json({ message: "No order created" });
  }
};
