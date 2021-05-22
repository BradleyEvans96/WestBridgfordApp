import React from 'react';
import { Image } from 'react-native';

export enum IconShape {
    CIRCLE,
    SQUARE
}

const borderRadiusMapping = {
    [IconShape.CIRCLE]: (size: number) => size / 2,
    [IconShape.SQUARE]: (size: number) => size
};

interface IImageProps {
    size: number;
    shape?: IconShape;
}

type FactoryConsumer = (props: IImageProps) => JSX.Element;

// Define all our images here as React functions so that we don't need to always reference the path
export const DefaultProfilePicture: FactoryConsumer = (props: IImageProps) =>
    ImageFactory('DefaultProfilePicture.png', props);

export const ClubLogo: FactoryConsumer = (props: IImageProps) =>
    ImageFactory('WBCFCLogo.png', { ...props, shape: IconShape.CIRCLE });

// This function will create the images for you
function ImageFactory(
    imageName: string,
    { size, shape = IconShape.SQUARE }: IImageProps
): JSX.Element {
    return (
        <Image
            source={require(`./${imageName}`)}
            style={{
                width: size,
                height: size,
                borderRadius: borderRadiusMapping[shape](size)
            }}
        />
    );
}
