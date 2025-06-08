import { createRoot } from 'react-dom/client'
import './index.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <Router>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
  </Router>

)
