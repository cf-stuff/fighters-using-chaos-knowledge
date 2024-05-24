import { html, useState } from "../lib/preact.standalone.module.js";
import Battle from "./Battle.js";
import Calculator from "./calculator/Calculator.js";
import Grade from "./Grade.js";
import SkillPlanner from "./SkillPlanner.js";
import Fighters from "./Fighters.js";

const tabs = ["Calculator", "Battle", "Grade", "Skill Planner", "Fighters"];

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
    ${activeTab === "Fighters" && html`<${Fighters} />`}
    <hr/>
    Feel free to report any issues<br/>
    LINE ID: derpidgey<br/>
    Discord: CF99#9616
    <hr/>
    <h3>Mods</h3>
    <h4>Buffs</h4>
    <p>All pet EVA special stats 50 → 150</p>
    <p>Pet attack totems (purple/blue/green/orange/red): effect per lvl 0.1 → 0.2, at lvl 64 8.3% → 14.6%</p>
    <p>Blue Totem: remove random debuff → remove all debuffs</p>
    <p>Bacteria: NEW - 50% healing reduction and can't revive while sick</p>
    <p>Freezing Skill: NEW - removes enemy frenzy</p>
    <p>Inescapable Net: NEW - Disables moving illusion</p>
    <p>Thorn Shield: Launch restiction 1 → 3, spd multiplier 0.5/0.5 → 0.5/0.2, NEW -100 brk/crt/hit/def</p>
    <p>Fast Move: sp cost 7/7 → 7/5</p>
    <p>Storm Boxing: damage 1.08/1.13 → 1.2/1.25</p>
    <p>Violence: CRT 15/20 → 25/50, BRK 0/0 → 25/50</p>
    <p>Heavy Hammer: removes enemy bell after damage calc, life steal 0/0 → 6/6</p>
    <p>Explosive Blow: damage 2.5/2.6 → 2.5/3.5 life steal 0/0 → 12/12, during tired def/res 0/0 → 200/400</p>
    <p>Gallop: SPD 10/15 → 15/25, EVA 0/0 → 15/25, HP% 0/0 → 3/3</p>
    <p>Counterattack: life steal 0/0 → 12/12</p>
    <p>Bomb: NEW - ignites if they drank wine</p>
    <p>Wine: HIT/EVA 0 → -200</p>
    <p>Ghoul Block: Launch restiction 1 → 3, during attack → before attack, removes enemy barb</p>
    <p>Skill Shackles: Launch restiction 1 → 3, during attack → before attack</p>
    <p>Ghost Tiger: remove random debuff → remove all debuffs</p>
    <h4>Nerfs</h4>
    <p>Pet freeze: triggers fury burst</p>
    <p>Barbarism: ATK% per HP% 0.5/0.7 → 0.3/0.5</p>
    <p>Golden Shield: critical hits do 25% damage into bell</p>
    <p>Shield Wall: critical hits do 25% damage into shield wall</p>
    <h4>New Pets</h4>
    <p>Olave: 150 CRT, Freeze</p>
    <p>Nemesis: 60 DEF, Seal</p>
    <p>Mole: 150 EVA, Golden Shield</p>
  </div>
  `;
}

export default App;
