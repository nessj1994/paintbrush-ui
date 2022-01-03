/// <reference types="react" />
import './button.css';
export declare enum Variants {
    Primary = "primary",
    Secondary = "secondary"
}
declare type Props = {
    variant?: Variants | undefined;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
};
export declare type Variant = Variants | undefined;
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ variant, size, backgroundColor, label, ...props }: Props) => JSX.Element;
export {};
