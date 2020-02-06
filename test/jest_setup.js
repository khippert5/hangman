const jsdom = require('jsdom');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

const dom = new jsdom.JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const { window } = global;

if (!window) {
  window = dom.window;
}
