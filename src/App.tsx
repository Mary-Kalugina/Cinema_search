import React, { useEffect, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Requests from './components/Requests';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost'; 
import ShowPost from './components/ShowPost';
import Edit from './components/Edit';

export interface DataProps {
  id: number;
  content: string;
  created: number;
}

const App: React.FC = () => {
  const [postsArr, setPostsArr] = useState<DataProps[]>([]);
  const [activePost, setActivePost] = useState<DataProps>({id: 0,content: 'string', created: 0})
  const requests = useMemo(() => new Requests(), []);

  const fetchData = async () => {
    try {
      const data = await requests.get();
      setPostsArr(data as DataProps[]);  
    } catch (error) {
      console.error('Error:', error);
      setPostsArr([]);
    }
  };

  useEffect(() => {  
    fetchData();
  }, []);
  
  return (
      <Routes>
        <Route path="/" element={<Posts posts={postsArr} postManager={setActivePost}/>} />
        <Route path="/posts/new" element={<CreatePost update={fetchData}/>} />
        <Route path="/posts/:id" element={<ShowPost postData={activePost} update={fetchData} />} />
        <Route path="/posts/:id/edit" element={<Edit postData={activePost} update={fetchData} setActive={setActivePost}/>} />
      </Routes>
  );
};

export default App;
