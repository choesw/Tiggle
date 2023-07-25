import styled from "styled-components";
import { Footer } from "antd/es/layout/layout";
import { Award, Home, PieChart } from "react-feather";
import FooterIcon from "../atoms/FooterIcon";

const StyledFooter = styled(Footer)`
  position: sticky;
  bottom: 0;
  z-index: 1;
  text-align: center;

  //tab 역할 시킬 예정
  @media (min-width: 768px) {
    display : none;
  }

  @media (max-width: 768px) {
    display : grid;
    grid-auto-flow: column;
    background: #fff;
    border-top: 1px solid #dfe4ec;
    padding: 1rem 0.25rem 1rem 0.25rem;
    color: #AFBBCF;

    > div {
      display: grid;
      grid-gap: 0.5rem;
      justify-content: center;
    }

    .focus {
      color: #000;
    }
  }
`;

export const FooterOrganism = () => {
  return (
    <StyledFooter>
      <FooterIcon icon={<Home />} iconName="홈" iconClass="focus" />
      <FooterIcon icon={<PieChart />} iconName="통계" />
      <FooterIcon icon={<Award />} iconName="랭킹" />
    </StyledFooter>
  );
};
