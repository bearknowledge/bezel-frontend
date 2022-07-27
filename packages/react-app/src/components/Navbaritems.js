import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';
import PieChartIcon from '@mui/icons-material/PieChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';


export const mainNavbarItems = [
  {
      id: 0,
      icon: <CandlestickChartIcon />,
      label: 'Markets',
      route: 'authentication',
  },
  {
      id: 1,
      icon: <PieChartIcon />,
      label: 'Portfolio',
      route: 'database',
  },
  {
      id: 2,
      icon: <NewspaperIcon/>,
      label: 'News',
      route: 'storage',
  },
  {
      id: 3,
      icon: <InfoIcon />,
      label: 'About',
      route: 'hosting',
  },
]