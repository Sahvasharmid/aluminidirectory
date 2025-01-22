import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const MemberContext = createContext();

export const useMember = () => useContext(MemberContext);

export const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('https://aluminidirectorybackend.onrender.com/getallmembers')
      .then(response => {
        setMembers(response.data)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addMember = (member) => {
    setMembers((prevmember) => [...prevmember, member]);
  };
  const removeMember = (memberId) => {
    setMembers((prevmember) => prevmember.filter((member) => member.id !== memberId));
  };


  return (
    <MemberContext.Provider value={{ members, addMember,removeMember }}>
      {children}
    </MemberContext.Provider>
  );
};
