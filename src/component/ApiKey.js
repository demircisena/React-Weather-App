import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ApiKeyPage = () => {
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const handleApiKeySubmit = () => {
    localStorage.setItem('apiKey', apiKey);
    alert('API Key başarıyla kaydedildi.');
    navigate('/weather');
  };

  return (
    <div>
      <h3>GEÇERLİ BİR API KEY GİRİNİZ</h3>
      <input
        value={apiKey || ''}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"
        style={{
          width: '300px',
          padding: '10px',
          borderRadius: '10px',
          border: '2px solid black'
        }}
      />
      <button
        onClick={handleApiKeySubmit}
        style={{
          padding: '10px 20px',
          marginTop: '10px',
          borderRadius: '10px',
          border: '2px solid black'
        }}
      >
        Kaydet
      </button>
    </div>
  );
};

export default ApiKeyPage;









