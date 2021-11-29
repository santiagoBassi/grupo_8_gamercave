import LaptopIcon from '@mui/icons-material/Laptop';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';

import logo from '../assets/images/logoGamerCave.png'

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../assets/css/ResponsiveAppBar.css';



function ResponsiveAppBar() {
  return (
    <ProSidebar>
      <img className="logo" src={logo} />
      <Menu iconShape="square">
        <MenuItem icon={<DashboardCustomizeIcon />}>Dashboard</MenuItem>
        <MenuItem icon={<LaptopIcon />}>Productos</MenuItem>
        <MenuItem icon={<PeopleIcon />}>Usuarios</MenuItem>
        <MenuItem icon={<CategoryIcon />}>Categorias</MenuItem>
      </Menu>
    </ProSidebar>
  )
}

export default ResponsiveAppBar;

