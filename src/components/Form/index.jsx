import TextField from "../TextField";
import DropDown from "../DropDown";
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

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeHolder="Digite seu nome" />
        <TextField label="Cargo" placeHolder="Digite seu cargo" />
        <TextField label="Imagem" placeHolder="Digite o endereço da imagem" />
        <DropDown label="Time" items={items} />
      </form>
    </section>
  );
};

export default Form;
