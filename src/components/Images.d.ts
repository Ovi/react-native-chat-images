import * as React from 'react';
interface ArrayOfImagesObject {
    caption?: string;
    captionStyle?: object;
    overlay?: () => React.ReactElement<any>;
    thumbnail?: string;
    url: string;
}
export interface Props {
    backgroundColor?: string;
    extra?: string | undefined;
    images: ArrayOfImagesObject[] | String[];
    saveOnLongPress?: boolean;
    style?: object;
    title?: string | undefined;
    width?: string | number;
}
declare class State {
    modalVisible: boolean;
    activeImageIndex: number;
}
export default class Images extends React.Component<Props, State> {
    static defaultProps: {
        backgroundColor: string;
        extra: undefined;
        saveOnLongPress: boolean;
        style: {};
        title: undefined;
        width: string;
    };
    state: State;
    showImageListModal: (modalVisible: boolean, activeImageIndex: number) => void;
    lessThanFourImages: () => JSX.Element;
    fourImages: () => JSX.Element;
    moreThanFourImages: () => JSX.Element;
    render(): JSX.Element;
}
export {};
