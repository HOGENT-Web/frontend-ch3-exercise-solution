import { useContext } from 'react';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';
import BreedsList from './components/breeds/BreedsList';
import { themes, ThemeContext } from './contexts/Theme.context';

function App() {
  const { theme, oppositeTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`container text-bg-${oppositeTheme}`}>
      <button type="button" className="btn btn-secondary" onClick={toggleTheme}>
        {theme === themes.dark ? <IoMoonSharp /> : <IoSunny />}
      </button>

      <BreedsList />
    </div>
  );
}

export default App;
