import type {Meta,StoryObj} from '@storybook/react-vite'

import { BSRealtySocialIcon } from './BSRealtySocialIcon'
// Imported so Vite bundles them — works in the built Storybook, not just the dev server
import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import twitterIcon from '../../assets/twitter.svg'

const meta={
    title:'Components/SocialIcon',
    component:BSRealtySocialIcon,
    parameters:{layout:'centered'},
    tags:['autodocs'],
    argTypes:{
        href:{control:'text', description:'URL of social icon'},
        imgSrc:{control:'text',description:'Image URL of the social icon'},
        label:{control:'text',description:'Network name read by screen readers'},
    }
} satisfies Meta<typeof BSRealtySocialIcon>;

export default meta;

type Story=StoryObj<typeof meta>;

export const Facebook:Story={
    args:
    {
        href:'https://www.facebook.com/',
        imgSrc:facebookIcon,
        label:'Facebook'
    }
}
export const Instagram:Story={
    args:
    {
        href:'https://www.instagram.com/',
        imgSrc:instagramIcon,
        label:'Instagram'
    }
}
export const Linkedin:Story={
    args:
    {
        href:'https://www.linkedin.com/',
        imgSrc:linkedinIcon,
        label:'LinkedIn'
    }
}
export const Twitter:Story={
    args:
    {
        href:'https://twitter.com/',
        imgSrc:twitterIcon,
        label:'Twitter'
    }
}