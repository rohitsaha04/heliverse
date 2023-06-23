import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import data from './data.json';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(20);

  const [searchTerm, setSearchTerm] = useState('');

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;


  const setPage = (data) => {
    setCurrentPage(data.selected + 1)
  }

  const pageChange = Math.ceil(data.length / postPerPage);





  return (


    <>
      <form className="form">
        <div>
          <label style={{ fontSize: "15px", fontWeight: "600" }}>Search Here : </label>
          <input className="sInput" type="text" placeholder='type any name' onChange={event => { setSearchTerm(event.target.value) }}></input>
        </div>
      </form>

      <div className="drop">

        <label for="cars">Filters : Domain : </label>
        <select className="sele" name="domain" id="domain">
          <option value="sales">Sales</option>
          <option value="finance">Finance</option>
          <option value="marketing">Marketing</option>
          <option value="agender">Agender</option>
          <option value="it">IT</option>
          <option value="management">Management</option>
        </select>
        <label for="cars">Gender :</label>

        <select className="sele" name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>

        </select>
        <label for="cars">Availability :</label>

        <select className="sele" name="availability" id="availability">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button className="dropbtn">Submit</button>

      </div>

      <div className="container">
        {
          data.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          })
            .slice(firstPostIndex, lastPostIndex).map((item, id) => {
              return (
                <>
                  <div key={id} className="pbox col-md-2">
                    <div className="boxy">
                      <img src={item.avatar} alt="image"></img>
                      <h5>Name : {item.first_name}</h5>
                      <p>Gender : {item.gender}</p>
                      <p>Domain : {item.domain}</p>
                      <p>Email : {item.email}</p>
                    </div>
                  </div>
                </>
              )
            })
        }
      </div>


      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageChange}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={setPage}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'} />
    </>
  );
}

export default App;

