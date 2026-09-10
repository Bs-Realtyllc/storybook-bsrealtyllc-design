import type {Meta, StoryObj} from '@storybook/react';
import { BSRealtyGooglePlayButton } from './BSRealtyGooglePlayButton';
import { fn } from 'storybook/test';

const meta = {
title: 'Components/GooglePlayButton',
component: BSRealtyGooglePlayButton,
parameters: { layout: 'centered' },
tags: ['autodocs'],
argTypes: {
href:{control:'text'},
imageSrc:{control:'text'},
onClick:{action:'clicked'},
},
args: { onClick: fn() },
} satisfies Meta<typeof BSRealtyGooglePlayButton>;

export default meta;
type Story = StoryObj<typeof BSRealtyGooglePlayButton>;

/** Default state */
export const Default: Story = {
    args:{
        href:"https://play.google.com/store",
        imageSrc:"/images/google-play-button.png",
    }
}