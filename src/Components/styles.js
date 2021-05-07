import styled from 'styled-components';

export const LoginPanel = styled.div`
  background: aliceblue;
  padding: 40px;
  margin: 100px auto;
  border-radius: 30px;
  width: 700px;
  height: 100%;
`;

export const DbsLogo = styled.img`
  display: block;
  max-height: 200px;
  margin: 50px;
  padding-top: 100px;
  width:300px;
`;
export const LoginWrapper = styled.div`
  display:flex;
`;

export const NavBarWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

export const Link = styled.div`
  color: ${(props)=>props.navId == props.menu?'black':'blue'};
  background: ${(props)=>props.navId == props.menu?'green':'none'};
  padding: 10px;
`;
export const UserInfoWrapper = styled.div`
  margin: 300px;
  border: 1px solid;
  box-shadow: 5px 10px;
  border-radius: 10px;
`;

