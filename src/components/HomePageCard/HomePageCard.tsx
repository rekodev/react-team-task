import { Link } from 'react-router-dom';
import { PAGES } from '../../types/pages';
import { StyledHomePageCard } from './style';

interface IHomePageCardProps {
  text: string;
  path: PAGES;
}

const HomePageCard = ({ text, path }: IHomePageCardProps) => {
  return (
    <StyledHomePageCard className='card'>
      <div className='card-content'>
        <Link to={'/' + path}>{text}</Link>
      </div>
    </StyledHomePageCard>
  );
};

export default HomePageCard;
