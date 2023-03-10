import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  /*브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Responsive = ({ children, ...rest }) => {
  //style, className, onClick, onMouseMove등 props사용이 가능하도록
  //...rest를 사용하여 ResponsiveBlock에 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};
export default Responsive;
