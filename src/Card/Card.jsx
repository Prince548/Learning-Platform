import React, { useEffect } from "react";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFileInvoice, FaCalendarAlt, FaUsers } from "react-icons/fa";

const cardData = [
  {
    icon: <FaFileInvoice />,
    iconBg: "#4f7cf7",
    title: "Online Billing, Invoicing, & Contracts",
    desc: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"
  },
  {
    icon: <FaCalendarAlt />,
    iconBg: "#1ca74a",
    title: "Easy Scheduling & Attendance Tracking",
    desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
  },
  {
    icon: <FaUsers />,
    iconBg: "#19c6f7",
    title: "Customer Tracking",
    desc: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization"
  }
];

const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // smoother and more visible
  }, []);

  return (
    <div className="card-section">
      {cardData.map((card, idx) => (
        <div
          className="feature-card"
          data-aos="zoom-in-up"
          style={{ borderLeft: `8px solid ${card.iconBg}` }}
          key={idx}
        >
          <div className="icon-wrapper">
            <div className="card-icon" style={{ background: card.iconBg }}>
              {card.icon}
            </div>
          </div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-desc">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
