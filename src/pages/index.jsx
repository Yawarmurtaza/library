import react, { useState } from "react";
// import App from "../components/App";
export default function Index() {
  const customer = [
    { id: 123, name: "Ahmed" },
    { id: 124, name: "Ali" },
    { id: 125, name: "Murtaza" },
    { id: 126, name: "Murtaza" },
  ];

  // const dict = customer.map(c => dict[c.id] = c.name);
  // let dict = Object.assign({}, ...customer.map((c) => ({ [c.id]: c.name })));

  // if (dict[129] !== undefined) {
  //   console.log("dict[123] " + dict[126]);
  // }else{
  //   console.log("key 123 is undefined");
  // }

  return <div> Welcome!</div>;
}
