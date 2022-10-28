import React from "react";

interface storageUser {
  nome: string;
}

const Profile = () => {
  const getUserData = () => {
    const storagedUser: storageUser = JSON.parse(
      localStorage.getItem("user") || ""
    );
    const { nome }: storageUser = storagedUser;
    return nome;
  };

  return <h1>ola,{getUserData()}</h1>;
};

export default Profile;
