import getData from "./lib/service.js";

getData(9)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error!!!:", error));
