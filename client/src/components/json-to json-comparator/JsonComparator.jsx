import React, { useState } from 'react';
import './JsonComparator.css'; 

const JsonComparator = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file1Json, setFile1Json] = useState(null);
  const [file2Json, setFile2Json] = useState(null);
  const [differences, setDifferences] = useState(null);

  // File upload handler
  const handleFileUpload = (e, setFile, setJsonData) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const json = JSON.parse(e.target.result);
      setJsonData(json);
    };
    reader.readAsText(file);
  };

  // Comparator function to find missing keys and values, as well as value differences
  const compareJson = () => {
    const diff = {
      missingInFile1: findMissing(file2Json, file1Json),
      missingInFile2: findMissing(file1Json, file2Json),
      differentValues: compareValues(file1Json, file2Json),
    };
    setDifferences(diff);
  };

  // Function to find missing keys and values
  const findMissing = (source, target) => {
    const missing = {};
    for (const key in source) {
      if (!(key in target)) {
        missing[key] = source[key];
      } else if (typeof source[key] === 'object' && typeof target[key] === 'object') {
        const nestedDiff = findMissing(source[key], target[key]);
        if (Object.keys(nestedDiff).length > 0) {
          missing[key] = nestedDiff;
        }
      }
    }
    return missing;
  };

  // Function to compare values of common keys in two JSON objects
  const compareValues = (json1, json2) => {
    const differences = {};
    for (const key in json1) {
      if (key in json2) {
        if (typeof json1[key] === 'object' && typeof json2[key] === 'object') {
          // Recursively compare nested objects
          const nestedDiff = compareValues(json1[key], json2[key]);
          if (Object.keys(nestedDiff).length > 0) {
            differences[key] = nestedDiff;
          }
        } else if (json1[key] !== json2[key]) {
          // Record value differences for the same key
          differences[key] = {
            valueInFile1: json1[key],
            valueInFile2: json2[key],
          };
        }
      }
    }
    return differences;
  };

  // Reset all the content and state to default
  const handleRefresh = () => {
    setFile1(null);
    setFile2(null);
    setFile1Json(null);
    setFile2Json(null);
    setDifferences(null);
    document.getElementById('fileInput1').value = '';
    document.getElementById('fileInput2').value = '';
  };

  return (
    <div className="json-comparator-container">
      <h2 className="title">JSON Comparator</h2>
      <div className="file-upload-container">
        <div className="file-upload">
          <input
            id="fileInput1"
            type="file"
            accept=".json"
            onChange={(e) => handleFileUpload(e, setFile1, setFile1Json)}
          />
          
        </div>
        <div className="file-upload">
          <input
            id="fileInput2"
            type="file"
            accept=".json"
            onChange={(e) => handleFileUpload(e, setFile2, setFile2Json)}
          />
          
        </div>
      </div>
      <div className="buttons-container">
        <button className="compare-btn" onClick={compareJson} disabled={!file1Json || !file2Json}>
          Compare JSON
        </button>
        <button className="refresh-btn" onClick={handleRefresh}>
          Reset
        </button>
      </div>

      {differences && (
        <div className="results-container">
          <h3 className="title">Result</h3>
          <div className="grid-container">
            <div className="grid-item">
              <h4 className='sub-heading'>Missing in File 1:</h4>
              <pre>{JSON.stringify(differences.missingInFile1, null, 2)}</pre>
            </div>
            <div className="grid-item">
              <h4 className='sub-heading'>Missing in File 2:</h4>
              <pre>{JSON.stringify(differences.missingInFile2, null, 2)}</pre>
            </div>
            <div className="grid-item">
              <h4 className='sub-heading'>Different Values:</h4>
              <pre>{JSON.stringify(differences.differentValues, null, 2)}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JsonComparator;
