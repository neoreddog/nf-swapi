import styled from 'styled-components';
import { typography, color, space, layout } from 'styled-system';

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

export default Box;

Box.defaultProps = {
    p: 4,
    bg: 'background',
    color: 'text',
    fontFamily: 'monospace'
};
