import { useEffect, useState, FC } from 'react';

const Home: FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/message`);
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage('Error connecting to Flask API');
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js Frontend</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
