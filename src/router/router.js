import { lazy, Suspense } from 'react';
import Layout from '@/layout';

const Home = lazy(() => import('pages/home'));
const Test = lazy(() => import('pages/test'));
const NotFound = lazy(() => import('pages/404'));
const NotAuthorized = lazy(() => import('pages/403'));


const loadLazy = element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {element}
    </Suspense>
  )
}

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: loadLazy(<Home />)
      },
      {
        path: 'test',
        element: loadLazy(<Test />)
      },
      {
        path: '403',
        element: loadLazy(<NotAuthorized />)
      },
      {
        path: '*',
        element: loadLazy(<NotFound />)
      }
    ]
  }
]