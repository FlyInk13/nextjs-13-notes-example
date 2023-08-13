import fs from "fs";

const DATA_PATH = process.env.DATA_PATH ?? 'data/';

const getNotePath = (fileName: string): string => {
  return DATA_PATH + fileName.replace(/[^а-яa-z\d_ ]/ig, '') + '.txt';
}

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

  if (value.length) {
    fs.writeFileSync(filePath, value);
  } else {
    fs.unlinkSync(filePath);
  }
}

export const getNoteNames = async () => {
  return fs.readdirSync(DATA_PATH).map(noteName => noteName.replace(/\.txt$/, ''));
}
