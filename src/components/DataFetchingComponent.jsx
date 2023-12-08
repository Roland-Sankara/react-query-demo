// src/components/DataFetchingComponent.js
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
};

const DataFetchingComponent = () => {
  const { data, isLoading, error } = useQuery('exampleQuery', fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Task: <br/> <span>{data.title}</span></h1>
    </div>
  );
};

export default DataFetchingComponent;
