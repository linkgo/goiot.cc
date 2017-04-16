import React from 'react';
import { Button } from 'antd';
import styles from './NotFound.less';
import { injectIntl } from 'react-intl';
import { defineMessagesForModule } from '../locales';

const messages = defineMessagesForModule('error');


const NotFound = (props) => {
	const {formatMessage} = props.intl;
  return (<div className="error-notfount">
    <div className="notfount-content">
      <h1 className={styles.title}>404</h1>
      <p className={styles.desc}>{ formatMessage(messages.notFount) }</p>
      <a href="/"><Button type="primary" style={{ marginTop: 5 }}>{ formatMessage(messages.toHome) }</Button></a>
    </div>
  </div>);
}

export default injectIntl(NotFound);
