import hexToRgba from "hex-to-rgba";
import Card from "../../Atoms/Card";
import Field from "../../Atoms/Field";
import "./style.css";

const Team = ({
  name,
  id,
  color,
  collaborators,
  whenDeleting,
  changeColor,
  byFavorite,
}) => {
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
          onChange={(event) => changeColor(event.target.value, id)}
          value={color}
          type="color"
          className="inputColor"
        />
        <h3 style={{ borderColor: color }}>{name}</h3>
        <div className="collaborators">
          {collaborators.map((collaborator, index) => {
            return (
              <Card
                backgroundColor={color}
                key={index}
                name={collaborator.name}
                office={collaborator.office}
                image={collaborator.image}
                id={collaborator.id}
                favorite={collaborator.favorite}
                byFavorite={byFavorite}
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
