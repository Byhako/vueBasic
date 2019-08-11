import styled from 'vue-styled-components';

export const Row = styled.div`
  display: flex;
  width: 50%;
  margin: 10px 0;
`;

export const Li = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: center;
  p {
    display: inline-flex;
    font-size: 22px;
    color: black;
    margin-left: 5px;
  };
  span {
    font-size: 18px;
    color: gray;
  }

`;

export const Button = styled.button`
  margin: 0 5px;
`;