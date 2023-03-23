import { useState } from "react";
import { Banner, Form, Team, Footer } from "./components";

const App = () => {
  const [teams, setTeams] = useState([
    {
      name: "Progamação",
      color: "#57C278",
    },
    {
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      name: "Data science",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const newCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const deleteCollaborator = () => {
    console.log("Deletando colaborador");
  };

  const changeColorTeam = (color, name) => {
    setTeams(
      teams.map((team) => {
        if (team.name === name) {
          team.color = color;
        }
        return team;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        registeredEmployee={(collaborator) => newCollaborator(collaborator)}
      />
      {teams.map((team, index) => {
        return (
          <Team
            key={index}
            name={team.name}
            changeColor={changeColorTeam}
            whenDeleting={deleteCollaborator}
            color={team.color}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.name
            )}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
