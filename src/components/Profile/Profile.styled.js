import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgb(46 47 66 / 8%), 0 1px 1px rgb(46 47 66 / 16%),
    0 2px 1px rgb(46 47 66 / 8%);
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  height: 200px;
  border-radius: 150px;
  background-color: #dfe3ee;
  margin-top: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  margin-top: 10px;
  color: #3b5998;
`;

export const Tag = styled.p`
  margin-top: 10px;
  color: #3b5998;
`;

export const Local = styled.p`
  margin-top: 10px;
  color: #3b5998;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #3b5998;
  color: #f7f7f7;
  border-radius: 0 0 10px 10px;
  margin-top: 10px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    gap: 5px;
  }

  li:not(:last-child) {
    border-right: 1px solid #8b9dc3;
  }
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Quantity = styled.span`
  text-align: center;
  display: block;
  width: 100%;
  font-weight: bold;
`;
