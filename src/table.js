// import './index.css';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function Table() {
//   const [data, setData] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [editedEmployees, setEditedEmployees] = useState([]);
//   const [fetchName, setFetchName] = useState('');

//   useEffect(() => {
//     getData();
//     fetchEmployees();
//   }, []);

//   const getData = () => {
//     axios('https://jsonplaceholder.typicode.com/comments')
//       .then((res) => {
//         setData(res.data);
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

//   return (
//     <div className="tableWrap">
//       <h1 className="BP_name">Bluepage SyncUp</h1>
//       <button>Export</button>

//       <div className="EmployeeManagement">
//         <h2>Fetch Employee Details:</h2>
//         <label>
//           Enter employee name:
//           <input type="text" value={fetchName} onChange={handleFetchNameChange} />
//         </label>
//         <button onClick={handleFetchId}>Fetch Employee</button>
//         <h2>Edit Employee Details:</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Employee Serial#</th>
//               <th>Emp Name</th>
//               <th>Dept Code</th>
//               <th>Dept Name</th>
//               <th>IsManager?</th>
//               <th>Emp Type</th>
//               <th>Location Blue pages</th>
//               <th>Mgr Name</th>
//               <th>Leader Name</th>
//               <th>Diversity</th>
//               <th>Remarks</th>
//               <th>Work location</th>
//               <th>Date of Joining</th>
//               <th>Date of Leaving</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp._id}>
//                 <td>{emp['EmployeeSerial#']}</td>
//                 <td>{emp['Emp Name']}</td>
//                 <td>{emp['Dept Code']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Dept Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Dept Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Dept Name']
//                   )}
//                 </td>
//                 <td>{emp['IsManager?']}</td>
//                 <td>{emp['Emp Type']}</td>
//                 <td>{emp['Location Blue pages']}</td>
//                 <td>{emp['Mgr Name']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Leader Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Leader Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Leader Name']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Diversity']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Diversity', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Diversity']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Remarks']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Remarks', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Remarks']
//                   )}
//                 </td>
//                 <td>{emp['Work location']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Date of Joining']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Date of Joining', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Date of Joining']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Date of Leaving']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Date of Leaving', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Date of Leaving']
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={handleSaveEdits}>Save Edits</button>
//       </div>
//     </div>
//   );
// }

// export default Table;
//////////////////////////////////////////////

import './index.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [editedEmployees, setEditedEmployees] = useState([]);
  const [fetchName, setFetchName] = useState('');

  useEffect(() => {
    getData();
    fetchEmployees();
  }, []);

  const getData = () => {
    axios('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data);
      });
  };

  const fetchEmployees = () => {
    axios
      .get('http://localhost:5000/api/getEmployees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  };

  const handleFetchNameChange = (event) => {
    setFetchName(event.target.value);
  };

  const handleFetchId = () => {
    const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
    if (foundEmployee) {
      setEditedEmployees([...editedEmployees, foundEmployee]);
    }
  };

  const handleEditField = (event, field, empId) => {
    const updatedEmployees = editedEmployees.map((emp) => {
      if (emp._id === empId) {
        emp[field] = event.target.value;
      }
      return emp;
    });
    setEditedEmployees(updatedEmployees);
  };

  const handleSaveEdits = () => {
    axios
      .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
      .then((response) => {
        console.log(response.data.message);
        setEditedEmployees([]);
        fetchEmployees();
      })
      .catch((error) => {
        console.error('Error updating employees:', error);
      });
  };

  return (
    <div className="tableWrap">
      <h1 className="BP_name">Bluepage SyncUp</h1>
      <button>Export</button>

      <div className="EmployeeManagement">
        <h2>Fetch Employee Details:</h2>
        <label>
          Enter employee name:
          <input type="text" value={fetchName} onChange={handleFetchNameChange} />
        </label>
        <button onClick={handleFetchId}>Fetch Employee</button>
        <h2>Edit Employee Details:</h2>
        <table>
          <thead>
            <tr>
              <th>Employee Serial#</th>
              <th>Emp Name</th>
              <th>Dept Code</th>
              <th>Dept Name</th>
              <th>IsManager?</th>
              <th>Emp Type</th>
              <th>Location Blue pages</th>
              <th>Mgr Name</th>
              <th>Leader Name</th>
              <th>Diversity</th>
              <th>Remarks</th>
              <th>Work location</th>
              <th>Date of Joining</th>
              <th>Date of Leaving</th>
              <th>Employee Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp['EmployeeSerial#']}</td>
                <td>{emp['Emp Name']}</td>
                <td>{emp['Dept Code']}</td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Dept Name']}
                      onChange={(event) =>
                        handleEditField(event, 'Dept Name', emp._id)
                      }
                    />
                  ) : (
                    emp['Dept Name']
                  )}
                </td>
                <td>{emp['IsManager?'] || '-'}</td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Emp Type']}
                      onChange={(event) =>
                        handleEditField(event, 'Emp Type', emp._id)
                      }
                    />
                  ) : (
                    emp['Emp Type']
                  )}
                </td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Location Blue pages']}
                      onChange={(event) =>
                        handleEditField(event, 'Location Blue pages', emp._id)
                      }
                    />
                  ) : (
                    emp['Location Blue pages']
                  )}
                </td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Mgr Name']}
                      onChange={(event) =>
                        handleEditField(event, 'Mgr Name', emp._id)
                      }
                    />
                  ) : (
                    emp['Mgr Name']
                  )}
                </td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Leader Name']}
                      onChange={(event) =>
                        handleEditField(event, 'Leader Name', emp._id)
                      }
                    />
                  ) : (
                    emp['Leader Name']
                  )}
                </td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Diversity']}
                      onChange={(event) =>
                        handleEditField(event, 'Diversity', emp._id)
                      }
                    />
                  ) : (
                    emp['Diversity']
                  )}
                </td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Remarks']}
                      onChange={(event) =>
                        handleEditField(event, 'Remarks', emp._id)
                      }
                    />
                  ) : (
                    emp['Remarks']
                  )}
                </td>
                <td>{emp['Work location'] || '-'}</td>
                <td>{emp['Date of Joining'] || '-'}</td>
                <td>{emp['Date of Leaving'] || '-'}</td>
                <td>{emp['Employee Status'] || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSaveEdits}>Save Edits</button>
      </div>
    </div>
  );
}

