import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Banner, Form, Team, Footer } from "./components";

const App = () => {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Progamação",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
    },
  ];

  const [collaborators, setCollaborators] = useState(inicial);

  const deleteCollaborator = (id) => {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  };

  const changeColorTeam = (color, id) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      })
    );
  };

  const regristredTeam = ({ name, color }) => {
    setTeams([...teams, { name, color, id: uuidv4() }]);
  };

  const changeFavorite = (id) => {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === id)
          collaborator.favorite = !collaborator.favorite;
        return collaborator;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form
        whenCreatingTeam={regristredTeam}
        teams={teams.map((team) => team.name)}
        registeredEmployee={(collaborator) =>
          setCollaborators([...collaborators, collaborator])
        }
      />
      {teams.map((team, index) => {
        return (
          <Team
            key={index}
            name={team.name}
            id={team.id}
            changeColor={changeColorTeam}
            whenDeleting={deleteCollaborator}
            byFavorite={changeFavorite}
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
