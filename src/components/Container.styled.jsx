import styled from 'styled-components';

const Container = styled.div`
    width: 100%;

    padding-left: 1rem;
    padding-right: 1rem;
    
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    
   

    @media (min-width: 640px) {
      max-width: 640px;
    }

    @media (min-width: 768) {
      max-width: 768px;
    }

    @media (min-width: 1024px) {
      max-width: 1024px;
    }

    @media (min-width: 1280) {
      max-width: 1280;
    }

    @media (min-width: 1536) {
      max-width: 1536;
    }
    
`;

 
  

export default Container;