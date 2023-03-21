import { useState } from "react";
import { Banner, Form } from "./components";

const App = () => {
  const [collaborators, setCollaborators] = useState([]);

  const newCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        registeredEmployee={(collaborator) => newCollaborator(collaborator)}
      />
    </div>
  );
};

export default App;
