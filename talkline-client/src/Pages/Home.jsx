import React, { Component } from "react";
import TopBar from '../Components/topBar';
import SideBar  from "../Components/sideBar";
import Feed from "../Components/Feed";
import RightBar from "../Components/rightBar";

class Home extends Component {
 
    render() { 
        return (
           
            <div className="">
                 <TopBar/>
                 <div className="flex">
                 <SideBar/>
                <Feed />
                <RightBar/>
                 </div>
               
            </div>
        );
    }
}
 
export default Home;