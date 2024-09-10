import { useEffect, useState } from 'react';
import './App.css';
import CommentList from './components/CommentList';
import Header from './components/Header';
import Await from './components/Await';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fillData() {
    setTimeout(() => {
      setData([
        {id: 1, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus iure inventore voluptates corrupti dolorem doloribus eveniet voluptate similique fugit? Sed perferendis labore sunt consectetur et repellat animi repellendus quo.", status: ""},
        {id: 2, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit", status: "like"},
        {id: 3, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit", status: ""},
        {id: 4, text: "Lorem, ipsum dolor sit", status: "dislike"},
        {id: 5, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit", status: ""},
        {id: 6, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit", status: ""},
      ]);
      setLoading(false);
    }, 2000)
  }

  useEffect(() => {
    setLoading(true);
    fillData();
  }, [])

  return (
    <div className="App">
      {loading && <Await />}
      <Header data={data} setData={setData} />
      <CommentList data={data} setData={setData} />
    </div>
  );
}

export default App;
