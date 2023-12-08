import axios from 'axios';

const { axiosInstance } = require('@/app/lib/axios');
const { useState, useEffect } = require('react');

export const useFetchSkills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const fetchSkills = async () => {
    setisLoading(true);
    try {
      const skillsResponse = await axiosInstance.get('/skills');
      setSkills(skillsResponse.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return {
    data: skills,
    isLoading,
  };
};
