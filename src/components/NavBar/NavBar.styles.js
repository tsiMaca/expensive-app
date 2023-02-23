import { NavLink as BaseNavLink} from "react-router-dom";
import styled  from "styled-components";


export const NavLink = styled(BaseNavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    font-weight:bold
  }
`;