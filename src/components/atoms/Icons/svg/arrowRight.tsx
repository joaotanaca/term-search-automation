import React from "react";
import { IconSvgProps } from "..";

const ArrowRight: React.FC<IconSvgProps> = ({
    color,
    size = 24,
    arialLabel,
}) => {
    return (
        <svg
            width={size * 0.636}
            height={size}
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label={arialLabel}
        >
            <path
                d="M6.33319 5.63599C6.33319 5.43091 6.25702 5.25513 6.09296 5.10278L1.53436 0.63794C1.40546 0.509034 1.24139 0.438721 1.04803 0.438721C0.661315 0.438721 0.350768 0.743409 0.350768 1.13599C0.350768 1.32935 0.432799 1.49927 0.561706 1.63403L4.66913 5.63599L0.561706 9.63794C0.4328 9.77271 0.350769 9.94849 0.350769 10.136C0.350769 10.5286 0.661316 10.8333 1.04803 10.8333C1.24139 10.8333 1.40546 10.7629 1.53436 10.634L6.09296 6.17505C6.25702 6.01685 6.33319 5.84106 6.33319 5.63599Z"
                fill={color}
            />
        </svg>
    );
};

export default ArrowRight;
