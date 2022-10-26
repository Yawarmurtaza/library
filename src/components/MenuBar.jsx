import { useContext } from "react";
import { BookModalContext } from "./App";

export default function MenuBar(props) {
  const { displayModalDialogue, setDisplayModalDialogue,
    bookModalTitle, setBookModalTitle,
    bookModalAuthors, setBookModalAuthors,
    bookModalPub, setBookModalPub,
    bookModalPubDate, setBookModalPubDate,
    bookModalId } = useContext(BookModalContext);

  // sets the active tab (clicked) in the menu bar. It also sets the currentTab value using setCurrentTab function which is handeled by 
  // App component (parent).
  function TabItem(tabProps) {
    const activeTab = tabProps.tabValue === props.currentTab ?
      "nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active" :
      "nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2";

    return (
      <li className="nav-item">
        <a href="#" className={activeTab} onClick={() => props.setCurrentTab(tabProps.tabValue)}>
          <i className="icon-layers mr-1"></i>
          <span className="d-none d-md-block">{tabProps.tabText}</span>
        </a>
      </li>
    );
  }
  
  function AddNewBook_Clicked(){
    setBookModalTitle("New Title");
    setBookModalAuthors("NewAuthor");
    setBookModalPub("Sindh Text Book Board");
    setBookModalPubDate("2015-08-07");
    setDisplayModalDialogue(true);
  }

  // displays the add book button on the right side of the menu bar only when current tab is Books.
  function AddBookButton() {
    return (
      <li className="nav-item ml-auto">
        <a href="#" onClick={() => AddNewBook_Clicked()} className="nav-link btn-light rounded-pill d-flex align-items-center px-3">
          <i className="icon-note m-1"></i>
          <span className="d-none d-md-block font-14">Add Book</span>
        </a>
      </li>
    );
  }  
  return (
    <ul className="nav nav-pills p-3 bg-white mb-3 founded-pill align-items-center">
      <TabItem tabValue={"Books"} tabText={"Books"} />
      <TabItem tabValue={"Aurthors"} tabText={"Aurthors"} />
      <TabItem tabValue={"Publishers"} tabText={"Publishers"} />

      {props.currentTab === "Books" && <AddBookButton />}

    </ul>
  );
}