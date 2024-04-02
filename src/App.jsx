import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, Footer } from './components';
import './index.css'
import './App.css'
import { CampaignDetails, CreateCampaign, Home, Profile, Projects, Documentation } from './pages';

const App = () => {
  return (
    <div className="App">
      <div className="side">
       
      </div>
      <div className="nav">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/Projectpage" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
        <Footer/>
    </div>
  )
}
export default App