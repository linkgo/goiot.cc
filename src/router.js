import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import { IntlProvider } from 'react-intl';
import { getIntlLocale, getIntlMessages } from './locales';
import NotFound from './routes/NotFound';
import HomeGrid from './routes/HomeGrid';

export default function({ history }) {
  return (
  	<IntlProvider locale={getIntlLocale()} messages={getIntlMessages()} >
	    <Router history={history}>
	      <Route path="/" component={HomeGrid} />
	      <Route path="*" component={NotFound} />
	    </Router>
    </IntlProvider>
  );
};
