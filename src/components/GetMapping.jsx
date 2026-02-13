import React, { useState } from 'react';
import api from '../api';

const GetMapping = () => {
    const [id, setId] = useState('');
    const [result, setResult] = useState(null);

    const handleFetch = async () => {
        try {
            const response = await api.get(`/api/map/${id}`);
            setResult(response.data);
        } catch (error) {
            console.error(error);
            setResult({ name: 'Not Found' });
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>Find Name by ID</h3>
            <input 
                type="number" 
                placeholder="Enter ID" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
            />
            <button onClick={handleFetch}>Fetch Name</button>
            
            {result && (
                <p>Result: <b>{result.name}</b></p>
            )}
        </div>
    );
};

export default GetMapping;
