import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import Maindash from "./Component/Maindash/Maindash";
import Navbar from "./Component/Navbar/Navbar";
import Component from './Component/Componentboard/Component';
import Colors from "./Component/Utility/Colors";
import Borders from "./Component/Utility/Borders";
import Charts from "./Component/Charts/Charts";
import Table from "./Component/Table/Table";
import EditPage from './Component/userpage/user.Edit';
import RegisterPage from './Component/userpage/user.register';
import StudentRegisterPage from './Component/studentsmentorsassign/addStudent';
import StudentsPage from './Component/studentsmentorsassign/students.list';
import StudentEditPage from './Component/studentsmentorsassign/Editstudentdetails';
import MentorsPage from './Component/studentsmentorsassign/mentorslist';
import MentorRegisterPage from './Component/studentsmentorsassign/addMentors';
import MentorEditPage from './Component/studentsmentorsassign/Editmentors';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tab } from "bootstrap";


function App() {
  return (
    <div className="body">
      <div className=" AppGlass">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navbar/>} />
            <Route path="/dashboard" element={<Maindash />} />
            <Route path='/Navbar' element={<Navbar/>}/>
            <Route path='/Components' element={<Component/>}/>
            <Route path='/Utilitycolors' element={<Colors/>}/>
            <Route path='/Utilityborders' element={<Borders/>}/>
            <Route path='/Charts' element={<Charts/>}/>
            <Route path='/Table' element={<Table/>}></Route>
            <Route path='/edituser/:id' element={ <EditPage/>}></Route>
            <Route path='/usersignup' element={<RegisterPage/>}></Route> 
            <Route path="/studentslist" element={<StudentsPage/>}></Route> 
            <Route path="/createstudentslist" element={<StudentRegisterPage/>}></Route>
            <Route path="/editstudentlist/:id" element={<StudentEditPage/>}></Route>
            <Route path="/mentorslist" element={<MentorsPage/>}></Route>    
            <Route path="/creatementorslist" element={<MentorRegisterPage/>}></Route> 
            <Route path="/editmentorlist/:id" element={<MentorEditPage/>}></Route>          
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
