import { useSelector } from "react-redux";
import { getFormVal } from "../reducers/selector";
import { PeriodicForm } from "../reducers/text-reducer";

const NamesToBreakify = () => {
  const formData: PeriodicForm = useSelector(getFormVal);

  const elementsList = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
    "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br",
    "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te",
    "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm"
  ];



  const findFirstMatch = (name: string) => {
    let highlightedName = name;
  
    for (let i = 0; i < name.length - 1; i++) {
      const element = name.substring(i, i + 2);
      if (elementsList.includes(element)) {
        highlightedName =
          highlightedName.substring(0, i) +
          `<span class="title_highlight">${highlightedName.substring(
            i,
            i + 2
          )}</span>` +
          highlightedName.substring(i + 2);
        return highlightedName;
      }
    }
  
    for (let i = 0; i < name.length; i++) {
      if (elementsList.includes(name[i])) {
        highlightedName =
          highlightedName.substring(0, i) +
          `<span class="title_highlight">${name[i]}</span>` +
          highlightedName.substring(i + 1);
        return highlightedName;
      }
    }
  
    return highlightedName;
  };
  

  const highlightedFirstname = findFirstMatch(formData.firstname);
  const highlightedLastname = findFirstMatch(formData.lastname);

  return (
    <div className="breakify_name">
      <h1 dangerouslySetInnerHTML={{ __html: highlightedFirstname }} className="breakify_title"></h1>
      <h1 dangerouslySetInnerHTML={{ __html: highlightedLastname }} className="breakify_title"></h1>
    </div>
  );
};

export default NamesToBreakify;
