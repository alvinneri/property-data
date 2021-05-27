import { api } from "./api";

export const getProperties = async () => {
  try {
    const { data } = await api.get("/public/properties");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getProperty = async (id) => {
  try {
    const { data } = await api.get(`/public/property/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
