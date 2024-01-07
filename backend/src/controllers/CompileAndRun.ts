import express from "express";
import { compileProgram } from "../model/Compile";
import { createFile } from "../model/CreateFile";
import { clearBoxFiles, runProgram } from "../model/Run";

export const compileAndRun = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { code, isCompiled, sourceFileName, targetFileName, languageCode } =
      req.body;

    const createFileStatus = await createFile(code, sourceFileName);
    if (createFileStatus.status === "error") {
      throw "Error Creating Source File.";
    }

    let compileStatus;
    if (isCompiled) {
      compileStatus = await compileProgram({
        sourceFileName,
        targetFileName,
        languageCode,
      });
    }
    if (isCompiled && compileStatus.status === "error") {
      throw "Error Compiling Source File.";
    }

    const runFile: string = isCompiled ? targetFileName : sourceFileName;
    const runResult = await runProgram({ runFile, languageCode });

    await clearBoxFiles();
    res.send({
      status: runResult.status,
      message: runResult.message,
    });
  } catch (err) {
    res.send(err);
  }
};
