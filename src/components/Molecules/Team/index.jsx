import hexToRgba from "hex-to-rgba";
import Card from "../../Atoms/Card";
import "./style.css";

const Team = ({ name, color, collaborators, whenDeleting, changeColor }) => {
  return (
    collaborators.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: hexToRgba(color, "0.6"),
        }}
      >
        <input
          onChange={(event) => changeColor(event.target.value, name)}
          value={color}
          type="color"
          className="inputColor"
        />
        <h3
          style={{
            borderColor: color,
          }}
        >
          {name}
        </h3>
        <div className="collaborators">
          {collaborators.map((collaborator, index) => {
            return (
              <Card
                backgroundColor={color}
                key={index}
                name={collaborator.name}
                office={collaborator.office}
                image={collaborator.image}
                whenDeleting={whenDeleting}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
