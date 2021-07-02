import Input from "./Input.vue";
import { action } from '@storybook/addon-actions'
import { color } from '@storybook/theming';

export default {
    title: 'Input Storybook',
    argTypes: {
        url_icon: {options: ['U','R','L'],
                    control: {type: 'radio'}},
        phone_icon: {options: ['P','H','N'],
                    control: {type: 'select'}},
        email_icon: {options: ['E','M','I'],
                    control: {type: 'radio'}},
        menu_email_text: {control: {type: 'text'}},
        menu_url_text: {control: {type: 'text'}},
        menu_phone_text: {control: {type: 'text', max:15}},
        phone_number_size: {control: {type: 'range', min: 5, max: 15, step:1}},
        yes_button_skin: {control: {type: 'color'}},
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
    url_icon: 'U',
    phone_icon: 'P',
    email_icon: 'E',
    menu_email_text: 'Link to Email',
    menu_url_text: 'Link to URL',
    menu_phone_text: 'Link to Phone',
    phone_number_size: 10,
    yes_button_skin: '#E74F30',
};