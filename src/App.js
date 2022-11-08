import React, { memo } from 'react'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

// 引入路由
import routes from './router';
// 引入store状态
import store from './store';
// 引入重置样式
import './assets/css/reset.css';

import { HashRouter as Router } from 'react-router-dom'
// 底部
import AppFooter from '@/components/app-footer';
// 头部
import AppHeader from '@/components/app-header';
// 播放器
import AppPlayer from './pages/player/app-play-bar';
// 回到顶部
import BackTop from './components/back-top'; 

const App = memo(() => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <AppHeader />
            {renderRoutes(routes)}
            <AppFooter />
            <AppPlayer/>
            <BackTop />
          </header>
        </div>
      </Router>
    </Provider>
  )
})

export default App;
