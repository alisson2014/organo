import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Banner, Form, Team, Footer, ButtonAdd } from "./components";
import { initialCollaborators, initialTeams } from "./api";

const App = () => {
  const [teams, setTeams] = useState(initialTeams);
  const [collaborators, setCollaborators] = useState(initialCollaborators);
  const [form, setForm] = useState(false);

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
      {form ? (
        <Form
          whenCreatingTeam={regristredTeam}
          teams={teams.map((team) => team.name)}
          registeredEmployee={(collaborator) =>
            setCollaborators([...collaborators, collaborator])
          }
        />
      ) : null}
      <ButtonAdd isVisible={() => setForm(!form)} />
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
