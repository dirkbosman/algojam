import React, { useState } from "react";
import { Button } from "reactstrap";
import useLocalStorage from "../hooks/useLocalStorage";

// const Sidebar = () => (

const Sidebar = ({ uid }) => {
  // const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  // const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  // Local Storage (Begin)
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  const handleBookmarks = (uid) => {
    // const storedBookmarks = JSON.parse(
    //   window.localStorage.getItem("bookmarks") || "[]"
    // );
    // if (storedBookmarks.indexOf(uid) === -1) {
    //   return setBookmarks([uid, ...storedBookmarks]);
    // }

    const newb = JSON.parse(bookmarks);

    setBookmarks(newb.filter((item) => item !== uid));
  };
  // Local Storage (End)

  const listItems = bookmarks.map((a, i) => (
    <li key={i} className="BookMarkedItem" style={{ padding: "5px" }}>
      {a}{" "}
      {/* <Button outline color="info" size="sm">
        Search
      </Button>{" "} */}
      {/* <Button
        outline
        color="danger"
        size="sm"
        onClick={() => deleteBookmark(uid)}
      >
        Remove
      </Button>{" "} */}
      <Button
        color="danger"
        size="sm"
        onClick={() => handleBookmarks(uid)}
        style={{
          marginBottom: "1rem",
          backgroundColor: bookmarks.indexOf(uid) ? "blue" : "#8CFACA",
          color: "black",
          border: "1px solid grey",
          margin: "6px 0px",
        }}
      >
        Bookmark
      </Button>
    </li>
  ));

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
