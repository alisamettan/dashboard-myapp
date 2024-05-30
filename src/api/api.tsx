import { FormData } from "@/app/login/page";
import axios from "axios";

const accessToken = localStorage.getItem("token");

const apiInstance = axios.create({
  baseURL: "https://recruitment-api.vercel.app",
  headers: {
    Authorization: accessToken && accessToken,
    "Content-Type": "application/json",
  },
});

export const loginInstance = (formData: FormData) => {
  apiInstance
    .post<{ jwt: string }>("/login", formData)
    .then((res) => {
      console.log(res.data.jwt);
      const token = res.data.jwt;
      localStorage.setItem("token", token);
    })
    .catch((error) => {
      console.error(error);
    });
};

// export default { loginInstance };
