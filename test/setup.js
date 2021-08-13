import 'regenerator-runtime/runtime';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
// import { JSDOM } from 'jsdom';

configure({ adapter: new Adapter() });

// Before All Tests Start
// beforeAll(() => {
// 	const testURL = 'http://localhost';
// 	global.dom = new JSDOM(
// 		'<!doctype html><html><body><div id="root"></div></body></html>',
// 		{ url: testURL }
// 	);
// 	global.window = global.dom.window;
// 	global.document = global.dom.window.document;
// 	global.navigator = global.window.navigator;
// 	global.console.log = jest.fn();
// });

// After Each Test
// afterEach(() => {
// 	jest.clearAllMocks();
// 	jest.resetModules();
// });