export default Table;












// import './index.css';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function Table() {
//   const [data, setData] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [editedEmployees, setEditedEmployees] = useState([]);
//   const [fetchName, setFetchName] = useState('');

//   useEffect(() => {
//     getData();
//     fetchEmployees();
//   }, []);

//   const getData = () => {
//     axios('https://jsonplaceholder.typicode.com/comments')
//       .then((res) => {
//         setData(res.data);
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

//   return (
//     <div className="tableWrap">
//       <h1 className="BP_name">Bluepage SyncUp</h1>
//       <button>Export</button>

//       <div className="EmployeeManagement">
//         <h2>Fetch Employee Details:</h2>
//         <label>
//           Enter employee name:
//           <input type="text" value={fetchName} onChange={handleFetchNameChange} />
//         </label>
//         <button onClick={handleFetchId}>Fetch Employee</button>
//         <h2>Edit Employee Details:</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Employee Serial#</th>
//               <th>Emp Name</th>
//               <th>Dept Code</th>
//               <th>Dept Name</th>
//               <th>IsManager?</th>
//               <th>Emp Type</th>
//               <th>Location Blue pages</th>
//               <th>Mgr Name</th>
//               <th>Leader Name</th>
//               <th>Diversity</th>
//               <th>Remarks</th>
//               <th>Work location</th>
//               <th>Date of Joining</th>
//               <th>Date of Leaving</th>
//               <th>Employee Status</th> 
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp._id}>
//                 <td>{emp['EmployeeSerial#']}</td>
//                 <td>{emp['Emp Name']}</td>
//                 <td>{emp['Dept Code']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Dept Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Dept Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Dept Name']
//                   )}
//                 </td>
//                 <td>{emp['IsManager?'] || '-'}</td>
//                 <td>{emp['Emp Type'] || '-'}</td>
//                 <td>{emp['Location Blue pages'] || '-'}</td>
//                 <td>{emp['Mgr Name'] || '-'}</td>
//                 <td>{emp['Leader Name'] || '-'}</td>
//                 <td>{emp['Diversity'] || '-'}</td>
//                 <td>{emp['Remarks'] || '-'}</td>
//                 <td>{emp['Work location'] || '-'}</td>
//                 <td>{emp['Date of Joining'] || '-'}</td>
//                 <td>{emp['Date of Leaving'] || '-'}</td>
//                 <td>{emp['Employee Status'] || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={handleSaveEdits}>Save Edits</button>
//       </div>
//     </div>
//   );
// }

//export default Table;

