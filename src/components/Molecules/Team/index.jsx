import "./style.css";
import Card from "../../Atoms/Card";

const Team = (props) => {
  return (
    <section
      className="team"
      style={{
        backgroundColor: props.secondaryColor,
      }}
    >
      <h3
        style={{
          borderColor: props.primaryColor,
        }}
      >
        {props.name}
      </h3>
      {props.collaborators.map((collaborator) => (
        <Card
          name={collaborator.name}
          office={collaborator.office}
          image={collaborator.image}
        />
      ))}
    </section>
  );
};

export default Team;
