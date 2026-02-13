import React, { useState } from 'react';
import api from '../api';

const CreateMapping = () => {
    const [name, setName] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/map', { name });
            setResult(response.data);
            setName('');
        } catch (error) {
            console.error(error);
            alert('Error creating mapping');
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>Generate ID</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <button type="submit">Generate</button>
            </form>
            {result && (
                <p>Created! Name: <b>{result.name}</b> has ID: <b>{result.id}</b></p>
            )}
        </div>
    );
};

export default CreateMapping;
