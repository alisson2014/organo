import TextField from "../TextField";
import DropDown from "../DropDown";
import Button from "../Button";
import "./style.css";

const Form = () => {
  const items = [
    "Progamação",
    "Front-End",
    "Data science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const onSave = (event) => {
    event.preventDefault();
    console.log("Form enviado");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField required={true} label="Nome" placeHolder="Digite seu nome" />
        <TextField
          required={true}
          label="Cargo"
          placeHolder="Digite seu cargo"
        />
        <TextField
          required={true}
          label="Imagem"
          placeHolder="Digite o endereço da imagem"
        />
        <DropDown required={true} label="Time" items={items} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
