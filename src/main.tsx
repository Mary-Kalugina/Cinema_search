import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PostProvider } from './components/PostContext.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PostProvider>
     <App />
    </PostProvider>
  </BrowserRouter>
)
