import axios from 'axios';

const { axiosInstance } = require('@/app/lib/axios');
const { useState, useEffect } = require('react');

export const useFetchServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  //console.log(services);
  const fetchServices = async () => {
    setisLoading(true);
    try {
      const servicesResponse = await axiosInstance.get('/services');
      setServices(servicesResponse.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    data: services,
    isLoading,
  };
};
