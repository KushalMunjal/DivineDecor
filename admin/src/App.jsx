import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Products from './pages/Catalog/Products';
import Categories from './pages/Catalog/Categories';
import AddProducts from './pages/Catalog/AddProducts';
import AddCategory from './pages/Catalog/AddCategory';
import User from './pages/User Management/User';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Sign In" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/ecommerce"
          element={
            <>
              <PageTitle title="DivineDecor Dashboard" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/catalog/products"
          element={
            <>
              <PageTitle title="Catalog" />
              <Products />
            </>
          }
        />
        <Route
          path="/usermanagement/users"
          element={
            <>
              <PageTitle title="User Management" />
              <User />
            </>
          }
        />
        <Route
          path="/catalog/categories"
          element={
            <>
              <PageTitle title="Catalog" />
              <Categories />
            </>
          }
        />
        <Route
          path="/catalog/add-product"
          element={
            <>
              <PageTitle title="Catalog" />
              <AddProducts />
            </>
          }
        />
        <Route
          path="/catalog/add-category"
          element={
            <>
              <PageTitle title="Catalog" />
              <AddCategory />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements " />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout " />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables " />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings " />
              <Settings />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts " />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons " />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin " />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup " />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
