"use client"

export class ClientNoteApi {
  static create() {
    return new ClientNoteApi();
  }

  saveNote(fileName: string, value: string) {
    return fetch(location.origin + '/api/note?id=' + fileName, {
      method: 'post',
      body: value
    }).then((res) => {
      console.log(res);
    });
  }
}
