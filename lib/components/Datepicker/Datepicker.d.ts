/// <reference types="react" />
declare type Props = {
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
};
/**
 * Primary UI component for user interaction
 */
export declare const Datepicker: ({ size, backgroundColor, label, ...props }: Props) => JSX.Element;
export {};
