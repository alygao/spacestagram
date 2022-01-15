export default async function fetchData() {
  // Retrieve all data within a 1 week range
  let endDate = new Date();
  let startDate = new Date();
  startDate.setDate(startDate.getDate() - 13)
  
  // Convert startDate to YYYY-MM-DD format
  const yearStart = startDate.getFullYear();
  const monthStart = String(startDate.getMonth() + 1).padStart(2, "0");
  const dayStart = String(startDate.getDate()).padStart(2, "0");
  const startDateFormatted = yearStart + "-" + monthStart + "-" + dayStart;

  // Convert endDate to YYYY-MM-DD format
  const yearEnd = endDate.getFullYear();
  const monthEnd = String(endDate.getMonth() + 1).padStart(2, "0");
  const dayEnd = String(endDate.getDate()).padStart(2, "0");
  const endDateFormatted = yearEnd + "-" + monthEnd + "-" + dayEnd;

  console.log(startDate, endDate);
  console.log(startDateFormatted, endDateFormatted);

  // const apiData = () => {
  //   return axios.get(`https://api.nasa.gov/planetary/apod?api_key=O7AHXLq890QyH9ZpqjSkcsbtrfoq0FPkYbWuFTkM&start_date=${startDateFormatted}&end_date=${endDateFormatted}`)
  //     .then((response) => response.json()
  //     .then((fetchData) => {
  //           return fetchData;
  //     }));
  // }

  const apiData = fetch(
    `https://api.nasa.gov/planetary/apod?api_key=O7AHXLq890QyH9ZpqjSkcsbtrfoq0FPkYbWuFTkM&start_date=${startDateFormatted}&end_date=${endDateFormatted}`
  )
  .then((response) => response.json())
  .then((fetchData) => {
      return fetchData;
  });

  return apiData;
}