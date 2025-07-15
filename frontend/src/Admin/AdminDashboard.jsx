import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext';
import './AdminDashBoard.css'
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_BASE_URL;


const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const navigate = useNavigate()

  const fetchBookings = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await fetch(`${API}/admin/All_bookings`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.access_token || token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setAppointments(data);
      } else {
        alert("❌ Failed to fetch appointments");
        console.error(data);
      }
    } catch (error) {
      console.error("❌ Error Occurred:", error);
      alert("❌ Network error occurred while fetching appointments");
    } finally {
      setLoading(false);
    }
  };


  const handleStatusChange = async (newStatus, id) => {
  const token = localStorage.getItem("access_token");

  // Optimistically update the UI
  const updatedAppointments = appointments.map((appoint) =>
    appoint.id === id ? { ...appoint, status: newStatus } : appoint
  );
  setAppointments(updatedAppointments);

  try {
    const response = await fetch(`${API}/admin/status_update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.access_token || token}`,
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (!response.ok) {
      alert("❌ Failed to update status");
      // Optionally roll back the UI
      setAppointments(appointments); // restore previous state
    }
  } catch (error) {
    console.error("❌ Error updating status:", error);
    setAppointments(appointments); // restore previous state
  }
};


  const handleDelete = async (id) => {
  const token = localStorage.getItem("access_token");
  const deleteInfo = window.confirm("Do you want to delete?");
  if (!deleteInfo) return;

  // 1. Optimistically remove the item from UI
  const originalAppointments = [...appointments];
  const updatedAppointments = appointments.filter(appoint => appoint.id !== id);
  setAppointments(updatedAppointments);

  try {
    const response = await fetch(`${API}/admin/Delete_Booking/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.access_token || token}`,
      },
    });

    if (!response.ok) {
      alert("❌ Failed to delete");
      // 2. If it failed, rollback the UI
      setAppointments(originalAppointments);
    }
  } catch (error) {
    console.error("❌ Error deleting:", error);
    // 3. On error, rollback
    setAppointments(originalAppointments);
  }
};


  

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>All Appointments</h2>
      <button className='btn check-website-btn' onClick={()=> navigate("/")}>Check my website</button>
      {loading ? (
        <p>Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="card-grid">
          {appointments.map((appoint, index) => (
            <div key={index} className="booking-card">
              <h3>Client: {appoint.fullname}</h3>
              <p><strong>Phone:</strong> {appoint.phone_number}</p>
              <p><strong>Email:</strong> {appoint.email}</p>
              <p><strong>Service:</strong> {appoint.service}</p>
              <p><strong>Appointment time:</strong> { new Date(appoint.appointment_time).toLocaleString()}</p>
              <p><strong>Created at:</strong> { new Date(appoint.created_at).toLocaleString()}</p>
              <select className={`status ${appoint.status.toLowerCase()}`} value={appoint.status} onChange={(e)=> handleStatusChange(e.target.value, appoint.id)}>
                <option value="pending">pending</option>
                <option value="confirmed">confirmed</option>
                <option value="cancelled">cancelled</option>
              </select>
              <button className='email-btn' onClick={() => navigate(`/dashboard/send-email/${appoint.id}`)}>Send email</button>
              <button className='delete-btn btn' onClick={()=> handleDelete(appoint.id)}>Delete Client </button>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );

};
export default AdminDashboard;
