import express from "express";

export const compileAndRun = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      code,
      language,
      languageCode,
      isCompiled,
      sourceFileName,
      targetFileName,
    } = req.body;
    console.log(language, "\n");
    console.log(code, "\n");
    console.log(languageCode, "\n");
    console.log(isCompiled, "\n");
    console.log(sourceFileName, "\n");
    console.log(targetFileName, "\n");
    res.send({
      message: "Success",
    });
  } catch (err) {
    res.send(err);
  }
};
