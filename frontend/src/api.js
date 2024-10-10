import axios from "axios";
import { LANGUAGES_VERSIONS } from "./contants";

const API = axios.create({
  baseURL: "https://judge0-ce.p.rapidapi.com",
});
const API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;
const API_HOST = import.meta.env.VITE_JUDGE0_API_HOST;

// export const runCode = async (language, code) => {
//   try {
//     const response = await API.post("/execute", {
//       language: language,
//       version: LANGUAGES_VERSIONS.find((lang) => lang.language === language)
//         .version,
//       files: [
//         {
//           content: code,
//         },
//       ],
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// };

export const submitCode = async (languageId, sourceCode, stdin) => {
  const options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: {
      base64_encoded: "false",
      wait: "false",
      fields: "*",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
      "Content-Type": "application/json",
    },
    data: {
      language_id: languageId,
      source_code: sourceCode,
      stdin: stdin,
      expected_output: "Hello",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const getSumbissionDetails = async (submissionId) => {
  const options = {
    method: "GET",
    url: `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}`,
    params: { fields: "*" },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const getLanguageByID = async (id) => {
  try {
    const response = await API.get(`/languages/${id}`, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getSubmissions = async () => {
  try {
    const response = await API.get(
      `/submissions/?base64_encoded=false&fields=status,language,time&page=1&per_page=5`,
      {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
