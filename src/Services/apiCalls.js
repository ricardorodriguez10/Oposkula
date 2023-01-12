import axios from "axios";
import { useParams } from "react-router";

const getDataFromApi = async () => {
  try {
    const result = await axios.get(
      "https://api.edamam.com/api/food-database/v2/parser",
      {
        params: {
          app_key: "710135cdf843460f99d5563f25434e45",
          app_id: "11be22f7",
          ingr: "apple",
        },
      }
    );
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};
getDataFromApi();
