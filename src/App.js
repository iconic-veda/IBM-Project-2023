// import React from 'react';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
// //import './styles.css';
// import Login from './Login'; 
// import Header from './header';
// import Home from './Home'; 
// import Dashboards from './Dashboards';
// import Table from './table';  // Import the Table component

// function App() {
//   return (
//     <Router>
//       <div className="App bg-gradient">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/home" element={<div><Header /><Home /></div>} />
//           <Route path="/table" element={<div><Header /><Table /></div>} /> {/* Use the Table component */}
//           <Route path="/dashboards" element={<div><Header /><Dashboards /></div>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// ////////////////////////////////// MY TABLE:
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Login from './Login'; 
import Header from './header';
import Home from './Home'; 
import Dashboards from './Dashboards';
import Table from './table';  // Update the import to match your filename

function App() {
  return (
    <Router>
      <div className="App bg-gradient">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<div><Header /><Home /></div>} />
          <Route path="/table" element={<div><Header /><Table /></div>} />
          <Route path="/dashboards" element={<div><Header /><Dashboards /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import axios from 'axios';
// import './index.css';
// import './styles.css';
// import Login from './Login'; 
// import Header from './header';
// import Home from './Home'; 
// import Table from './table';
// import Dashboards from './Dashboards';

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [editedEmployees, setEditedEmployees] = useState([]);
//   const [fetchName, setFetchName] = useState('');

//   const handleFetchNameChange = (event) => {
//     setFetchName(event.target.value);
//   };

//   const handleFetchId = () => {
//     const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
//     if (foundEmployee) {
//       setEditedEmployees([...editedEmployees, foundEmployee]);
//     }
//   };

//   const handleEditField = (event, field, empId) => {
//     const updatedEmployees = editedEmployees.map((emp) => {
//       if (emp._id === empId) {
//         emp[field] = event.target.value;
//       }
//       return emp;
//     });
//     setEditedEmployees(updatedEmployees);
//   };

//   const handleSaveEdits = () => {
//     axios
//       .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
//       .then((response) => {
//         console.log(response.data.message);
//         setEditedEmployees([]);
//         fetchEmployees();
//       })
//       .catch((error) => {
//         console.error('Error updating employees:', error);
//       });
//   };

//   const fetchEmployees = () => {
//     axios
//       .get('http://localhost:5000/api/getEmployees')
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching employees:', error);
//       });
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   return (
//     <Router>
//       <div className="App bg-gradient">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/home" element={<div><Header /><Home /></div>} />
//           <Route path="/table" element={<div><Header /><Table /></div>} />
//           <Route path="/dashboards" element={<div><Header /><Dashboards /></div>} />
//         </Routes>

//         {/* Employee Management */}
//         <div className="EmployeeManagement">
//           <h1>Employee Information</h1>
//           <h2>Fetch Employee Details:</h2>
//           <label>
//             Enter employee name:
//             <input type="text" value={fetchName} onChange={handleFetchNameChange} />
//           </label>
//           <button onClick={handleFetchId}>Fetch Employee</button>
//           <h2>Edit Employee Details:</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee Serial#</th>
//                 <th>Emp Name</th>
//                 <th>Dept Code</th>
//                 <th>Dept Name</th>
//                 <th>IsManager?</th>
//                 <th>Emp Type</th>
//                 <th>Location Blue pages</th>
//                 <th>Mgr Name</th>
//                 <th>Leader Name</th>
//                 <th>Diversity</th>
//                 <th>Remarks</th>
//                 <th>Work location</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((emp) => (
//                 <tr key={emp._id}>
//                   <td>{emp['EmployeeSerial#']}</td>
//                   <td>{emp['Emp Name']}</td>
//                   <td>{emp['DeptCode']}</td>
//                   <td>
//                     {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                       <input
//                         type="text"
//                         value={emp['Dept Name']}
//                         onChange={(event) =>
//                           handleEditField(event, 'Dept Name', emp._id)
//                         }
//                       />
//                     ) : (
//                       emp['Dept Name']
//                     )}
//                   </td>
//                   <td>{emp['IsManager?']}</td>
//                   <td>{emp['Emp Type']}</td>
//                   <td>{emp['Location Blue pages']}</td>
//                   <td>{emp['Mgr Name']}</td>
//                   <td>
//                     {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                       <input
//                         type="text"
//                         value={emp['Leader Name']}
//                         onChange={(event) =>
//                           handleEditField(event, 'Leader Name', emp._id)
//                         }
//                       />
//                     ) : (
//                       emp['Leader Name']
//                     )}
//                   </td>
//                   <td>
//                     {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                       <input
//                         type="text"
//                         value={emp['Diversity']}
//                         onChange={(event) =>
//                           handleEditField(event, 'Diversity', emp._id)
//                         }
//                       />
//                     ) : (
//                       emp['Diversity']
//                     )}
//                   </td>
//                   <td>
//                     {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                       <input
//                         type="text"
//                         value={emp['Remarks']}
//                         onChange={(event) =>
//                           handleEditField(event, 'Remarks', emp._id)
//                         }
//                       />
//                     ) : (
//                       emp['Remarks']
//                     )}
//                   </td>
//                   <td>{emp['Work location']}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <button onClick={handleSaveEdits}>Save Edits</button>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [employees, setEmployees] = useState([]);
//   const [editedEmployees, setEditedEmployees] = useState([]);
//   const [fetchName, setFetchName] = useState('');

//   const handleFetchNameChange = (event) => {
//     setFetchName(event.target.value);
//   };

//   const handleFetchId = () => {
//     const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
//     if (foundEmployee) {
//       setEditedEmployees([...editedEmployees, foundEmployee]);
//     }
//   };

//   const handleEditField = (event, field, empId) => {
//     const updatedEmployees = editedEmployees.map((emp) => {
//       if (emp._id === empId) {
//         emp[field] = event.target.value;
//       }
//       return emp;
//     });
//     setEditedEmployees(updatedEmployees);
//   };

//   const handleSaveEdits = () => {
//     axios
//       .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
//       .then((response) => {
//         console.log(response.data.message);
//         setEditedEmployees([]);
//         fetchEmployees();
//       })
//       .catch((error) => {
//         console.error('Error updating employees:', error);
//       });
//   };

//   const fetchEmployees = () => {
//     axios
//       .get('http://localhost:5000/api/getEmployees')
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching employees:', error);
//       });
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Employee Information</h1>
//       <h2>Fetch Employee Details:</h2>
//       <label>
//         Enter employee name:
//         <input type="text" value={fetchName} onChange={handleFetchNameChange} />
//       </label>
//       <button onClick={handleFetchId}>Fetch Employee</button>
//       <h2>Edit Employee Details:</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Employee Serial#</th>
//             <th>Emp Name</th>
//             <th>Dept Code</th>
//             <th>Dept Name</th>
//             <th>IsManager?</th>
//             <th>Emp Type</th>
//             <th>Location Blue pages</th>
//             <th>Mgr Name</th>
//             <th>Leader Name</th>
//             <th>Diversity</th>
//             <th>Emp Type</th>
//             <th>Work location</th>
//             <th>Remarks</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp._id}>
//               <td>{emp['EmployeeSerial#']}</td>
//               <td>{emp['Emp Name']}</td>
//               <td>{emp['DeptCode']}</td>
//               <td>
//                 {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                   <input
//                     type="text"
//                     value={emp['Dept Name']}
//                     onChange={(event) =>
//                       handleEditField(event, 'Dept Name', emp._id)
//                     }
//                   />
//                 ) : (
//                   emp['Dept Name']
//                 )}
//               </td>
//               <td>{emp['IsManager?']}</td>
//               <td>{emp['Emp Type']}</td>
//               <td>{emp['Location Blue pages']}</td>
//               <td>{emp['Mgr Name']}</td>
//               <td>
//                 {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                   <input
//                     type="text"
//                     value={emp['Leader Name']}
//                     onChange={(event) =>
//                       handleEditField(event, 'Leader Name', emp._id)
//                     }
//                   />
//                 ) : (
//                   emp['Leader Name']
//                 )}
//               </td>
//               <td>
//                 {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                   <input
//                     type="text"
//                     value={emp['Diversity']}
//                     onChange={(event) =>
//                       handleEditField(event, 'Diversity', emp._id)
//                     }
//                   />
//                 ) : (
//                   emp['Diversity']
//                 )}
//               </td>
//               <td>
//                 {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                   <input
//                     type="text"
//                     value={emp['Remarks']}
//                     onChange={(event) =>
//                       handleEditField(event, 'Remarks', emp._id)
//                     }
//                   />
//                 ) : (
//                   emp['Remarks']
//                 )}
//               </td>

//               <td>{emp['Emp Type']}</td>
//               <td>{emp['Work location']}</td>
//               <td>{emp['Remarks']}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleSaveEdits}>Save Edits</button>
//     </div>
//   );
// };

// export default App;
