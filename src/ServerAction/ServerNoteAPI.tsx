import fs from "fs";

const basePath = 'data/';
const getNotePath = (fileName: string): string => basePath + fileName.replace(/[^а-яa-z\d_ ]/ig, '') + '.txt';

export const getNote = async (fileName: string): Promise<string> => {
  const filePath = getNotePath(fileName);

  try {
    return fs.readFileSync(filePath).toString();
  } catch (e) {
    return '';
  }
}

export const saveNote = async (fileName: string, value: string) => {
  const filePath = getNotePath(fileName);

  fs.writeFileSync(filePath, value);
}

export const getNoteNames = async () => {
  return fs.readdirSync(basePath).map(noteName => noteName.replace(/\.txt$/, ''));
}
