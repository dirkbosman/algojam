import React, { useContext } from "react";
import { Button } from "reactstrap";
// import useLocalStorage from "../hooks/useLocalStorage";

import { StateContext } from "../components/stateContext";

const Sidebar = ({ uid }) => {
  const { bookmarks, handleBookmarks } = useContext(StateContext);

  // Local Storage (End)

  // Object.keys(myObject).map(function(key, index) {
  //   myObject[key] *= 2;
  // });

  // const listItems = Object.keys(bookmarks).map((a, i) => (
  const listItems = bookmarks.map((a) => (
    <li key={a} className="BookMarkedItem" style={{ padding: "5px" }}>
      {a}{" "}
      <Button
        color="primary"
        size="sm"
        onClick={() => handleBookmarks(a)}
        style={{
          marginBottom: "1rem",
          backgroundColor: bookmarks.includes(uid) ? "#8CFACA" : "blue",
          color: "black",
          border: "1px solid grey",
          margin: "6px 0px",
        }}
      >
        {bookmarks.includes(uid) ? "💾" : "🔖"}
      </Button>
    </li>
  ));

  console.log(typeof listItems);

  return (
    <div
      style={{
        padding: "20px 0px 0px 0px",
        width: "100%",
        height: "100%",
        border: "1px solid grey",
        textAlign: "center",
      }}
    >
      <h4>Bookmarked JAMS</h4>
      <ul className="entries" uid={uid}>
        {listItems}
      </ul>
    </div>
  );
};

//   <div>
//     <Card>
//       <CardBody>
//         <CardTitle className="text-center text-uppercase mb-3">
//           Newsletter
//         </CardTitle>
//         <Form className="text-center">
//           <FormGroup>
//             <Input
//               type="email"
//               name="email"
//               placeholder="Your email address ..."
//             />
//           </FormGroup>
//           <Button className="btn btn-outline-success text-uppercase">
//             Subscribe
//           </Button>
//         </Form>
//       </CardBody>
//     </Card>
//   </div>

export default Sidebar;
