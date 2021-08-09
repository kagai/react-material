import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const menuItems = [
    {
      title: "messages.drawer_home",
      url: "/admin/",
      icon:<InboxIcon/>,
    },
    {
      title: "messages.drawer_products",
      url: "/admin/products",
      icon: <AppsOutlinedIcon/>,
    },
    {
      title: "messages.drawer_orders",
      url: "/admin/orders",
      icon:<ShoppingCartOutlinedIcon/>,
    },
    {
      title: "messages.drawer_customers",
      url: "/admin/customers",
      icon: <PersonOutlineOutlinedIcon/>,
    },
    {
      title: "messages.settings_pages",
      url: "/admin/pages",
      icon: <DescriptionOutlinedIcon/>,
    },
    {
      title: "messages.files",
      url: "/admin/files",
      icon: <FolderOutlinedIcon/>,
    },
    {
      title: "settings",
      url: "settings",
      icon:<SettingsOutlinedIcon/>
    },
    {
      title: "Admin settings",
      url: "/admin/settings",
      icon: <SettingsOutlinedIcon/>,
    },
    {
      title: "messages.apps",
      url: "/admin/apps",
      icon: <AppsOutlinedIcon/>,
    },
    {
      title: "messages.drawer_logout",
      url: "/admin/logout",
      icon: <ExitToAppOutlinedIcon/>,
    },
  ];


  export default menuItems;