import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContextProvider } from '../utils/AuthContext'; // Adjust the import path if necessary
import style from './BootTable.module.css'
import AdminModal from './Modal/AdminModal';
import AluminiCard from './card/AluminiCard';
import Pagination from './Pagination/Pagination';
import AdminTable from './Table/AdminTable';
const AlumniDirectory = () => {
  const { auth } = useContext(AuthContextProvider);
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedVerification, setSelectedVerification] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newAlumni, setNewAlumni] = useState({ name: '', email: '', year: '' });
  const [editAlumni, setEditAlumni] = useState(null);
  const[loading,setloading]=useState(true)
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);
  const cardColors = [
    "#98d8eb", 
    "#a6b9ec" ,
   " #a3d0e7",
   "#73fed5",
    "#fec6e3",
     "#fed7ae"
  ];


  
  // Fetch members from the API
  useEffect(() => {
    const apiUrl =
      auth?.user.role === 'admin'
        ? 'https://aluminidirectorybackend.onrender.com/getallmembers'
        : 'https://aluminidirectorybackend.onrender.com/getverified';

    axios
      .get(apiUrl)
      .then((response) => {
        setMembers(response.data);
        setFilteredMembers(response.data);
        setloading(false)
      })
      .catch((error) => {
        console.error('Error fetching members:', error);
        setloading(false)
      });
  }, [auth?.user.role]);

  // Filter members based on selected criteria
  useEffect(() => {
    const filtered = members.filter((member) => {
      const nameMatch = member.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const qualificationMatch = selectedQualification
        ? member.qualification?.toLowerCase() === selectedQualification.toLowerCase()
        : true;
      const yearMatch = selectedYear ? member.passoutyear === selectedYear : true;
      const verificationMatch = selectedVerification
        ? member.isVerified === (selectedVerification === 'verified')
        : true;

      return (
        (nameMatch ||
          member.qualification?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.passoutyear?.toString().includes(searchQuery) ||
          member.phoneno?.includes(searchQuery)) &&
        qualificationMatch &&
        yearMatch &&
        verificationMatch
      );
    });

    setFilteredMembers(filtered);
  }, [searchQuery, selectedQualification, selectedYear, selectedVerification, members]);

  // Handle qualification, year, and verification filters
  
  const handleYearFilter = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleVerificationFilter = (event) => {
    setSelectedVerification(event.target.value);
  };

  // Handle adding new alumni
  
  const handleVerificationToggle = (memberId, newStatus) => {
    // Optimistically update the UI
    const updatedMembers = members.map((member) =>
      member._id === memberId ? { ...member, isVerified: newStatus } : member
    );

    setMembers(updatedMembers);
    setFilteredMembers(updatedMembers);

    // Send the updated status to the backend
    axios
      .put(`https://aluminidirectorybackend.onrender.com/verify/${memberId}`, { isVerified: newStatus })
      .then((response) => {
        console.log('Verification status updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating verification status:', error);

        // Revert the state in case of an error
        const revertedMembers = members.map((member) =>
          member._id === memberId ? { ...member, isVerified: !newStatus } : member
        );

        setMembers(revertedMembers);
        setFilteredMembers(revertedMembers);
      });
  };
  // Handle editing existing alumni
  const handleEditAlumni = (id) => {
    console.log(id)
    const alumniToEdit = members.find((member) => member._id === id);
    console.log("al",alumniToEdit)
    if (alumniToEdit) {
      setEditAlumni(alumniToEdit);
      setShowModal(true);
    } else {
      console.error('Alumni not found:', id);
    }
  };

  // Handle saving edits
  const handleSaveEdit = () => {
    if (!editAlumni || !editAlumni._id) return;
  
    const updatedAlumni = { ...editAlumni };
  
    // Optimistic update
    const updatedMembers = members.map((member) =>
      member._id === editAlumni._id ? updatedAlumni : member
    );
    setMembers(updatedMembers);
    setFilteredMembers(updatedMembers);
  
    axios
      .put(`https://aluminidirectorybackend.onrender.com/updatemember/${editAlumni._id}`, updatedAlumni)
      .then(() => {
        // Optionally refresh from the server if needed
      })
      .catch((error) => {
        console.error('Error updating alumni:', error);
      });
  
    setShowModal(false);
    setEditAlumni(null);
  };
  
  const handleDeleteAlumni = (id) => {
    console.log(id);
    axios
      .delete(`https://aluminidirectorybackend.onrender.com/memberdelete/${id}`)
      .then(() => {
        setMembers(members.filter((alumni) => alumni._id !== id));
        setFilteredMembers(filteredMembers.filter((alumni) => alumni._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting alumni:', error);
      });
  };

  
  // Pagination handling
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0); // Reset to first page
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    
      <div className={`container pt-5 ${style.paddingcontainer}`}> 

      <h4 className="py-3 text-center">Members List</h4>
      <hr />

      {/* Search bar */}
      <div className="d-flex flex-column flex-md-row mb-3" style={{gap:"10px"}}>
        <div className="flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name or Qualification"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value || '')}
          />
        </div>
      

      {/* Filters */}
    
        <div className="mr-3">
          <select
            className="form-control"
            value={selectedYear}
            onChange={handleYearFilter}
          >
           <option value="">Select Pass-out Year</option>
{Array.from({ length: 30 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return (
    <option key={year} value={year}>
      {year}
    </option> // Add this closing </option> tag
  );
})}

          </select>
    
      </div>
      </div>
      {loading ? (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading members...</p>
      </div>
    ) : (
      <>
     {auth?.user.role === "admin" ? (
        <>
          {/* Admin Table View */}
         
          <AdminTable handleDeleteAlumni={handleDeleteAlumni} handleEditAlumni={handleEditAlumni} handleVerificationToggle={handleVerificationToggle}  currentMembers={currentMembers}></AdminTable>
        </>
      ) : (
        <AluminiCard  cardColors={cardColors} currentMembers={currentMembers} ></AluminiCard>
        )}
      
      </>)}
      {/* Pagination */}
     <Pagination filteredMembers={filteredMembers} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} endIndex={endIndex} page={page} rowsPerPage={rowsPerPage}></Pagination>
      {/* Add or Edit Alumni Modal */}
      {showModal &&
      <AdminModal editAlumni={editAlumni} setShowModal={setShowModal}  newAlumni={newAlumni} handleSaveEdit={handleSaveEdit} handleEditAlumni={handleEditAlumni} setEditAlumni={setEditAlumni} setNewAlumni={setNewAlumni}></AdminModal>
     
      }
    </div>
  );
};

export default AlumniDirectory;
