import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';
import {
  FilterContainer,
  Filterlabel,
  FilterInput,
} from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <FilterContainer>
      <Filterlabel>Find contacts by name</Filterlabel>
      <FilterInput type="text" onChange={handleSearch} />
    </FilterContainer>
  );
};
