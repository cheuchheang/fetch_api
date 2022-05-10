import React from "react";

interface HelloProps {
  name?: String;
  age?: Number;
}

const HelloOne: React.FC<HelloProps> = (props) => {
  return (
    <>
      <div>
        <p>hello</p>
      </div>
    </>
  );
};
// const HelloTwo: React.FC<HelloProps> = (props) => {
//   return (
//     <>
//       <div>
//         <p>hello</p>
//       </div>
//     </>
//   );
// };
// const HelloThree: React.FC<HelloProps> = (props) => {
//   return (
//     <>
//       <div>
//         <p>hello</p>
//       </div>
//     </>
//   );
// };
// const HelloFour: React.FC<HelloProps> = (props) => {
//   return (
//     <>
//       <div>
//         <p>hello</p>
//       </div>
//     </>
//   );
// };
export default HelloOne
