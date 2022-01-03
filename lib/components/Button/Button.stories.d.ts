/// <reference types="react" />
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Variants } from './Button';
declare const _default: ComponentMeta<({ variant, size, backgroundColor, label, ...props }: {
    variant?: Variants | undefined;
    backgroundColor?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    label: string;
    onClick?: (() => void) | undefined;
}) => JSX.Element>;
export default _default;
export declare const Primary: ComponentStory<({ variant, size, backgroundColor, label, ...props }: {
    variant?: Variants | undefined;
    backgroundColor?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    label: string;
    onClick?: (() => void) | undefined;
}) => JSX.Element>;
export declare const Secondary: ComponentStory<({ variant, size, backgroundColor, label, ...props }: {
    variant?: Variants | undefined;
    backgroundColor?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    label: string;
    onClick?: (() => void) | undefined;
}) => JSX.Element>;
export declare const Large: ComponentStory<({ variant, size, backgroundColor, label, ...props }: {
    variant?: Variants | undefined;
    backgroundColor?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    label: string;
    onClick?: (() => void) | undefined;
}) => JSX.Element>;
export declare const Small: ComponentStory<({ variant, size, backgroundColor, label, ...props }: {
    variant?: Variants | undefined;
    backgroundColor?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    label: string;
    onClick?: (() => void) | undefined;
}) => JSX.Element>;
