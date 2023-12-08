import {QueryClient, QueryClientProvider} from 'react-query';
import DataFetchingComponent from "./components/DataFetchingComponent";
import './App.css';

function App(){
  const queryClient = new QueryClient();

  return(
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <h1>React Query Tutorial</h1>
        <DataFetchingComponent />
      </div> 
    </QueryClientProvider>
  )
}

export default App;