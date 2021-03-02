import React, { useState } from "react";

export const DisplayAPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState(null);

  fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then((d) => d.json())
    .then((data) => {
      setPhotoUrl(data.url);
    });

  return <div>{photoUrl ? <img width="50" src={photoUrl} /> : null}</div>;
};
