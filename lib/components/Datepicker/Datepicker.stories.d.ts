/// <reference types="react" />
import { ComponentStory, ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<({ size, backgroundColor, label, ...props }: {
    backgroundColor?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    label: string;
    onClick?: (() => void) | undefined;
}) => JSX.Element>;
export default _default;
export declare const Primary: ComponentStory<({ size, backgroundColor, label, ...props }: {
    backgroundColor?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    label: string;
    onClick?: (() => void) | undefined;
}) => JSX.Element>;
