import CFDB from "../data/CFDB.js";
import { ImageType, getImagePath } from "../image.js";
import { html, useEffect } from "../lib/preact.standalone.module.js";

const Fighters = () => {

  useEffect(() => {
    const table = new DataTable("#fighter-table", { paging: false });
    
    return () => table.destroy();
  }, []);

  return html`
  <table id="fighter-table" class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>STR BMV</th>
        <th>DEX BMV</th>
        <th>STA BMV</th>
        <th>STR ISV</th>
        <th>DEX ISV</th>
        <th>STA ISV</th>
        <th>STR GR</th>
        <th>DEX GR</th>
        <th>STA GR</th>
        <th>Mastery</th>
      </tr>
    </thead>
    <tbody>
      ${CFDB.getFighters().map(fighter =>
    html`<tr>
          <td><img style=${{ height: "2rem" }} src=${getImagePath(ImageType.fighter, fighter.iconId)} />${fighter.name}</td>
          <td>${fighter.bmv[0]}</td>
          <td>${fighter.bmv[1]}</td>
          <td>${fighter.bmv[2]}</td>
          <td>${fighter.isv[0]}</td>
          <td>${fighter.isv[1]}</td>
          <td>${fighter.isv[2]}</td>
          <td>${fighter.growthRate[0]}</td>
          <td>${fighter.growthRate[1]}</td>
          <td>${fighter.growthRate[2]}</td>
          <td><img style=${{ height: "2rem" }} src=${getImagePath(ImageType.skillType, CFDB.getSkillType(fighter.mastery).iconId)} />${fighter.mastery}</td>
        </tr>`
  )}
    </tbody>
  </table>
  `;
}

export default Fighters;
