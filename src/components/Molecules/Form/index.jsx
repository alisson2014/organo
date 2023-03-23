import { useState } from "react";
import DropDown from "../../Atoms/DropDown";
import TextField from "../../Atoms/TextField";
import Button from "../../Atoms/Button";
import "./style.css";

const Form = ({ registeredEmployee, teams }) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
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

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeHolder="Digite seu nome"
          inValue={name}
          whenChanging={(inValue) => setName(inValue)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeHolder="Digite seu cargo"
          inValue={office}
          whenChanging={(inValue) => setOffice(inValue)}
        />
        <TextField
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
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
