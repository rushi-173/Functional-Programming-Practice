export default function Basic() {
  //Immutabbility
  //create sibling
  const objMe = {
    mothersName: "Shobha",
    age: 21
  };
  const createSibling = (me, ageDiff) => ({ ...me, age: me.age + ageDiff });
  console.log("Sibling Details :", createSibling(objMe, -3));
  //add colors
  const oldColors = ["red", "blue", "yellow"];
  const addToArr = (prev, ...rest) => {
    return [...prev, ...rest];
  };
  console.log("Updated Arr ", addToArr(oldColors, "orange", "green"));

  //Pure Functions
  // Increment Age
  const mySelf = {
    name: "Rushi",
    age: 21
  };
  const birthday = (person) => {
    return { ...person, age: person.age };
  };
  console.log("After Birthday : ", birthday(mySelf));

  return (
    <div className="Basic">
      <h4>Basic!</h4>
    </div>
  );
}
