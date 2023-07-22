import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Person4Icon from '@mui/icons-material/Person4';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import TemporaryDrawer from './Drawer';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navLinkStyles = {
    width:'40px',
    height:'40px',
    color:'white',
    // paddingLeft:'40px'
    // backgroundColor:'red'
  }

  const labelStyles = {
    color:'white',
    marginLeft:'-10px'
  }

  return (
    <BottomNavigation style={{position:'sticky', bottom:'0px', height:'70px', backgroundColor:'#401280', gap:'2%'}} value={value} onChange={handleChange}>
      <BottomNavigationAction
     style={labelStyles}
        label="Contact"
        value="Contact"
        icon={<AddIcCallIcon  style={navLinkStyles} />}
      />
      <BottomNavigationAction 
      style={labelStyles}
        label="Personalize Profile"
        value="Personalize Profile"
        icon={<Person4Icon   style={navLinkStyles}  />}
      />
      <BottomNavigationAction 
      style={labelStyles}
        label="Login Flow"
        value="Login Flow"
        icon={<PlayCircleIcon  style={navLinkStyles}  />}
      />
      <BottomNavigationAction 
      style={labelStyles}
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon  style={navLinkStyles}  />}
      />
      <BottomNavigationAction 
      style={labelStyles} label="Help" value="Help" icon={<HelpCenterIcon  style={navLinkStyles}  />} />

      <TemporaryDrawer/>
    </BottomNavigation>
  );
}