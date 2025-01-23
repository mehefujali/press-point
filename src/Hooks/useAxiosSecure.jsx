import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (res) {
      return res;
    },
    (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        signOutUser();
      }

      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
