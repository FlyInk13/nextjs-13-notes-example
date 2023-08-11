"use client"

export const saveNote = (fileName: string, value: string) => {
  fetch(location.origin + '/api/note?id=' + fileName, {
    method: 'post',
    body: value
  }).then(console.log);
}
