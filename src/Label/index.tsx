import Styled from "../Styled";

export const LabelPartial = `
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  text-align: center;
  font-family: var(--cc-default-font);
`;

export const Label = Styled.label<{ $align?: 'left' | 'center' | 'right'}>`
  margin-bottom: 1vh;
  ${LabelPartial}
  text-align: ${({ $align }) => $align || 'center'};
`;

export default Label;
