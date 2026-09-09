import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    BSRealtyCourseCard2,
    type BSRealtyCourseCard2Props,
} from "./BSRealtyCourseCard2";

const meta: Meta<typeof BSRealtyCourseCard2> = {
    title: "Components/CourseCard2",
    component: BSRealtyCourseCard2,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        imgSrc: {
            control: "text",
            description: "Course cover image URL",
        },

        title: {
            control: "text",
            description: "Course title",
        },
        price: {
            control: "text",
            description: "Course price",
        },
        creditHrs: {
            control: "number",
            description: "Course Credit hrs",
        },
        variant: {
            control: "select",
            options: ['default', 'withLearners'],
            description: "Number of enrolled learners",
        },
        learners: {
            control: "number",
            description: "Number of enrolled learners",
        },


    },
};

export default meta;

type Story = StoryObj<BSRealtyCourseCard2Props>;

const courseImage = "/images/course-card-2.png";

export const Default: Story = {
    args: {
        imgSrc: courseImage,
        title: "Georgia Real State Salesperson Pre-License",
        price: "$249",
        creditHrs: 75,
        variant: 'Default'
    },
};

export const WithLearners: Story = {
    args: {
        imgSrc: courseImage,
        title: "Georgia Real State Salesperson Pre-License",
        price: "$249",
        learners: 4209,
        variant: 'withLearners'
    },
};