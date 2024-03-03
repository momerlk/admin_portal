import { useState } from 'react';
import { Group, Code , TextInput } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import classes from './navbar.module.css';
import "./App.css"

const data = [
  { link: '/updates', label: 'Updates'},
  { link: '/attendance', label: 'Attendance' },

];

export function Navbar(){
  const [active, setActive] = useState('Updates');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700}>Co Curricular Admin Portal</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="/updates" className={classes.link} >
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <span>Logout</span>
        </a>
      </div>

      
    </nav>
    </div>
  )
}

export function App(){
  return (
    <div className="App">      

      <Navbar></Navbar>
      <div className="content">
        <Outlet />
        </div>
      
    </div>
  )
}