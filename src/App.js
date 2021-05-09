import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import ImageGrid from './components/ImageGrid';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(response => {
        setData(response.data)
      }
      )
    .catch(err => console.log(err))
  }, [query]);

  const searchInput = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <Header />
      <Search searchInput={searchInput} query={query} />
      <ImageGrid data={data} />
    </div>
  );
}

export default App;
