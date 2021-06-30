import Input from "./Input.vue";

export default {
    title: 'Input Storybook',
    argTypes: {

    },
}

const Input_Template = (args) => ({
    components: {},
    setup() {
        return {
            args
        };
    },
    render() {
        return {

        }
    },
});

export const InputFrame = Input_Template.bind({});
InputFrame.args = {

};