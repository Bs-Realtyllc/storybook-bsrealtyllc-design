import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyFileUpload } from './BSRealtyFileUpload';

const meta = {
    title: 'Components/FileUpload',
    component: BSRealtyFileUpload,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {
        label: {
            control: 'text',
            description: 'Label for the file upload button',
        },

        emptyMessage: {
            control: 'text',
            description: 'Message shown when no file is selected',
        },

        accept: {
            control: 'text',
            description: 'Accepted file types',
        },

        disabled: {
            control: 'boolean',
            description: 'Disable file upload',
        },

        leftIcon: {
            control: false,
            description: 'Icon displayed before the upload label',
        },

        className: {
            control: 'text',
            description: 'Custom CSS class',
        },

        onFileSelect: {
            action: 'file selected',
            description: 'Callback triggered when a file is selected',
        },
    },
} satisfies Meta<typeof BSRealtyFileUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Upload File',
        emptyMessage: 'No file selected',
        leftIcon: (
            <img
                src="/src/assets/icons/upload.svg"
                alt="Upload"
                width={15}
                height={15}
            />
        ),
    },
};

export const ImageOnly: Story = {
    args: {
        label: 'Upload Image',
        emptyMessage: 'No image selected',
        accept: 'image/*',
        leftIcon: (
            <img
                src="/src/assets/icons/upload.svg"
                alt="Upload"
                width={15}
                height={15}
            />
        ),
    },
};

export const PDFOnly: Story = {
    args: {
        label: 'Upload PDF',
        emptyMessage: 'No PDF selected',
        accept: '.pdf',
        leftIcon: (
            <img
                src="/src/assets/icons/upload.svg"
                alt="Upload"
                width={15}
                height={15}
            />
        ),
    },
};

export const Disabled: Story = {
    args: {
        label: 'Upload File',
        disabled: true,
        leftIcon: (
            <img
                src="/src/assets/icons/upload.svg"
                alt="Upload"
                width={15}
                height={15}
            />
        ),
    },
};

