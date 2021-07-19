import styled, { StyledComponent } from 'styled-components';
import { Box } from 'rebass/styled-components';

const BORDER_SPACING = '20px';
const BORDER_RADIUS = '8px';

const BORDER_PATH_MAP = {
  'top-left': `polygon(0 0%, 100% 0%, calc(100% - ${BORDER_SPACING}) 100%, 0% 100%);`,
  'top-right': `polygon(0 0%, 100% 0%, 100% 100%, ${BORDER_SPACING} 100%);`,
  'bottom-right': `polygon(${BORDER_SPACING} 0%, 100% 0%, 100% 100%, 0% 100%);`,
  'bottom-left': `polygon(0 0%, calc(100% - ${BORDER_SPACING}) 0%, 100% 100%, 0% 100%);`,
};

const BORDER_RADIUS_MAP = {
  'top-left': `${BORDER_RADIUS} 0 0 0`,
  'top-right': `0 ${BORDER_RADIUS} 0 0`,
  'bottom-right': `0 0 ${BORDER_RADIUS} 0`,
  'bottom-left': `0 0 0 ${BORDER_RADIUS}`,
};

const ImageSubtitle: StyledComponent<any, any, any> = styled(Box)`
  position: absolute;
  display: inline;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  ${(props: any) => props.x}: 0;
  ${(props: any) => props.y}: 0;

  ${(props: any) =>
    props.x === 'left'
      ? `padding-right: ${BORDER_SPACING};`
      : `padding-left: ${BORDER_SPACING};`}
  clip-path: ${(props: any) => BORDER_PATH_MAP[`${props.y}-${props.x}`]};

  ${(props: any) =>
    props.round &&
    `border-radius: ${BORDER_RADIUS_MAP[`${props.y}-${props.x}`]};`}
`;

export default ImageSubtitle;
