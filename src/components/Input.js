/* Does not compile v-show and Emotion is throwing $EmotionCache error */
// Created by Vatsal.

import {createApp} from 'vue';
import {  VueEmotion } from '@egoist/vue-emotion';  // styled,
import "./Input1.css";

const test = createApp({});
test.use(VueEmotion);


export default {
  name: 'Input1',
  components: {
  },
  computed: {
  },
  props:{
    url_icon: String,
    phone_icon: String,
    email_icon: String,
    menu_email_text: String,
    menu_url_text: String,
    menu_phone_text: String,
    phone_number_size: Number,
    yes_button_skin: String,
  },
  data() {
    return{ 
        value: "",
        data:this.url_icon,
        inputset: false,
        placeholder_title: "URL",
        left_hovered: false,
        right_hovered: false,
        right_clicked: false,
        left_clicked: false,
        input_selected: false, 
    }
  },
  created () {
  },
  methods: {
    onSendClick: function() {
// Need to use commputed methods.
        if(this.value == ""){
            this.placeholder_title = "Please Enter";
        }else if(this.data == this.url_icon){
          if(!this.validURL()){
                      this.value = "";
                      this.placeholder_title = "Invalid URL";
                  }
        }
        else{
        this.left_clicked = false;
        this.right_clicked = !this.right_clicked;
        this.$emit('SendClick');
        }
    },
    onMenuClick: function() {
        this.left_clicked = !this.left_clicked;
        this.$emit('MenuClick');
    },
    onInputClick: function() {
        this.left_clicked = false;
        this.input_selected = true;
        this.$emit('InputClick');
    },
    onMenuMouseOver: function() {
        this.left_hovered = true;
        this.$emit('MenuHover');
    },
    onMenuMouseLeave: function() {
        this.left_hovered = false;
        this.$emit('MenuHover');
    },
    onSendMouseOver: function() {
        this.right_hovered = true;
        this.$emit('SendHover');
    },
    onSendMouseLeave: function() {
        this.right_hovered = false;
        this.$emit('SendHover');
    },
    onYesClick: function() {
        if(this.value != ""){
          if(this.data == this.email_icon){
              if(!this.validEmailId()){
                      this.value = "";
                      this.inputset=false;
                      this.placeholder_title = "Invalid Email";
                  }
                  else{
                      this.inputset=true;
                  }
          }else if(this.data == this.phone_icon){
              if(!this.validPhoneNumber()){
                      this.value = "";
                      this.inputset=false;
                      this.placeholder_title = "Invalid Phone Number";
                  }
                  else{
                      this.inputset=true;
                  }
          }
      else if(this.data == this.url_icon){
              if(!this.validURL()){
                      this.value = "";
                      this.inputset=false;
                      this.placeholder_title = "Invalid URL";
                  }
                  else{
                      this.inputset=true;
                  }
          }
        }else{
            this.data=this.url_icon;
            this.placeholder_title="URL";
            this.inputset = false;
        }
        this.input_selected = false;
        this.$emit('YesClick');
    },
    onCancelClick: function() {
        this.placeholder_title="URL"
        this.data=this.url_icon
        this.input_selected = false; 
        this.value = '';
        this.inputset=false;
        this.$emit('CancelClick');
    },
    onEmailClick: function() {
        this.placeholder_title="Email"
        this.data = this.email_icon;
        this.left_clicked = false;
        this.input_selected = true;
        
    },
    onURLClick: function() {
        this.placeholder_title="URL"
        this.data = this.url_icon;
        this.left_clicked = false;
        this.input_selected = true;
    },
    onPhoneClick: function() {
        this.placeholder_title="Phone"
        this.data = this.phone_icon;
        this.left_clicked = false;
        this.input_selected = true;
        
    },
    validPhoneNumber: function(){
        var phonenoregex = new RegExp("^[0-9]{"+this.phone_number_size+"}$");
        if(phonenoregex.test(this.value)){
            return true;
        }
        else{
            return false;
        }
    },
        validURL: function() {
          var URLregex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/ ;
        if(URLregex.test(this.value)){
            return true;
        }
        else{
            return false;
        }
    },
    validEmailId: function(){
        var emailregex = /^(([^<>()[\]\\.,;:\son"]+(\.[^<>()[\]\\.,;:\son"]+)*)|(".+"))on((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailregex.test(this.value)){
            return true;
        }
        else{
            return false;
        }
    },
    onDeleteClick: function(){
        this.inputset=false;
        this.value="";
        this.data=this.url_icon;
        this.placeholder_title="URL";
    },
    v_model_change: function(event){
        this.value = event.target.value
    },
},
  render: function () {

    // const Divlft = styled('div')`
    //                 background: ${() => (this.left_clicked ? '#494C53' : this.left_hovered ? '#BCC2CB' : '#ffffff' )},
    //                 `
    // const Divrgt = styled('div')`
    //                 background: ${() => (this.right_clicked ? '#494C53' : this.right_hovered ? '#BCC2CB' : '#ffffff' )};
    //                 `
    return (
            <div class="container">
            <div v-show="left_clicked" class="menu-options">
                <div class="Cover1">
                    <div class="Cover2">
                        <div onclick="onEmailClick" class="email-btn menu-btn">
                            <div class="icon">{this.email_icon}</div>
                            <p class="para1">{this.menu_email_text}</p>
                            </div>
                        <div onclick="onURLClick" class="url-btn menu-btn">
                            <div class="icon">{this.url_icon}</div>
                            <p class="para1">{this.menu_url_text}</p>
                            </div>
                        <div onclick="onPhoneClick" class="phone-btn menu-btn">
                            <div class="icon">{this.phone_icon}</div>
                            <p class="para1">{this.menu_phone_text}</p>
                            </div>
                    </div>
                </div>
                <div class="Triangle1">
                </div>
            </div>
            <div v-show="!input_selected" class="main1">
                <div // lft 
                id="lft-btn" 
                class="btn" 
                onclick="onMenuClick" 
                onmouseover="onMenuMouseOver" 
                onmouseleave="onMenuMouseLeave" 
                > 
                <i class="fas fa-link">{this.value ? this.data: "M" }</i>
                </div> 
                {/* lft */}
                <div class="center-text">
                <input 
                class="text"
                type="text" 
                placeholder={this.placeholder_title}
                onChange={this.v_model_change}
                onfocus="onInputClick"/>
                <div 
                    v-show="inputset"
                    class="delete"
                    onclick="onDeleteClick"
                >
                D
                </div>
                </div>
                <div //rgt 
                id="rgt-btn" 
                class="btn" 
                onclick="onSendClick" 
                onmouseover="onSendMouseOver" 
                onmouseleave="onSendMouseLeave"
                >
                <i class="far fa-paper-plane">S</i>
                </div> 
                {/*  rgt */}
            </div>

            <div 
                v-show="input_selected" 
                class="main1" 
                style={{'border': '1px solid ' + this.yes_button_skin, 'padding': '0px 0px 0px 10px'}}
                >
                <div class="left-text">
                <input 
                onfocus="onInputClick" 
                class="text" 
                placeholder={this.placeholder_title}
                onChange={this.v_model_change}/>
                </div>
                <div 
                id="tick-btn" 
                class="btn" 
                style={{'background': this.yes_button_skin}}
                onclick="onYesClick"> 
                <i class="fas fa-check">Y</i>
                </div>
                <div 
                id="cancel-btn" 
                class="btn" 
                onclick="onCancelClick">
                <i class="fas fa-times">N</i>
                </div>
            </div>

            
            </div>
    )
  }
}
