import { Outlet } from 'react-router';
import AllCategories from '../../components/all-categories/all-categories.component';

const Home = () => {

  return (
    <>
      <Outlet />
      <AllCategories />
    </>
  )


}

export default Home