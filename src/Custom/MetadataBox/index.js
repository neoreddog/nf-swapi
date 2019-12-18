import styled from 'styled-components';
import { typography, color, space, layout } from 'styled-system';

const MetadataBox = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

export default MetadataBox

MetadataBox.defaultProps = {
    p: 2,
    fontSize: 4,
    textAlign: 'left',
    bg: 'contentAreaBackground',
    color: 'text',
    fontFamily: 'monospace',
};
