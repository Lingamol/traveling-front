// import { NavLink } from "react-router-dom";
import { useAuth } from 'hooks';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectTheme } from 'redux/themes/selectors';
import { setTheme } from 'redux/themes/themesSlice';

import { LinkNav, Nav } from './Navigation.styled';
import { useDispatch } from 'react-redux';

const Navigation = ({ onClick }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const isLightTheme = useSelector(selectTheme);
  // console.log(theme1.toString() === 'lightTheme ');
  const toggleTheme = () => {
    dispatch(setTheme(!isLightTheme));
    console.log('toggle', isLightTheme);
  };

  return (
    <>
      <Nav>
        <LinkNav to="/" onClick={onClick}>
          Home
        </LinkNav>
        {/* <NavLink className={css.link} to="/weather">
        Weather
      </NavLink>
      <NavLink className={css.link} to="/movies">
        Movies
      </NavLink> */}
        {isLoggedIn && (
          <>
            <LinkNav to="/contacts" onClick={onClick}>
              Contacts
            </LinkNav>
            <LinkNav to="/tasks" onClick={onClick}>
              Tasks
            </LinkNav>
            {/* <NavLink className={css.link} to="/weather">
            Weather
          </NavLink>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink> */}
          </>
        )}
      </Nav>
      <button type="button" onClick={() => toggleTheme()}>
        Theme
      </button>
    </>
  );
};

export default Navigation;
