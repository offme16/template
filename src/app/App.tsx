import MainPage from 'pages/MainPage/UI/MainPage';
import "./styles/index.scss";
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
function App() {
  return <div className="app">
    <Theme preset={presetGpnDefault}>
      <MainPage />
    </Theme>
  </div>;
}

export default App;
