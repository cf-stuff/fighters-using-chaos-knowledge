import { html, useEffect, useState } from "../lib/preact.standalone.module.js";
import Button from "./forms/Button.js";
import SelectInput from "./forms/SelectInput.js";
import { getBuild, getBuildNames } from "../templates.js";
import { DB } from "../storage.js";
import { initialState } from "../state.js";
import Utils from "../utils.js";

const BuildLoader = ({ build, setBuild }) => {
  const [selectedBuild, setSelectedBuild] = useState("None");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getOptions = async () => {
      const savedKeys = await DB.getSavedKeys();
      const buildNames = getBuildNames();
      const uniqueBuildNames = [...new Set([...savedKeys, ...buildNames])];
      setOptions(uniqueBuildNames);
    }

    getOptions();
  }, [selectedBuild]);

  const loadBuild = async () => {
    if (selectedBuild === "None") {
      setBuild(Utils.deepClone(initialState));
    } else {
      const newBuild = await DB.load(selectedBuild) || getBuild(selectedBuild);
      setBuild(newBuild);
    }
  }
  const saveBuild = async () => {
    if (build.fighter.name === "None") return;
    await DB.save(build);
    setSelectedBuild(build.name);
  };
  const removeBuild = async () => {
    await DB.remove(selectedBuild);
    setSelectedBuild("None");
  };

  return html`
  <div class="row">
    <div class="col-auto">
      <${SelectInput} value=${selectedBuild} options=${options}
      onChange=${e => setSelectedBuild(e.target.value)} />
    </div>
    <div class="col-auto">
      <${Button} onClick=${loadBuild}>Load</${Button}>
    </div>
    <div class="col-auto">
      <${Button} onClick=${saveBuild}>Save</${Button}>
    </div>
    <div class="col-auto">
      <${Button} onClick=${removeBuild}>Remove</${Button}>
    </div>
  </div>
  `
}

export default BuildLoader;
