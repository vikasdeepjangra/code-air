export const LanguageMap: Record<
  string,
  { compileCommand: string; runCommand: string; runArgs: string[] }
> = {
  cpp: {
    compileCommand: "g++",
    runCommand: "./a.out",
    runArgs: [],
  },
  java: {
    compileCommand: "javac",
    runCommand: "java",
    runArgs: ["Main"],
  },
  python: {
    compileCommand: "",
    runCommand: "python3",
    runArgs: ["Main.py"],
  },
};
