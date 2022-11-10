
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import CodeDB from './CodeDB';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return code ? <CodeDB code={code} /> : <Login />
}

export default App;
