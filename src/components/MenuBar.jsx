
export default function MenuBar(props){
    //const [currentTab, setCurrentTab] = useState("Books"); // ["Books", "Aurthors"]

    function TabItem(tabProps){
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
    return (
        <ul className="nav nav-pills p-3 bg-white mb-3 founded-pill align-items-center">            
            <TabItem tabValue={"Books"} tabText={"Books"}/>
            <TabItem tabValue={"Aurthors"} tabText={"Aurthors"}/>
            
        </ul>
    );
}