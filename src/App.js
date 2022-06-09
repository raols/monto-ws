import { useEffect, useState } from 'react';
import CompanyList from './components/CompanyList';
import Filter from './components/Filter';

import './App.css';

function App() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/capcito/frontend-ws/companies")
      .then(res => res.json())
      .then(res => {
        // Sort by id, DESC is default
        const sortedResult = res.sort((a, b) => b.id - a.id);
        setCompanies(sortedResult);
        setFilteredCompanies(sortedResult);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
      })
  }, []);

  return (
    <div className="max-w-xs max-w-sm max-w-md max-w-lg max-w-xl max-w-2xl m-auto p-12 2xl:p-4">
      <h1 className="text-3xl font-bold text-purple-900">
        Companies
      </h1>
      {error
        ? <div>Error: {error}</div>
        : <>
            <Filter filtered={filteredCompanies} all={companies} setFiltered={setFilteredCompanies} />
            {loading
              ? <div>Loading...</div>
              : <CompanyList  companies={filteredCompanies} />
            }
          </>
      }
    </div>
  );
}

export default App;
