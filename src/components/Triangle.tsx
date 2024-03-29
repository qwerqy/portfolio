import styled, { StyledComponent } from 'styled-components';

const Triangle: StyledComponent<any, any, any> = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -2;

  ${(props: any) => {
    const color = props.theme.colors[props.color] || props.color;
    const border = `${props.height[0]} solid ${color};`;
    return props.invertY
      ? `border-bottom: ${border}; bottom: 0;`
      : `border-top: ${border};`;
  }}
  /* prettier stop */
  ${(props: any) => {
    const border = `${props.width[0]} solid transparent;`;
    return props.invertX
      ? `border-left: ${border}; right: 0;`
      : `border-right: ${border};`;
  }}


  @media only screen and (min-width: 768px) {
    ${(props: any) => {
      const height = props.height[1];
      return props.invertY
        ? `border-bottom-width: ${height};`
        : `border-top-width: ${height};`;
    }}
    /* prettier stop */
    ${(props: any) => {
      const width = props.width[1];
      return props.invertX
        ? `border-left-width: ${width};`
        : `border-right-width: ${width};`;
    }};
  }
`;

export default Triangle;
