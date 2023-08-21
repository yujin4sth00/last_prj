
import { useState } from 'react';
import './App.css';
import BarEx from './components/chartEx/BarEx';
import DoughnutEx from './components/chartEx/DoughnutEx';
import LineEx from './components/chartEx/LineEx';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  //사이드바를 보여줄지 말지를 결정
  //sidebarOpen=true --> sidebar 보여줌, false이면 보여주지 않음
  const [sidebarOpen, setSidebarOpen]=useState(false);
  const openSidebar=()=>{
    setSidebarOpen(true);
    console.log('sidebarOpen: '+ sidebarOpen);
  }
  const closeSidebar=()=>{
    setSidebarOpen(false);
    console.log('sidebarOpen: '+ sidebarOpen);
  }
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>

  );
}


function App_chart() {
  return (
    <div className="App">
      <h2>react chartjs 이용 그래프 그리기 연습</h2>
      <LineEx></LineEx>
      <BarEx></BarEx>
      <DoughnutEx></DoughnutEx>
    </div>
  );
}

export default App;
