import React from 'react'
import { Header } from './components/header';
import { AttendeeList } from './components/attendee-list';

function App() {
  return (
    <div className='max-w-[1216px] mx-auto py-5 flex flex-col gap-5'>
      <Header></Header>
      <AttendeeList></AttendeeList>
    </div>
  )
}

export default App;
