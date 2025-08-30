import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EmployeeManager.css";
const API_BASE = "http://127.0.0.1:8000"; // Change if backend URL is different

export default function EmployeeManager() {
  const [employees, setEmployees] = useState([]);
  const [newEmp, setNewEmp] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    role: "",
  });
  const [updateEmp, setUpdateEmp] = useState({
    id: "",
    email: "",
    password: "",
  });

  // Fetch all employees
 const fetchEmployees = async () => {
  try {
    const res = await axios.get(`${API_BASE}/get_emp/`);
    setEmployees(res.data.data || []);
  } catch (err) {
    console.error(err);
  }
};

  // Add employee
const handleAdd = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${API_BASE}/add_emp/`, newEmp);
    alert("Employee added successfully!");
    setNewEmp({ Firstname: "", Lastname: "", email: "", role: "" });
    fetchEmployees();
  } catch (err) {
    alert("Error adding employee: " + (err.response?.data?.error || err.message));
  }
};

  // Update employee
const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${API_BASE}/update_emp/`, updateEmp);
    alert("Employee updated successfully!");
    setUpdateEmp({ id: "", email: "", password: "" });
    fetchEmployees();
  } catch (err) {
    alert("Error updating employee: " + (err.response?.data?.error || err.message));
  }
};

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h1>Employee Management</h1>

      {/* Add Employee Form */}
      <form className="form" onSubmit={handleAdd}>
        <h2>Add Employee</h2>
        <input
          type="text"
          placeholder="First Name"
          value={newEmp.Firstname}
          onChange={(e) => setNewEmp({ ...newEmp, Firstname: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newEmp.Lastname}
          onChange={(e) => setNewEmp({ ...newEmp, Lastname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newEmp.email}
          onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={newEmp.role}
          onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })}
          required
        />
        <button type="submit">Add Employee</button>
      </form>

      {/* Update Employee Form */}
      <form className="form" onSubmit={handleUpdate}>
        <h2>Update Employee</h2>
        <input
          type="number"
          placeholder="Employee ID"
          value={updateEmp.id}
          onChange={(e) => setUpdateEmp({ ...updateEmp, id: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="New Email"
          value={updateEmp.email}
          onChange={(e) => setUpdateEmp({ ...updateEmp, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="New Password"
          value={updateEmp.password}
          onChange={(e) => setUpdateEmp({ ...updateEmp, password: e.target.value })}
          required
        />
        <button type="submit">Update Employee</button>
      </form>

      {/* Employee List */}
      <div className="list">
        <h2>All Employees</h2>
        {employees.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={idx}>
                  <td>{emp.id}</td>
                  <td>{emp.Firstname}</td>
                  <td>{emp.Lastname}</td>
                  <td>{emp.email}</td>
                  <td>{emp.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No employees found</p>
        )}
      </div>
    </div>
  );
}
