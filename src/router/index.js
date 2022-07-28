import { useRoutes } from 'react-router-dom';
import configRouter from './router';


export default () => {
  return useRoutes(configRouter)
}