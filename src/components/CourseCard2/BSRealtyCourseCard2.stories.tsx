import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    BSRealtyCourseCard2,
    CheckCircleIcon,
    ClockIcon,
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
            options: ['Default', 'withLearners'],
            description: "Card variant",
        },
        learners: {
            control: "number",
            description: "Number of enrolled learners",
        },
        featuresTitle: {
            control: "text",
            description: "Heading above the feature list",
        },
        features: {
            control: false,
            description: "What the course includes ({ icon, label }[]). Defaults to the standard pre-license list.",
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
        creditHrs: 75,
        learners: 4209,
        variant: 'withLearners'
    },
};

export const CustomFeatures: Story = {
    args: {
        imgSrc: courseImage,
        title: "Georgia Real Estate Continuing Education",
        price: "$99",
        featuresTitle: "What You Get",
        features: [
            { icon: <ClockIcon size={22} />, label: "36 Credit Hours" },
            { icon: <CheckCircleIcon size={22} />, label: "Self-paced, online" },
        ],
    },
};