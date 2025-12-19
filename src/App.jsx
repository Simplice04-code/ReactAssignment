import './App.css'
import CurrentDate from './components/welcome.jsx'
import HobbiesList from './components/hobbies.jsx'
import Button from './components/button.jsx'
import Card from './components/card.jsx'
import ItemList from './components/map.jsx'
import Toggle from './components/toggle.jsx'
import Counter from './components/counter.jsx'
import ChangeBg from './components/changebg.jsx'
import SubmitForm from './components/submit.jsx'
import Menu from './components/menu.jsx'
import LoginForm from './components/login.jsx'
import ControlledForm from './components/controlledForm.jsx'
import ValidationForm from './components/validation.jsx'
import MultiStepForm from './components/multistep.jsx'
import CheckboxForm from './components/checkbox.jsx'
import ProductDetails from './components/parameter.jsx'
import Navigation from './components/navbar.jsx'
import ParentComponent from './components/memo1.jsx'
import CounterWithList from './components/memo2.jsx' 
import MemoizedHeavyCalculation from './components/memo3.jsx' 
import MemoizedTodoList from './components/memo4.jsx'
import LiveTimeWithStaticPart from './components/memo5.jsx'
import LecturerRegistrationForm from './components/lecturers.jsx'
import StudentRegistrationForm from './components/student.jsx'
import DriverRegistrationForm from './components/drivers.jsx'
import BookRegistrationForm from './components/books.jsx'
import ModuleRegistrationForm from './components/modules.jsx'



function App() {
  return (
    <div>
      <CurrentDate/>
      <HobbiesList/>
      <Button text={'Click me'} color={'grey'}/>
      <Button text={'Click me again'} color={'blue'}/>
      <Card name={'IKUZWE BANA Simplice'} age={21} email={'ikuzwesimpa@gmail.com'} />
      <ItemList />
      <Toggle />
      <Counter />
      <ChangeBg />
      <SubmitForm />
      <Menu />
      <LoginForm />
      <ControlledForm />
      <ValidationForm />
      <MultiStepForm />
      <CheckboxForm />
      <ProductDetails />
      <Navigation />
      <ParentComponent />
      <CounterWithList />
      <MemoizedHeavyCalculation />
      <MemoizedTodoList />
      <LiveTimeWithStaticPart />
      <LecturerRegistrationForm />
      <StudentRegistrationForm />
      <DriverRegistrationForm />
      <BookRegistrationForm />
      <ModuleRegistrationForm />
    </div>
  );
}

export default App

