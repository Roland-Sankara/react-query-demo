// src/components/DataFetchingComponent.js
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data;
};

const DataFetchingComponent = () => {
  const { data, isLoading, error } = useQuery('exampleQuery', fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Name: <br/> <span>{`${data.results[0].name.first} ${data.results[0].name.last}`}</span></h1>
      <img src={data.results[0].picture.large} alt={data.results[0].name.first} />
    </div>
  );
};

export default DataFetchingComponent;
