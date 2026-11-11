
const API_URL = import.meta.env.VITE_API_URL;

const USERNAME = import.meta.env.VITE_API_USERNAME;

const PASSWORD = import.meta.env.VITE_API_PASSWORD;

export const fetchJessicaData = async () => {
  const auth = btoa(`${USERNAME}:${PASSWORD}`);

  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const patients = await response.json();

  const jessica = patients.find(
    (patient) => patient.name === "Jessica Taylor"
  );

  if (!jessica) {
    throw new Error("Jessica Taylor was not found.");
  }

  return jessica;
};
