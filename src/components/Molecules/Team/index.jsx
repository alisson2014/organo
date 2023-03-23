import "./style.css";
import Card from "../../Atoms/Card";

const Team = ({ name, primaryColor, secondaryColor, collaborators }) => {
  return (
    collaborators.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: secondaryColor,
        }}
      >
        <h3
          style={{
            borderColor: primaryColor,
          }}
        >
          {name}
        </h3>
        <div className="collaborators">
          {collaborators.map((collaborator, index) => (
            <Card
              backgroundColor={primaryColor}
              key={index}
              name={collaborator.name}
              office={collaborator.office}
              image={collaborator.image}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
