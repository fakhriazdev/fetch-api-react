import axios from 'axios';

const { axiosInstance } = require('@/app/lib/axios');
const { useState, useEffect } = require('react');

export const useFetchTesti = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  //console.log(testimonies);

  const fetchTesti = async () => {
    setisLoading(true);
    try {
      const testimoniesResponse = await axiosInstance.get('/testimonies');
      setTestimonies(testimoniesResponse.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTesti();
  }, []);

  return {
    data: testimonies,
    isLoading,
  };
};
