import React from 'react';
import HomeIcon from "../assets/icons8-home-24.png"
import { Link } from 'react-router-dom';

let SideMenu = () => {  // Side Menu for the application.

    return (
        <div>
            <div className = "SideMenu">
                <ul>
                    <li className = "closeBtn" onClick = {CloseMenu}>&times;</li>
                    <li><Link to = "/"><img src = {HomeIcon} alt = "Home Icon" style = {{marginRight:"15px"}} />Home</Link></li>
                </ul>
            </div>
        </div>
    )

}

let ShowMenu = (pageName) => {  // Function to display the menu on click of the Hamburger Icon.

    if(pageName === "homepage"){
        document.getElementsByClassName("categories")[0].style.filter = "blur(10px)";
        document.getElementsByClassName("products")[0].style.filter = "blur(10px)";
    } else {
        document.getElementsByClassName("productPage-main")[0].style.filter = "blur(10px)";
    }

    document.getElementsByClassName("SideMenu")[0].style.width = "350px";
    document.getElementsByClassName("SideMenu")[0].style.borderRight = "2px solid black";
    document.getElementById("sideMenuBtn").style.display = "none";


}

let CloseMenu = () => { // Function to hide the menu on click of the Close Icon.

    if(document.getElementsByClassName("categories")[0]){
        document.getElementsByClassName("categories")[0].style.filter = "blur(0px)";
        document.getElementsByClassName("products")[0].style.filter = "blur(0px)";
    } else {
        document.getElementsByClassName("productPage-main")[0].style.filter = "blur(0px)";
    }

    document.getElementsByClassName("SideMenu")[0].style.width = "0px";
    document.getElementsByClassName("SideMenu")[0].style.borderRight = "none";
    document.getElementById("sideMenuBtn").style.display = "block";



}

export {SideMenu, ShowMenu}
