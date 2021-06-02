import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

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
    ImageFactory(require('./DefaultProfilePicture.png'), props);

export const DefaultClubLogo: FactoryConsumer = (props: IImageProps) =>
    ImageFactory(require('./defaultclublogo.png'), props);

export const BlueClubLogo: FactoryConsumer = (props: IImageProps) =>
    ImageFactory(require('./WBCFCLogo.png'), {
        ...props,
        shape: IconShape.CIRCLE
    });

export const RedClubLogo: FactoryConsumer = (props: IImageProps) =>
    ImageFactory(require('./WBCFClogoRed.png'), {
        ...props,
        shape: IconShape.CIRCLE
    });

// This function will create the images for you
function ImageFactory(
    image: ImageSourcePropType,
    { size, shape = IconShape.SQUARE }: IImageProps
): JSX.Element {
    return (
        <Image
            source={image}
            style={{
                width: size,
                height: size,
                borderRadius: borderRadiusMapping[shape](size)
            }}
        />
    );
}
