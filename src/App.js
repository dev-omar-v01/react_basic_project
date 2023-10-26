
import React from "react";
import List from "./components/list";
import NestedList from "./components/nested_data_list";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";


export default function App(){
    return (
        <>
     
        {<NestedList />}
        {<Card1 />}
        {<Card2 name="Md Omar Faruk" />}
        {<Card3 />}
    
        </>
    );
}
