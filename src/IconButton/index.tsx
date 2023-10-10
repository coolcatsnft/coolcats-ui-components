import Styled from "../Styled";

const IconButton = Styled.button<{ active?: boolean }>`
  font-family: var(--cc-default-font);
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--cc-color-white);
  text-align: center;
  display: grid;
  justify-items: center;
  cursor: pointer;

  > * {
    display: flex;
    height: 31px;
    width: 31px;
    align-content: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ active }) => active ? `var(--cc-color-yellow)` : 'var(--cc-color-bluecat)'};
    margin-bottom: 6px;

    div,
    svg {
      height: 60%;
      width: 60%;
    }
  }

  &[title="Close Menu"],
  &[title="Open Menu"] {
    width: 37px;

    i {
      background-color: var(--cc-color-white);
    }
  }
`;

export default IconButton;