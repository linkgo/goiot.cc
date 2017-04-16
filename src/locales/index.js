import { addLocaleData, defineMessages } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_US from './en_US';
import zh_CN from './zh_CN';

export function addLocalesDataWrap() {
  addLocaleData([...en,...zh]);
}

export function getIntlLocale() {
  addLocalesDataWrap();
  return navigator.language.split('-')[0];
}

export function getIntlMessages() {
  switch(navigator.language.split('-')[0]){
        case 'en':
            return en_US;
            break;
        case 'zh':
            return zh_CN;
            break;
        default:
            return en_US;
    }
}

export function defineMessagesWrap(defs) {
  var src = {};
  defs.forEach(function(def) {
    src[def[0]] = {
      id: def[0],
      defaultMessage: def[1]? def[1] : def[0]
    }
  });

  return defineMessages(src);
}

export function defineMessagesForModule(module) {
  var src = {};
  var msgs = en_US;
  var pre = "";

  var modA = module.split(".");

  Object.keys(msgs).map(function(msg, i) {

    var match = true;
    var msgA = msg.split(".");

    modA.forEach(function(sub, i) {
      if (sub !== msgA[i]) {
        match = false;
        return
      }
    });
    if (match) {
      src[msgA[msgA.length -1]] = {
        id : msg,
        defaultMessage: msgs[msg]
      }
    }
  });

  // console.log(src);
  return defineMessages(src);
}
