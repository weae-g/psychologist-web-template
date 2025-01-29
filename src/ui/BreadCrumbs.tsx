import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  link?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

const BreadcrumbsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const CrumbLink = styled(Link)`
  text-decoration: none;
  color: #4ba8ff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  color: #999;
`;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <BreadcrumbsContainer>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {crumb.link ? (
            <CrumbLink to={crumb.link}>{crumb.label}</CrumbLink>
          ) : (
            <span>{crumb.label}</span>
          )}
          {index !== crumbs.length - 1 && <Separator>/</Separator>}
        </React.Fragment>
      ))}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
