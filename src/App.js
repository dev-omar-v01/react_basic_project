import React from "react";
import Card from './components/Card';
import Data from './data.json';
import List from "./components/list";
import NestedList from "./components/nested_data_list";


// function App(){
//     // let items = [];
//     // for(let x=0;x<Data.length;x++){
//     //     items.push(<Card  titleText={Data[x].title} descText={Data[x].desc} />)
//     // }
//     // items =

//    return <div>
//             <h1 className="headingStyle">ToDo App</h1>
//            {Data.map((e,index)=><Card key={index} titleText={e.title} descText={e.desc} /> )}
            
//           </div>
// }
// export default App;


export default function App(){
    return (
        <>
        {/* <List /> */}
        {<NestedList />}
        
        </>
    );
}