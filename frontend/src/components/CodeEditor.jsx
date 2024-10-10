import { Editor } from "@monaco-editor/react";
import { useState, useRef } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../contants";
import { Box, HStack } from "@chakra-ui/react";
import Output from "./Output";

const CodeEditor = () => {
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS[language]);
  const editorRef = useRef();
  //on mount we focus the editor
  const handleMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="80vh"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue={CODE_SNIPPETS.javascript}
            value={value}
            onChange={(value) => setValue(value)}
            onMount={handleMount}
            language={language}
          />
        </Box>
        <Output language={language} editorRef={editorRef} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
