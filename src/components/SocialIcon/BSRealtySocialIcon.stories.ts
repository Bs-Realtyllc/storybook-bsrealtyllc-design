import type {Meta,StoryObj} from '@storybook/react-vite'

import { BSRealtySocialIcon } from './BSRealtySocialIcon'

const meta={
    title:'Components/SocialIcon',
    component:BSRealtySocialIcon,
    parameters:{layout:'centered'},
    tags:['autodocs'],
    argTypes:{
        href:{control:'text', description:'URL of social icon'},
        imgSrc:{control:'text',description:'Image URL of the social icon'},
    }
} satisfies Meta<typeof BSRealtySocialIcon>;

export default meta;

type Story=StoryObj<typeof meta>;

export const Facebook:Story={
    args:
    {
        href:'https://www.facebook.com/',
        imgSrc:'/src/assets/facebook.svg'
    }
}
export const Instagram:Story={
    args:
    {
        href:'https://www.instagram.com/',
        imgSrc:'/src/assets/instagram.svg'
    }
}
export const Linkedin:Story={
    args:
    {
        href:'https://www.linkedin.com/',
        imgSrc:'/src/assets/linkedin.svg'
    }
}
export const Twitter:Story={
    args:
    {
        href:'https://twitter.com/',
        imgSrc:'/src/assets/twitter.svg'
    }
}