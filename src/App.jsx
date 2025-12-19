import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom'
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
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import ProductDetails from './components/parameter.jsx'
import Navigation from './components/navigation.jsx'
import NotFound from './components/notFound.jsx'
import ParentComponent from './components/memo1.jsx'
import CounterWithList from './components/memo2.jsx' 
import MemoizedHeavyCalculation from './components/memo3.jsx' 
import MemoizedTodoList from './components/memo4.jsx'
import LiveTimeWithStaticPart from './components/memo5.jsx'
import LecturerRegistrationForm from './components/lecturers.jsx'
import StudentRegistrationForm from './components/student.jsx'
import DriverRegistrationForm from './components/drivers.jsx'
import BookRegistrationForm from './components/books.jsx'
import Blog from './components/blog.jsx'
import BlogPost from './components/blogPost.jsx'
import ModuleRegistrationForm from './components/modules.jsx'
function Home() {
  return (
    <div>
      <CurrentDate/>
      <HobbiesList/>
      <Button text={'Click me'} color={'grey'}/>
      <Button text={'Click me again'} color={'grey'}/>
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
      
      <div>
        <p className="flex gap-10 mt-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
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

export default function App() {
  return(
    <Routes className='p-4 rounded shadow-md'>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/blog" element={<Blog />}>
        <Route path=":id" element={<BlogPost />} />
      </Route>
    </Routes>
  )
}

