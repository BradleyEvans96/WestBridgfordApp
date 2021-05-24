import React from 'react';
import Svg, { Rect } from 'react-native-svg';

export type Props = {
    width: number;
    numberOfStripes: number;
    stripeColour: string;
    backgroundColour: string;
};

type StipeDrawInstructions = {
    stripeWidth: number;
    startPositions: number[];
};

function getStripeDrawInstructions(
    containerWidth: number,
    numberOfStripes: number
): StipeDrawInstructions {
    const totalStripes = numberOfStripes * 2 + 1;
    const stripeWidth = containerWidth / totalStripes;

    const startPositions = [];
    for (let i = 0; i < numberOfStripes; i++) {
        startPositions.push(stripeWidth + i * 2 * stripeWidth);
    }

    return { stripeWidth, startPositions };
}

const Stripes: React.FC<Props> = ({
    width,
    numberOfStripes,
    stripeColour,
    backgroundColour
}) => {
    const { stripeWidth, startPositions } = getStripeDrawInstructions(
        width,
        numberOfStripes
    );

    return (
        <Svg height="100%" width={width}>
            <Rect
                width="100%"
                height="100%"
                fill={backgroundColour}
                opacity="1"
            />
            {startPositions.map((startPos, index) => (
                <Rect
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    width={stripeWidth}
                    height="100%"
                    fill={stripeColour}
                    opacity="1"
                    x={startPos}
                />
            ))}
        </Svg>
    );
};

export default Stripes;
