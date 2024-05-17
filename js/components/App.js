import { html, useState } from "../lib/preact.standalone.module.js";
import Battle from "./Battle.js";
import Calculator from "./calculator/Calculator.js";
import Grade from "./Grade.js";
import SkillPlanner from "./SkillPlanner.js";
import PetHouse from "./PetHouse.js";

const tabs = ["Calculator", "Battle", "Grade", "Skill Planner", "Pet House"];

const App = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return html`
  <header class="navbar navbar-expand-sm bg-light">
    <nav class="container-fluid">
      <span class="navbar-brand">Fighters Using Chaos Knowledge</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          ${tabs.map(tab => html`<span class="nav-link${activeTab === tab ? " active" : ""}" onClick=${() => setActiveTab(tab)}>${tab}</span>`)}
        </div>
      </div>
    </nav>
  </header>
  <div class="container-xl">
    ${activeTab === "Calculator" && html`<${Calculator} />`}
    ${activeTab === "Battle" && html`<${Battle} />`}
    ${activeTab === "Grade" && html`<${Grade} />`}
    ${activeTab === "Skill Planner" && html`<${SkillPlanner} />`}
    ${activeTab === "Pet House" && html`<${PetHouse} />`}
    <hr/>
    Feel free to report any issues<br/>
    LINE ID: derpidgey<br/>
    Discord: CF99#9616
    <hr/>
    <h3>Mods</h3>
    <p>Mole: new pet with special stat 150 EVA and special skill that gives golden shield</p>
  </div>
  `;
}

export default App;
