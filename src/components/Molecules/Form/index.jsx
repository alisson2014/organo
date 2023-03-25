import { useState } from "react";
import DropDown from "../../Atoms/DropDown";
import Field from "../../Atoms/Field";
import Button from "../../Atoms/Button";
import "./style.css";

const Form = ({ registeredEmployee, teams, whenCreatingTeam }) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const onSaveCollaborator = (event) => {
    event.preventDefault();
    registeredEmployee({
      name: name,
      office: office,
      image: image,
      team: team,
    });
    setName("");
    setImage("");
    setOffice("");
    setTeam("");
  };

  const onSaveTeam = (event) => {
    event.preventDefault();
    whenCreatingTeam({ name: teamName, color: teamColor });
    setTeamName("");
    setTeamColor("");
  };

  return (
    <section className="formContainer">
      <form className="form" onSubmit={onSaveCollaborator}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Field
          required={true}
          label="Nome"
          placeHolder="Digite seu nome"
          inValue={name}
          whenChanging={(inValue) => setName(inValue)}
        />
        <Field
          required={true}
          label="Cargo"
          placeHolder="Digite seu cargo"
          inValue={office}
          whenChanging={(inValue) => setOffice(inValue)}
        />
        <Field
          required={true}
          label="Imagem"
          placeHolder="Digite o endereço da imagem"
          inValue={image}
          whenChanging={(inValue) => setImage(inValue)}
        />
        <DropDown
          required={true}
          label="Time"
          items={teams}
          inValue={team}
          whenChanging={(inValue) => setTeam(inValue)}
        />
        <Button text="Criar card" />
      </form>
      <form className="form" onSubmit={onSaveTeam}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Field
          required={true}
          label="Nome"
          placeHolder="Digite o nome do time"
          inValue={teamName}
          whenChanging={(inValue) => setTeamName(inValue)}
        />
        <Field
          type="color"
          required={true}
          label="Cor"
          placeHolder="Digite sua cor"
          inValue={teamColor}
          whenChanging={(inValue) => setTeamColor(inValue)}
        />
        <Button text="Criar Time" />
      </form>
    </section>
  );
};

export default Form;
