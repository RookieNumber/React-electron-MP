import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/Md';
import * as RiIcons from 'react-icons/Ri';
import * as GiIcons from 'react-icons/Gi';


export const SidebarData = [
    {
        title: 'Flight',
        path: '/',
        icon: <FaIcons.FaRegPaperPlane/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill className="arrow" />,
        iconOpened: <RiIcons.RiArrowUpSFill className="arrow" />,
        subNav: [
          {
            title: 'HUD',
            icon: <BsIcons.BsAppIndicator/>,
            cName: 'sub-text',
            path: '/hud',
          },
          {
            title: 'Status',
            icon: <SiIcons.SiActigraph/>,
            cName: 'sub-text',
            path: '/status',

          },
          {
            title: 'Flight Data',
            icon: <GoIcons.GoGraph/>,
            cName: 'sub-text',
            path: '/data'
          }
        ]

    },
    {
        title: 'Mission',
        path: '/mission',
        icon: <CgIcons.CgFlagAlt/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill className="arrow" />,
        iconOpened: <RiIcons.RiArrowUpSFill className="arrow" />,
        subNav: [
          {
            title: 'Quick Start',
            icon: <BsIcons.BsAppIndicator/>,
            cName: 'sub-text'
          },
          {
            title: 'Status',
            icon: <SiIcons.SiActigraph/>,

            cName: 'sub-text'
          },
          {
            title: 'Flight Data',
            icon: <GoIcons.GoGraph/>,

            cName: 'sub-text'
          }
        ]
    },
    {
        title: 'Config',
        path: '/config',
        icon: <AiIcons.AiOutlineSetting/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill className="arrow" />,
        iconOpened: <RiIcons.RiArrowUpSFill className="arrow" />,
        subNav: [
          {
            title: 'Drone',
            icon: <GiIcons.GiDeliveryDrone/>,
            cName: 'sub-text'
          },
          {
            title: 'Ground Control Station',
            icon: <MdIcons.MdLaptop/>,

            cName: 'sub-text'
          }
        ]
    },
    {
        title: 'Docs',
        path: '/docs',
        icon: <BsIcons.BsBook/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill className="arrow" />,
        iconOpened: <RiIcons.RiArrowUpSFill className="arrow" />,
        subNav: [
          {
            title: 'How to?',
            path: '/docs',
            cName: 'doc-text'
          },
          {
            title: 'Architecture',


            cName: 'doc-text'
          },
          {
            title: 'Technology',


            cName: 'doc-text'
          }
        ]
    }

]

export const HUDlist = [
  {
    title: 'GPS',
    cName: 'hud-list'
  },
  {
    title: 'EKF',
    cName: 'hud-list'
  },
  {
    title: 'altitude',
    cName: 'hud-list'
  },
  {
    title: 'speed',
    cName: 'hud-list'
  }
]
