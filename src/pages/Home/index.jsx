import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state);

  return (
    <>
      { !user.isLogged &&
        <p>Salut c Jean-Pierre</p>
      }
      { user.isLogged &&
        <p>Et non enfaite ct Michou</p>
      }
    </>
  )
}
export default Home