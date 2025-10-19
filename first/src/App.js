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
import { UserProvider } from './components/context/UserContext';
import ComponentC from './components/context/ComponentC';
import FocusInput from './components/ref/FocusInput';
import RefsDemo from './components/ref/RefsDemo';
import FRParentInput from './components/ref/FRParentInput';
import ClickCounter2 from './components/ref/ClickCounter';
import { Navbar } from './components/routing/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/routing/Home';
import { About } from './components/routing/About';
import StudentList from './components/basics/StudentList';
import Form from './components/forms/Form';
import List from './components/basics/List';
import Counter from './components/state/Counter';
import ControlledForm from './components/basics/ControlledForm';
import UncontrolledForm from './components/basics/UncontrolledForm';
import LoginRegisterForm from './components/basics/LoginRegisterForm';
import LifeCycleMethods from './components/basics/LifeCycleMethods';
import FunctionVersion from './components/basics/UseEffect';
import TimerApp from './components/basics/TimerApp';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const students = [
    {id:1, name: 'Haresh', marks: 49},
    {id:2, name: 'Varsha', marks: 19},
    {id:3, name: 'Ankita', marks: 29},
    {id:4, name: 'Amit', marks: 79},
    {id:5, name: 'Sumit', marks: 59},
  ]
  const sampleTodos = [
    { text: 'Learn React', completed: true },
    { text: 'Practice Lists', completed: false },
    { text: 'Build App', completed: false }
  ];
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
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
      </Greet>*/}
      {/* <ClickCounter /> */}
      {/* <HoverCounter />
      <User name={(IsLoggedIn) => IsLoggedIn ? "Haresh" : "Varsha"} /> */}
      {/* <ParentComponent />  */}
      {/* <ClassClick />
      <FunctionClick />
      <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />]
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <LifecycleB /> */}
      {/* <UserProvider value="Haresh">
        <ComponentC />
      </UserProvider>
      <FocusInput /> 
      <RefsDemo />
      <FRParentInput />
      <ClickCounter2 name="Haresh"/> */}
      {/* <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </> */}
      {/* <h1>Student Directory</h1>
      <StudentList students={students} /> */}
      {/* <Form /> */}
      {/* <List todos={sampleTodos} showOnlyPending={true}/> */}
      {/* <Counter />
       */}
      {/* <ControlledForm />
       */}
       {/* <UncontrolledForm /> */}
       {/* <LoginRegisterForm /> */}
       {/* <LifeCycleMethods /> */}
       {/* <FunctionVersion /> */}
       <TimerApp />
       <h2>Count App</h2>
       <h2>{count}</h2>
       <button onClick={()=> dispatch({type:"INCREMENT"})}>+</button>
       <button onClick={()=> dispatch({type: "DECREMENT"})}>-</button>
    </div>
  );
}

export default App;
