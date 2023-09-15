import React from 'react';
import Svg, { SvgProps } from './Svg';

const ArrowRight: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" width='20' {...props}>
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M10.2672 0.319553C10.643 -0.0851575 11.2757 -0.108592 11.6805 0.267211L19.4696 7.5L11.6805 14.7328C11.2757 15.1086 10.643 15.0852 10.2672 14.6805C9.8914 14.2757 9.91484 13.643 10.3195 13.2672L15.4535 8.5L1 8.50001C0.447715 8.50001 5.96047e-08 8.05229 0 7.50001C-1.19209e-07 6.94772 0.447715 6.50001 1 6.50001L15.4535 6.50001L10.3195 1.7328C9.91484 1.35699 9.8914 0.724264 10.2672 0.319553Z"
    />
  </Svg>
);

export default ArrowRight;
