import { useSelector } from 'react-redux';
import persistedReducer from '../store/persist';

const AboutPage = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <h1>About Page</h1>
      <p>Data from Redux Store: {data}</p>
      <p>About us</p>
    </div>
  );
};

export default AboutPage;