import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import "../../style/CurdFrom.css";
import { BsArrowDown, BsArrowDownUp } from "react-icons/bs";
import Addfrom from "./Addfrom";
import Autosuggest from "react-autosuggest";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineDash } from "react-icons/ai";
import { BsArrowUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { HiViewColumns } from "react-icons/hi2";
import Toggle from "react-toggle";
import { FaFilter } from "react-icons/fa";

import "react-toggle/style.css";
import {
  DeleteFrom,
  UpdateFrom,
  deleteCheckbox,
  importdata,
  searchEmployees,
} from "../ReduxToolkit/Curdslice";
import { number } from "yup";

function Curd() {
  const { data } = useSelector((state) => state.AddFrom);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const colums = [
    "id",
    "name",
    "username",
    "gender",
    "dob",
    "state",
    "city",
    "email",
    "actions",
  ];
  const selectcol = ["name", "username", "dob", "state", "city", "email"];
  const [formData, setFormData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setopen] = useState(false);
  const iconRef = useRef(null);
  const [rows, setrows] = useState(data);
  const [cols, setcols] = useState(colums);
  const [Dragover, setDragover] = useState("");
  const [sortedcolumn, setsortedcolumn] = useState("name");
  const [sortorder, setsortorder] = useState("asc");
  const [selectedRows, setSelectedRows] = useState([]);
  const [opencolum, setopencolum] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filtermonth, setfiltermonth] = useState("");
  const [filterdate, setfilterdate] = useState("");
  const [filteryear, setfilteryear] = useState("");
 //ifinity scrolling
 const[page,setpage]=useState(1)
 const[isloading,setisloading]=useState(false)
 const[error,iserror]=useState(null)
 
  const [columnvisibal, setcolumnvisibal] = useState({
    id: true,
    name: true,
    username: true,
    gender: true,
    dob: true,
    state: true,
    city: true,
    Address: true,
    email: true,
    actions: true,
  });
  const [filteropen, setfilteropen] = useState(false);

  //useEffect(() => {}, [setSelectedRows]);
  //inputbox for filter using dropdown list
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employeeData")) || [];
    dispatch(importdata(storedData));
    
  }, []);

  useEffect(() => {
    localStorage.setItem("employeeData", JSON.stringify(data));
  }, [data]);
  const handleSearch = (event, { newValue }) => {
    setSearchQuery(newValue);
    console.log(event);
  };

  const DisplaySuggestiondata = ({ value }) => {
    dispatch(searchEmployees(value));
  };

  const getSuggestions = () => {
    return data
      .filter((emp) => {
        const empData = `${emp.name} ${emp.username} ${emp.email} ${emp.Address}`;
        return empData.toLowerCase().includes(searchQuery.toLowerCase());
      })
      .map((emp) => emp.username);
  };

  useEffect(() => {
    setrows(data);
  }, [data]);

  const renderSuggestion = (suggestion) => {
    return <div>{suggestion}</div>;
  };

  const inputProps = {
    placeholder: "Search employees...",
    value: searchQuery,
    onChange: handleSearch,
  };

  const openModal = (isEditing, data, index) => {
    setIsEditing(isEditing);
    setFormData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handelclearsuggestions = () => {
    setSearchQuery("");
  };

  function download_csv_file() {
    var csv = "name,  username,,gender,dob, state, city, Address,email,\n";
    data.forEach(function (row) {
      csv += Object.values(row).join(",");
      csv += "\n";
    });

    // document.write(csv);

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = "EmployeeList.csv";
    hiddenElement.click();
  }

  function CSVToArray(csvText) {
    const lines = csvText.split("\n");
    const result = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");
      if (values.length === 10) {
        const [id, name, username, gender, dob, state, city, email] = values;
        result.push({
          id,
          name,
          username,
          gender,
          dob,
          state,
          city,
          email,
        });
      }
    }
    return result;
  }

  //The contains() method in JavaScript is used to check if a particular element is a descendant of another specified element. In the context of handling click events and checking if the click occurred outside a specific element, contains() is often used to determine if the clicked element is a descendant of the target element.
  useEffect(() => {
    function handleClickOutside(event) {
      if (iconRef.current && !iconRef.current.contains(event.target)) {
        console.log(!iconRef.current.contains(event.target));
        if (iconRef.current) {
          console.log("change icon");
          setopen(false);
          setopen(open);
        } else {
          console.log("error");
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [iconRef]);

  //useClickOutside(colsedropdown)

  const handleImportCSV = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const csvData = event.target.result;
          const parsedData = CSVToArray(csvData);
          dispatch(importdata(parsedData));
          console.log(parsedData);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  //drage cloums in table
  const handelDragStart = (e) => {
    const { id } = e.target;
    console.log(id);
    const inof = cols.indexOf(id);
    console.log(inof);
    e.dataTransfer.setData("colid", inof);
    // console.log( e.dataTransfer.setData("colid",inof));
  };
  const handleDragover = (e) => {
    e.preventDefault();
  };

  const handelDragEnter = (e) => {
    const { id } = e.target;

    setDragover(id);
  };
  const handeldrop = (e) => {
    const { id } = e.target;
    const dropid = cols.indexOf(id);
    console.log(dropid);
    //  const dropid=dragid.dataTransfer(id)
    const dragid = e.dataTransfer.getData("colid");
    console.log(dragid);
    const tempcol = [...cols];
    tempcol[dragid] = cols[dropid];
    tempcol[dropid] = cols[dragid];
    setcols(tempcol);
    setDragover("");
    console.log(tempcol);

    //console.log(dropid);
    //in tempcol  store drang and drop ids and in state store this tempary cols
  };
  console.log(sortedcolumn);
  console.log(sortorder);

  const toggleSortingOrder = (col) => {
    const newSortOrder =
      col === sortedcolumn && sortorder === "asc" ? "desc" : "asc";
    setsortedcolumn(col);
    console.log(col);
    setsortorder(newSortOrder);
    console.log(newSortOrder);

    const sorted = [...data].sort((a, b) =>
      newSortOrder === "asc"
        ? a[col].toLowerCase() > b[col].toLowerCase()
          ? 1
          : -1
        : a[col].toLowerCase() < b[col].toLowerCase()
        ? 1
        : -1
    );

    setrows(sorted);
    console.log(sorted);
  };

  //select multipal row checkbox
  const handleCheckboxChange = (id) => {
    const updatedSelectedRows = [...selectedRows];

    if (updatedSelectedRows.includes(id)) {
      const index = updatedSelectedRows.indexOf(id);
      updatedSelectedRows.splice(index, 1);
    } else {
      updatedSelectedRows.push(id);
    }

    setSelectedRows(updatedSelectedRows);
    console.log(updatedSelectedRows);
  };

  const handleHeaderCheckboxChange = () => {
    const updatedSelectedRows =
      selectedRows.length === rows.length ? [] : rows.map((row) => row.id);

    setSelectedRows(updatedSelectedRows);
  };

  const handleShowDeleteModal = (id) => {
    if (data.length === 0) {
      Swal.fire({
        text: "Enter Some Data",
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //in the my store data is delete with icon and

          dispatch(DeleteFrom(id));

          if (selectedRows !== id) {
            dispatch(deleteCheckbox(selectedRows));
            console.log("delete from redux store");
          } else {
            console.log("not delete");
          }

          Swal.fire({
            title: "Deleted!",
            text: "Your data has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };

  const handleColumnChange = (e) => {
    setSelectedColumn(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setSelectedOperator(e.target.value);
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
    if (selectedOperator === "equal month") {
      setfiltermonth(e.target.value);
    } else if (selectedOperator === "equal date") {
      setfilterdate(e.target.value);
    } else if (selectedOperator === "equal year") {
      setfilteryear(e.target.value);
    }
  };

  const applyFilter = () => {
    const filteredRows = [...data].filter((row) => {
      console.log("selectedcolum:=>", selectedColumn);
      console.log("selectedOperater:=>", selectedOperator);
      console.log("filtervalue", filterValue);

      if (
        (selectedColumn === "name" ||
          selectedColumn === "username" ||
          selectedColumn === "state" ||
          selectedColumn === "city" ||
          selectedColumn === "dob" ||
          selectedColumn === "email") &&
        selectedOperator === "equal"
      ) {
        return row[selectedColumn] === filterValue;
      } else if (
        (selectedColumn === "name" ||
          selectedColumn === "username" ||
          selectedColumn === "state" ||
          selectedColumn === "city" ||
          selectedColumn === "email") &&
        selectedOperator === "start with"
      ) {
        const name = row[selectedColumn];
        const filterval = filterValue.toLocaleLowerCase();

        return name.toLocaleLowerCase().startsWith(filterval);
      } else if (
        (selectedColumn === 'name"' ||
          selectedColumn === "username" ||
          selectedColumn === "state" ||
          selectedColumn === "city") &&
        selectedOperator === "end with"
      ) {
        const endname = row[selectedColumn];
        const filterEnd = filterValue.toLocaleLowerCase();
        return endname.toLocaleLowerCase().endsWith(filterEnd);
      } else if (
        (selectedColumn === "name" ||
          selectedColumn === "username" ||
          selectedColumn === "state" ||
          selectedColumn === "city" ||
          selectedColumn === "email") &&
        selectedOperator === "is not equal"
      ) {
        const endname = row[selectedColumn];
        const filterEnd = filterValue.toLocaleLowerCase();
        return endname.toLocaleLowerCase() !== filterEnd;
      } else if (
        (selectedColumn === "name" ||
          selectedColumn === "username" ||
          selectedColumn === "state" ||
          selectedColumn === "city" ||
          selectedColumn === "email") &&
        selectedOperator === "contain"
      ) {
        const endname = row[selectedColumn];
        const filterEnd = filterValue.toLocaleLowerCase();
        return endname.toLocaleLowerCase().includes(filterEnd);
      } else if (
        (selectedColumn === "name" ||
          selectedColumn === "username" ||
          selectedColumn === "state" ||
          selectedColumn === "city" ||
          selectedColumn === "email") &&
        selectedOperator === "not contain"
      ) {
        const endname = row[selectedColumn];
        const filterEnd = filterValue.toLocaleLowerCase();
        return endname.toLocaleLowerCase().indexOf(filterEnd) < 0;
      } else if (
        selectedColumn === "dob" &&
        selectedOperator === "equal month"
      ) {
        const birthdate = new Date(row[selectedColumn]);
        const selectedMonth = parseInt(filtermonth, 10);
        return birthdate.getMonth() + 1 === selectedMonth;
      } else if (
        selectedColumn === "dob" &&
        selectedOperator === "equal date"
      ) {
        const birthdate = new Date(row[selectedColumn]);
        const selectedMonth = parseInt(filterdate, 10);
        return birthdate.getDate() === selectedMonth;
      } else if (
        selectedColumn === "dob" &&
        selectedOperator === "equal year"
      ) {
        const birthdate = new Date(row[selectedColumn]);
        const selectedYear = parseInt(filteryear, 10);

        return birthdate.getFullYear() === selectedYear;
      } else if (
        selectedColumn === "dob" &&
        selectedOperator === "is not equal"
      ) {
        const birthdate = new Date(row[selectedColumn]);

        const filterDate = new Date(filterValue);

        return birthdate.getTime() !== filterDate.getTime();
      }

    

      return false;
    });
    if (filteredRows.length === 0) {
      Swal.fire({
        text: "No data found with the specified filter criteria.",
      });
    } else {
      setrows(filteredRows);
      setSelectedColumn("");
      setSelectedOperator("");
      setFilterValue("");
      setfilteropen(true);
      console.log(filteredRows);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isloading) {
      return;
    }
    
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isloading]);
  return (
    <>
      <div className="table-title w-10" style={{ backgroundColor: "gray" }}>
        <div className="row " style={{ background: "black" }}>
          <div className="col-sm-7" style={{ marginTop: "20px" }}>
            <h2 style={{ color: "white", marginRight: "340px" }}>
              Manage <b>Employees</b>
            </h2>
          </div>

          <div
            className="col-sm-4 flexs"
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
            onScroll={handleScroll}
          >
            <Button
              onClick={() => openModal(false)}
              className="btn btn-success"
              style={{ width: "230px", marginTop: "5px", marginRight: "10px" }}
            >
              <span>Add </span>
            </Button>
            <Button
              onClick={download_csv_file}
              className="btn btn-warning"
              style={{ width: "120px", marginTop: "5px", marginRight: "10px" }}
            >
              <span>Export</span>
            </Button>
            <Button
              onClick={handleImportCSV}
              className="btn btn-danger"
              style={{ width: "100px", marginTop: "5px" }}
            >
              <span>Import</span>
            </Button>
            <h1 style={{ color: "white", marginBottom: "45px" }}>
              {data.length}
            </h1>
          </div>
        </div>
      </div>

      <div
        className="input-1"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "320px",
        }}
      >
        <Autosuggest
          suggestions={getSuggestions()}
          onSuggestionsFetchRequested={DisplaySuggestiondata}
          onSuggestionsClearRequested={handelclearsuggestions}
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          style={{ flex: 1 }}
        />
        <Button
          onClick={(id) => handleShowDeleteModal(id)}
          className="btn btn-success"
          style={{ margin: "5px", height: "30px" }}
        >
          Delete All
        </Button>

        <div>
          <HiViewColumns
            onClick={() => setopencolum(!opencolum)}
            style={{ height: "40px", width: "30px" }}
          />

          {opencolum && (
            <div className="column_box">
              {colums.map((col) => (
                <th
                  className="th1"
                  key={col}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <>
                    {col == "actions" ? (
                      ""
                    ) : (
                      <>
                        {col}
                        <Toggle
                          checked={columnvisibal[col]}
                          onChange={() =>
                            setcolumnvisibal((prev) => ({
                              ...prev,
                              [col]: !prev[col],
                            }))
                          }
                        />
                      </>
                    )}
                  </>
                </th>
              ))}
            </div>
          )}
        </div>
        <div className="filterbox">
         

          <FaFilter
            style={{ width: "20px", height: "50px", color: "blueviolet" }}
            onClick={() => setfilteropen(!filteropen)}
          />

          {filteropen && (
            <div className="filter-modal">
              <div className="input-1" style={{ marginTop: "20px" }}>
                <select value={selectedColumn} onChange={handleColumnChange}>
                  <option value="">Select Column</option>

                  {selectcol.map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>

                <>
                  <select
                    value={selectedOperator}
                    onChange={handleOperatorChange}
                  >
                    <option value="">Select Operator</option>

                    {selectedColumn === "id" && (
                      <>
                        <option value="equal">Equal</option>
                        <option value="Between">Range</option>
                        <option value="greater than">Greater Than</option>
                        <option value="less than">less than</option>
                        <option value="Does not equal"> Does not equal</option>
                      </>
                    )}
                    {selectedColumn === "name" && (
                      <>
                        <option value="start with">Start With</option>
                        <option value="end with">End With</option>
                        <option value="equal">Equal</option>
                        <option value="contain">Contain</option>
                        <option value="not contain"> Does not contain</option>
                        <option value="is not equal">Is not equal</option>
                      </>
                    )}
                    {selectedColumn === "username" && (
                      <>
                        <option value="start with">Start With</option>
                        <option value="end with">End With</option>
                        <option value="equal">Equal</option>
                        <option value="contain">Contain</option>
                        <option value="not contain"> Does not contain</option>
                        <option value="is not equal">Is not equal</option>
                      </>
                    )}
                    {selectedColumn === "state" && (
                      <>
                        <option value="start with">Start With</option>
                        <option value="end with">End With</option>
                        <option value="equal">Equal</option>
                        <option value="contain">Contain</option>
                        <option value="not contain"> Does not contain</option>
                        <option value="is not equal">Is not equal</option>
                      </>
                    )}
                    {selectedColumn === "city" && (
                      <>
                        <option value="start with">Start With</option>
                        <option value="end with">End With</option>
                        <option value="equal">Equal</option>
                        <option value="contain">Contain</option>
                        <option value="not contain"> Does not contain</option>

                        <option value="is not equal">Is not equal</option>
                      </>
                    )}
                    {selectedColumn === "dob" && (
                      <>
                        <option value="equal">Equal</option>
                        <option value="equal month">Month</option>
                        <option value="equal date">Date</option>
                        <option value="equal year">Year</option>


                        <option value="is not equal">Is not equal</option>
                   
                      </>
                    )}
                    {selectedColumn === "email" && (
                      <>
                        <option value="start with">Start With</option>
                        <option value="equal">Equal</option>
                        <option value="contain">Contain</option>
                        <option value="not contain"> Does not contain</option>

                        <option value="is not equal">Is not equal</option>
                      </>
                    )}
                  </select>

                  <input
                    type="text"
                    placeholder="Enter Filter Value"
                    value={filterValue}
                    onChange={handleFilterValueChange}
                    style={{ marginTop: "10px" }}
                  />

                  <Button
                    onClick={applyFilter}
                    className="btn "
                    style={{
                      marginTop: "5px",
                      marginRight: "20px",
                      backgroundColor: "blueviolet",
                    }}
                  >
                    <span>Apply Filter </span>
                  </Button>
                </>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="container table-container"
        style={{ marginLeft: "30px", marginTop: "10px" }}
        onScroll={handleScroll}
       
      >
        <table className="table "  >
          <thead>
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.length === rows.length}
                  onChange={handleHeaderCheckboxChange}
                />
              </th>
              {cols.map((col, index) => (
                <>
                  <th
                    style={{
                      display: columnvisibal[col] ? "table-column" : "none",
                    }}
                    key={col}
                    id={col}
                    draggable
                    onDragStart={handelDragStart}
                    onDragOver={handleDragover}
                    onDragEnter={handelDragEnter}
                    onDrop={handeldrop}
                    dragover={cols === Dragover}
                    className="drage"
                    // className={` thhide  ${ columnvisibal[col]} ? 'table-cell':'none'`}
                    onClick={() => toggleSortingOrder(col)}
                  >
                    {col}

                    {col === "actions" || col === "id" ? (
                      ""
                    ) : (
                      <>
                        <button className="sorting-button ">
                          {col === sortedcolumn ? (
                            <>
                              {sortorder === "asc" ? (
                                <BsArrowUp className="up-icon" />
                              ) : (
                                <BsArrowDown className="down-icon" />
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </button>
                      </>
                    )}
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
          {rows.map((emp, colindex) => (
  <tr key={colindex}>
    <td>
      <input
        type="checkbox"
        checked={selectedRows.includes(emp.id)}
        onChange={() => handleCheckboxChange(emp.id)}
      />
    </td>
    {cols.map((column, index) => (
      <td
        key={index}
        style={{
          display: columnvisibal[column] ? "table-column" : "none",
        }}
      >
        {column === "actions" ? (
          <div className="dropdown" ref={iconRef}>
            <h5
              onClick={() => {
                setopen(!open);
              }}
            >
              {open ? <AiOutlineDash /> : <RxCross2 />}
            </h5>

            {open && (
              <>
                <div className="dropdown-content">
                  <span>
                    <BiEditAlt
                      className="edit_icons"
                      style={{ width: "35px", height: "30px" }}
                      onClick={() => {
                        dispatch(UpdateFrom(emp, emp.id));
                        openModal(true);
                      }}
                    />
                    Edit
                  </span>
                  <span>
                    <AiFillDelete
                      className="edit_icon"
                      style={{ width: "35px", height: "30px" }}
                      onClick={() => handleShowDeleteModal(emp.id)}
                    />
                    Delete
                  </span>
                </div>
              </>
            )}
          </div>
        ) : (
          <>{column === "id" ? colindex +1  : emp[column]}</>
          
        )}
      </td>
    ))}
  </tr>
))}

          </tbody>
        </table>
      </div>
      <div></div>
      {isloading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
 
   
<div>
 
</div>
      <Addfrom
        isEditing={isEditing}
        formData={formData}
        showModal={showModal}
        closeModal={closeModal}
        onSubmit={Addfrom}
      />

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleShowDeleteModal}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Curd;
