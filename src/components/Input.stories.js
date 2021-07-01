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
        return  <Input  onSendClick={action('Send URL Clicked')} 
                        onMenuClick={action('Menu Button clicked')} 
                        onInputClick={action('Input Field Clicked')} 
                        onMenuMouseOver={action('Menu hovered')} 
                        onMenuMouseLeave={action('Menu hovered')} 
                        onSendMouseOver={action('Send hovered')} 
                        onSendMouseLeave={action('Send hovered')} />
    },
});

export const InputFrame = Input_Template.bind({});
InputFrame.args = {

};