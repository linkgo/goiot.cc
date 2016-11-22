import './index.html';
import './index.less';
import dva from 'dva';
import { browserHistory } from 'dva/router';

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
  history: browserHistory,
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/products'));
app.model(require('./models/homeMotion'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
















