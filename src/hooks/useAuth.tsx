import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useAuth = () => {
  const { email, token, id } = useSelector((state: RootState) => state.userReducer);
  return {
    isAuth: !!email,
    email,
    token,
    id
  };
};

export default useAuth;
