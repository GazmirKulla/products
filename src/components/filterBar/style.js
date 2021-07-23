import styled from 'styled-components';
import { Filter } from '@styled-icons/icomoon/Filter';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  background: #60A5EA;
`;

const FilterInput = styled.input`
  width: calc(100vw - 50px);
  height: 32px;
  background: #FFFFFF;
  border-radius: 4px;
  margin: 5px;
  border: 0;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0em;
  padding-left: 37px;
  outline: none;

  ::placeholder {
    color: #AAAAAA;
  }
`;

const IconFilter = styled(Filter)`
  position: absolute;
  color: #AEAEAE;
  left: 16px;
  top: 15px;
`;


export { Wrapper, FilterInput, IconFilter };
