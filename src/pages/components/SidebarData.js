import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from "react-icons/cg";
import * as FcIcons from "react-icons/fc";

export const SlidebarData =[
    {
        title: 'Profile', 
        path: '/',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Todos-App', 
        path: '/todosapp',
        icon: <FcIcons.FcTodoList />,
        cName: 'nav-text'
    },
    {
        title: 'Visualize chat timeline', 
        path: '/chattimeline',
        icon: <FcIcons.FcTimeline />,
        cName: 'nav-text'
    },
]