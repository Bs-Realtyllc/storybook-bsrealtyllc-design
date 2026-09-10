import type {Meta, StoryObj} from '@storybook/react';
import { BSRealtyGooglePlayButton } from './BSRealtyGooglePlayButton';

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

} ;
export default meta;
type Story = StoryObj<typeof BSRealtyGooglePlayButton>;

/** Default state */
export const Default: Story = {
    args:{
        href:"https://play.google.com/store",
        imageSrc:"/google-play-button.png",
    }
}