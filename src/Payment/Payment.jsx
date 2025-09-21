import React, { useState } from "react";
import styles from "./Payment.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course || {
    title: "Unknown Course",
    desc: "No course description.",
  };

  const [form, setForm] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
    bank: "",
    paymentMethod: "card", // default selected method
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment successful for ${course.title} using ${form.paymentMethod}`);
    navigate("/dashboard");
  };

  return (
    <div className={styles.paymentWrapper}>
      <div className={styles.paymentCard}>
        <h2>💳 Payment for {course.title}</h2>
        <p className={styles.desc}>{course.desc}</p>

        <form onSubmit={handleSubmit}>
          {/* Payment Method Dropdown */}
          <label>Select Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
          >
            <option value="card">Credit / Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
          </select>

          {/* Credit / Debit Card Fields */}
          {form.paymentMethod === "card" && (
            <>
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                value={form.cardNumber}
                onChange={handleChange}
                required
              />

              <label>Expiry Date</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                required
              />

              <label>CVV</label>
              <input
                type="password"
                name="cvv"
                placeholder="***"
                value={form.cvv}
                onChange={handleChange}
                required
              />
            </>
          )}

          {/* UPI Field */}
          {form.paymentMethod === "upi" && (
            <>
              <label>UPI ID</label>
              <input
                type="text"
                name="upiId"
                placeholder="yourname@upi"
                value={form.upiId}
                onChange={handleChange}
                required
              />
            </>
          )}

          {/* Net Banking Field */}
          {form.paymentMethod === "netbanking" && (
            <>
              <label>Select Bank</label>
              <select
                name="bank"
                value={form.bank}
                onChange={handleChange}
                required
              >
                <option value="">--Select Bank--</option>
                <option value="SBI">State Bank of India</option>
                <option value="ICICI">ICICI Bank</option>
                <option value="HDFC">HDFC Bank</option>
                <option value="AXIS">Axis Bank</option>
              </select>
            </>
          )}

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
