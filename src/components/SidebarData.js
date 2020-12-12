import React from 'react';
import { BiHome, BiPhone } from "react-icons/bi";
import { FcAbout, FcServices } from "react-icons/fc";
import { BsPencilSquare } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
      

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: < BiHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/dashboard',
    icon : < FcAbout />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/reports',
    icon: < BiPhone />,
    cName: 'nav-text'
  },
  {
    title: 'Our Services',
    path: '/team',
    icon: <FcServices />,
    cName: 'nav-text'
  },
  {
    title: 'Use Smart Form',
    path: '/messages',
    icon: <BsPencilSquare />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/messages',
    icon: <FiSettings />,
    cName: 'nav-text'
  }
];
