import React from "react";

 export const Mutation = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
            
      },
    }
  );

  const data = await res.json();
  return data;
};
