import React, { useEffect, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Requests from './components/Requests';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost'; 
import ShowPost from './components/ShowPost';
import Edit from './components/Edit';
import { PostProvider } from './components/PostContext'; 
import { usePostContext } from './components/PostContext';

interface DataProps {
  id: number;
  content: string;
  created: number;
}

const App: React.FC = () => {
  const [postsArr, setPostsArr] = useState<DataProps[]>([]);
  const { postState } = usePostContext();

  const requests = useMemo(() => new Requests(), []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await requests.get();
        setPostsArr(data as DataProps[]);  
      } catch (error) {
        console.error('Error:', error);
        setPostsArr([]);
      }
    };
  
    fetchData();
  }, []);
  
  

  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Posts posts={postsArr} />} />
        <Route path="/posts/new" element={<CreatePost addPosts={setPostsArr}/>} />
        {postState && (
          <>
            <Route path="/posts/:id" element={<ShowPost postData={postState} />} />
            <Route path="/posts/:id/edit" element={<Edit postData={postState} />} />
          </>
        )}
      </Routes>
    </PostProvider>
  );
};

export default App;
