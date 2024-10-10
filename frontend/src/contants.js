export const themeColors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const LANGUAGES_VERSIONS = [
  { id: 97, language: "JavaScript", version: "Node.js 20.17.0" },
  { id: 92, language: "Python", version: "3.11" },
  { id: 54, language: "Cpp", version: "gcc 9.2.0" },
  { id: 91, language: "Java", version: "JDK 17.0.6" },
];
export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  cpp: `\n#include <bits/stdc++.h>\n\nint main() {\n\tstd::cout << "Hello World";\n\treturn 0;\n}\n`,
};
