import './App.css';
import Message from './components/state/State';
import Greet from './components/state/Props';
import ClickCounter from './components/state/ClickCounter';
import HoverCounter from './components/state/HoverCounter';
import User from './components/state/User';
import ParentComponent from './components/state/ParentComponent';
import ClassClick from './components/state/ClassClick';
import FunctionClick from './components/state/FunctionClick';
import ErrorBoundary from './components/error_boundary/ErrorBoundary';
import Hero from './components/error_boundary/Hero';
import LifecycleA from './components/error_boundary/LifecycleA';
import LifecycleB from './components/error_boundary/LifecycleB';

function App() {
  return (
    <div className="App">
      {/* <Message />
      <Greet name="Bruce">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark">
        <button>Action</button>
      </Greet>
      <Greet name="Diana">
        <i>Hello World!</i>
      </Greet>
      <ClickCounter />
      <HoverCounter />
      <User name={(IsLoggedIn) => IsLoggedIn ? "Haresh" : "Varsha"} />
      <ParentComponent /> */}
      {/* <ClassClick />
      <FunctionClick />
      <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />]
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      <LifecycleB />
    </div>
  );
}

export default App;
