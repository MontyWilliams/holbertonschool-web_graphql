import ApolloClient from 'apollo-boost';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AddProject from './components/AddProject';

const client = new ApolloClient({
  url: 'http://localhost:4000/graphql'
})
function App() {
  return (
    <div id = "main">
      <div id = "bg" >
      </div>
    <h1> Holberton school tasks </h1>
    <TaskList />
    <AddProject />
    <AddTask />
  </div>
  );
}

export default App;
