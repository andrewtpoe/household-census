import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if(!(key in global)) {
    global[key] = window[key];
  }
});

console.log('****************************************************************');

export const defaultUserObject = {
  object_type: 'user',
  id: '1',
  email: 'test_email@gmail.com',
  current_sign_in_at: '2016-03-25T00:00:00',
};
