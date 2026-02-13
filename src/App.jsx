import React from 'react';
import CreateMapping from './components/CreateMapping';
import GetMapping from './components/GetMapping';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>ID &harr; Name Mapper</h1>
      <p>Frontend: React (Vite) | Backend: Spring Boot</p>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <CreateMapping />
        <GetMapping />
      </div>
    </div>
  );
}

export default App;
