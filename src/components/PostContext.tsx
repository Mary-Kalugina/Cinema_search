import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface DataProps {
  id: number;
  content: string;
  created: number;
}

export interface PostContextProps {
  postState: DataProps | undefined;
  setPostState: React.Dispatch<React.SetStateAction<DataProps | undefined>>;
}

export const PostContext = createContext<PostContextProps>({
  postState: undefined,
  setPostState: () => undefined,
});

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [postState, setPostState] = useState<DataProps | undefined>();

  return (
    <PostContext.Provider value={{ postState, setPostState }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
