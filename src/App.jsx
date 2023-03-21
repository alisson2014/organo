import { useState } from "react";
import { Banner, Form, Team } from "./components";

const App = () => {
  const teams = [
    {
      name: "Progamação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];
  const [collaborators, setCollaborators] = useState([]);

  const newCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        registeredEmployee={(collaborator) => newCollaborator(collaborator)}
      />
      {teams.map((team) => {
        return (
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
          />
        );
      })}
    </div>
  );
};

export default App;
