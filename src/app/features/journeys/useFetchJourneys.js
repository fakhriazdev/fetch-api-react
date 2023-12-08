import axios from 'axios';

const { axiosInstance } = require('@/app/lib/axios');
const { useState, useEffect } = require('react');

export const useFetchJourneys = () => {
  const [journeys, setJourneys] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  //console.log(journeys);
  const fetchServices = async () => {
    setisLoading(true);
    try {
      const journeysResponse = await axiosInstance.get('/journeys');
      setJourneys(journeysResponse.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const customShort = (input) => {
    for (let i = 0; i < input.length; i++) {
      for (let k = i + 1; k < input.length; k++) {
        if (i % 2 === 0) {
          if (input[i].type < input[k].type) {
            let adu = input[i];
            input[i] = input[k];
            input[k] = adu;
          }
        } else {
          if (input[i].type > input[k].type) {
            let adu = input[i];
            input[i] = input[k];
            input[k] = adu;
          }
        }
      }
    }
    return input;
  };

  return {
    data: customShort(journeys),
    isLoading,
  };
};
