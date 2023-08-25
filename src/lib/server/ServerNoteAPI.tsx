import fs from "fs";

const DATA_PATH = process.env.DATA_PATH ?? 'data/';

export class ServerNoteAPI {
  private basePath: string;

  private constructor(basePath: string) {
    this.basePath = basePath;
  }

  static create() {
    return new ServerNoteAPI(DATA_PATH);
  }

  private getNotePath(fileName: string): string {
    return DATA_PATH + fileName.replace(/[^а-яa-z\d_ .]/ig, '') + '.txt';
  }

  async getNote(fileName: string): Promise<string> {
    const filePath = this.getNotePath(fileName);

    try {
      return fs.readFileSync(filePath).toString();
    } catch (e) {
      return '';
    }
  }

  async saveNote(fileName: string, value: string) {
    const filePath = this.getNotePath(fileName);

    if (value.length) {
      fs.writeFileSync(filePath, value);
    } else {
      fs.unlinkSync(filePath);
    }
  }

  async getNoteNames(): Promise<string[]> {
    return fs.readdirSync(DATA_PATH).map(noteName => noteName.replace(/\.txt$/, ''));
  }
}


