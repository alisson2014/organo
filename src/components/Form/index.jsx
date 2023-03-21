import TextField from "../TextField";
import "./style.css";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeHolder="Digite seu nome" />
        <TextField label="Cargo" placeHolder="Digite seu cargo" />
        <TextField label="Imagem" placeHolder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Form;
