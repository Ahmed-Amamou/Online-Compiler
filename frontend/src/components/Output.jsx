/* eslint-disable */
import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import {
  submitCode,
  getLanguageByID,
  getSumbissionDetails,
  getSubmissions,
} from "../api";
// eslint-disable-next-line react/prop-types
const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState("");

  const executeCode = async () => {
    try {
      const code = editorRef.current.getValue();
      const response = await submitCode(
        54, // language ID for C++
        `\n#include <bits/stdc++.h>\n\nint main() {
        int x=0;\n\t for(int i =0; i<9000000;i++){
        for(int j =0; j<1000;j++){
        x++;}}\n\treturn 0;\n}\n`,
        "" // stdin (if any)
      );

      console.log(response);

      // Extract submission token
      const submissionId = response.token;

      // Polling function to get submission status
      const pollSubmissionStatus = async (submissionId) => {
        try {
          let submissionDetails = await getSumbissionDetails(submissionId);

          // Poll until the status is no longer "processing"
          while (
            submissionDetails.status.id === 1 ||
            submissionDetails.status.description === "Processing"
          ) {
            console.log("Status:", submissionDetails.status.description);

            // Wait for 2 seconds before checking again
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Fetch the submission details again
            submissionDetails = await getSumbissionDetails(submissionId);
          }
          console.log("submission details: ", submissionDetails);

          // Once done processing, log the final result and set the output
          console.log("Final Status:", submissionDetails.status.description);
          setOutput(
            submissionDetails.stdout || submissionDetails.stderr || "No output"
          );
        } catch (error) {
          console.error("Error polling submission status:", error);
        }
      };

      // Start polling the submission status
      pollSubmissionStatus(submissionId);
    } catch (error) {
      console.error("Error during code execution:", error);
    }
  };
  const getSubmissionsData = async () => {
    try {
      const response = await getSubmissions();
      console.log(response);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };
  const getLanguageByIDData = async () => {
    try {
      const response = await getLanguageByID();
      console.log(response);
    } catch (error) {
      console.error("Error fetching languages:", error);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg" fontWeight="bold">
        Output
      </Text>
      <Button colorScheme="teal" size="sm" mb="4" onClick={getSubmissionsData}>
        {" "}
        Run Code
      </Button>
      <Box
        p={4}
        bg="#2e403e "
        color="white"
        height="80vh"
        borderRadius="md"
        overflow="auto"
      >
        {/* Output will be displayed here */}
        {output}
      </Box>
    </Box>
  );
};
export default Output;
