import axios from "axios";
import { keys } from "../movie/constants";

export const useApi = () => {
  const get = async (url: string) => {
    try {
      const response = await axios.get(url, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${keys.APPLICATION_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      return ""
    }
  };

  const post = async (url: string, requestData: any) => {
    try {
      const response = await axios.post(url, requestData);
      return response.data;
    } catch (error) {
      return ""
    }
  };

  return { get, post };
};
