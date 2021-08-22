import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as GoIcons from 'react-icons/go';


export const SidebarData = [
    {
        title: 'Flight',
        path: '/',
        icon: <FaIcons.FaRegPaperPlane/>,
        cName: 'nav-text'
    },
    {
        title: 'Mission',
        path: '/mission',
        icon: <CgIcons.CgFlagAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Config',
        path: '/config',
        icon: <AiIcons.AiOutlineSetting/>,
        cName: 'nav-text'
    },
    {
        title: 'Docs',
        path: '/docs',
        icon: <BsIcons.BsBook/>,
        cName: 'nav-text'
    }

]

export const MoreSideData = [
  {
    title: 'HUD',
    icon: <BsIcons.BsAppIndicator/>,
    cName: 'sub-menu'
  },
  {
    title: 'Status',
    icon: <SiIcons.SiActigraph/>,
    cName: 'sub-menu'
  },
  {
    title: 'Flight Data',
    icon: <GoIcons.GoGraph/>,
    cName: 'sub-menu'
  }
]
