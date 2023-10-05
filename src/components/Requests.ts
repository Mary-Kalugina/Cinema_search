interface DataProps {
  id: number,
  content: string,
  created: number
}

export default class Requests {
  
  async get() {
    try {
      const response = await fetch("https://crud-i0cq.onrender.com/posts");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const text = await response.text();
      if (!text) {
        return [];
      }
  
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async post(postData: DataProps) {
    try {
      const response = await fetch("https://crud-i0cq.onrender.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const text = await response.text();
      if (!text) {
        return null;
      }
  
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }  

  async delete(id: number) {
    try {
      const response = await fetch(`https://crud-i0cq.onrender.com/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Delete successful");
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
