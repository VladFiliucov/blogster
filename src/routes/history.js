import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

const history = __CLIENT__ ? createBrowserHistory() : createMemoryHistory;

export default history;
