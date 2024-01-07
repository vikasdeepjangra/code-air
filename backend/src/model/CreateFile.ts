import fs from "fs/promises";

export const createFile = async (code: string, sourceFileName: string) => {
  try {
    const filePath = `${__dirname}/../../box/${sourceFileName}`;
    await fs.writeFile(filePath, code, "utf8");
    return {
      status: "success",
    };
  } catch (err) {
    return {
      status: "error",
    };
  }
};
