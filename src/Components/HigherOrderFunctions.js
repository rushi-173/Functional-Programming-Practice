export default function HigherOrderFunctions() {
  // Higher Order Functions
  //object of every arr element
  const sampleArr = ["one", "two", "three"];
  const toObj = (arr) => arr.map((item) => ({ val: item }));
  console.log("Arr Elements To Object", toObj(sampleArr));

  //
  return (
    <div className="HOF">
      <h4>Higher Order Functions !</h4>
    </div>
  );
}
