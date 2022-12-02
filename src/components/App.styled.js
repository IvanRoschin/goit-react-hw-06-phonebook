import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  margin: ${p => p.theme.space[5]}px;
  margin-top: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: ${p => p.theme.space[5]}px;
`;

export const TagLineBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: ${p => p.theme.space[8]}px;
`;

export const ContactFormBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const ContactsTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-left: auto;
  margin-right: auto;
`;
