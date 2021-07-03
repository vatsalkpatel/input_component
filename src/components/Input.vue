// Created by vatsal

<template>
<!-- main container div having 3 main parts -->
<div class="container">
    <!-- Left menu mode -->
    <div v-show="left_clicked" class="menu_mode">
        <div class="Cover1">
            <div class="Cover2">
                <div @click="onEmailClick" class="email-btn menu-btn">
                    <div class="icon">{{email_icon}}</div>
                    <p class="para1">{{menu_email_text}}</p>
                    </div>
                <div @click="onURLClick" class="url-btn menu-btn">
                    <div class="icon">{{url_icon}}</div>
                    <p class="para1">{{menu_url_text}}</p>
                    </div>
                <div @click="onPhoneClick" class="phone-btn menu-btn">
                    <div class="icon">{{phone_icon}}</div>
                    <p class="para1">{{menu_phone_text}}</p>
                    </div>
            </div>
        </div>
        <div class="Triangle1">
        </div>
    </div>
    <!-- Center initial mode -->
    <div v-show="!input_selected" class="main_mode">
        <div id="lft-btn" 
            class="btn" 
            @click="onMenuClick" 
            @mouseover="onMenuMouseOver" 
            @mouseleave="onMenuMouseLeave" 
            :style="[left_clicked ? {'background': '#494C53','color': 'white'} : left_hovered ? {'background' : '#BCC2CB',  } : undefined ]" > 
            <i class="fas fa-link">{{value ? data: "M" }}</i>
        </div>
        <div class="center-text">
            <input 
            class="text" 
            :placeholder="placeholder_title" 
            v-model="value" 
            @focus="onInputClick"/>
            <div 
            v-show="inputset"
            class="delete"
            @click="onDeleteClick">
            D
            </div>
        </div>
        <div 
        id="rgt-btn" 
        class="btn" 
        @click="onSendClick" 
        @mouseover="onSendMouseOver" 
        @mouseleave="onSendMouseLeave"
        :style="[right_clicked ? {'background': '#494C53','color': 'white'} : right_hovered ? {'background' : '#BCC2CB',  } : undefined ]">
        <i class="far fa-paper-plane">S</i>
        </div>
    </div>
<!-- Input entry mode -->
    <div v-show="input_selected" class="main_mode" :style="{'border': '1px solid '+ yes_button_skin, 'padding': '0px 0px 0px 10px'}">
        <div class="left-text">
            <input 
            @focus="onInputClick" 
            class="text" 
            :placeholder="placeholder_title" 
            v-model="value"/>
        </div>
        <div 
        id="tick-btn" 
        class="btn" 
        :style="{'background': yes_button_skin}"
        @click="onYesClick"> 
            <i class="fas fa-check">Y</i>
        </div>
        <div 
        id="cancel-btn" 
        class="btn" 
        @click="onCancelClick">
            <i class="fas fa-times">N</i>
        </div>
    </div>
</div>
</template>

<script>
// all the functionalities are written here
export default {
    name: 'Input',
    props: {
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
        return {
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
    methods: {
        onSendClick: function() {
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
        onDeleteClick: function(){
            this.inputset=false;
            this.value="";
            this.data="U";
            this.placeholder_title="URL";
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
            var emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(emailregex.test(this.value)){
                return true;
            }
            else{
                return false;
            }
        },
    },
}
</script>

<style scoped>
/* CSS Styles for all Components */

/* Container CSS */ /* Frame 533 */
.container{ 
    position: relative;
    width: 407px;
    height: 102px;
}

/* Triangle CSS */ /* Color */
.Triangle1{
    /* 🎨 Color */
    position: static;
    width: 0px;
    height: 0px;
    border-left: 6px solid white;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    /* width: 12px;
    height: 6px; */
    left: calc(50% - 12px/2 + 84px);
    top: calc(50% - 6px/2 - 3px);

    /* 9) Transparent - 0% */
    /* background: #FFFFFF;
    transform: rotate(90deg); */

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
}

/* Left Options menu */ /* Frame 508 */
.menu_mode {
    /* Auto Layout */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 156px;
    height: 102px;
    left: 0px;
    top: 0px;
    cursor:pointer;
}

/* Menu Option */
/* Tooltip/Light/Menu */
.Cover1 {
    position: static;
    width: 150px;
    height: 102px;
    left: 0px;
    top: 0px;

    /* Shadow/light/500 */
    filter: drop-shadow(0px 2px 8px rgba(40, 41, 61, 0.04)), drop-shadow(0px 16px 24px rgba(96, 97, 112, 0.16));

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
}

/* Frame 18 */
.Cover2{   
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 2.94%;
    bottom: 2.94%;
}

/* Menu Button Container CSS */
  .menu-btn{
    /* Auto Layout */
    display: flex;
    flex-direction: row;
    align-items: center;

    position: static;
    width: 150px;
    height: 32px;
    left: 0px;

    /* 9) Transparent - 0% */
    background: white;

    /* Inside Auto Layout */
    flex: none;
    flex-grow: 0;
    margin: 0px 0px;
  }

  .menu-btn:hover {
      background: #F0F2F6;
  }

/* Email Menu Btn CSS */ /* Frame 15 */
  .email-btn {
    top:0px;
    border-radius: 8px 8px 0px 0px;
    order: 0;
  }
/* URL Menu Btn CSS */ /* Frame 16 */
  .url-btn {
    top: 32px;
    order: 1;
  }
/* Phone Menu Btn CSS */ /* Frame 17 */
  .phone-btn {
    top: 64px;
    order: 2;
    border-radius: 0px 0px 8px 8px;
  }


/* input main CSS */ /* Frame 532 */
.main_mode {
    /* Auto Layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 251px;
    height: 40px;
    left: 156px;
    top: 31px;

    background: #FFFFFF;
    /* 2) Basic: Stroke/300 */
    border: 1px solid #BCC2CB;
    box-sizing: border-box;
    border-radius: 8px;
    cursor:pointer;

}

/* Button CSS */
  .btn {
  position: absolute;
  width: 30px;
  height: 38px;
  top: 0px;
  /* 1) Basic: Fill/100 */
  background: #F0F2F6;
  }

/* Button Icon CSS */
  i {
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  /* Vector */
  position: absolute;
  margin-top: 11px;
  margin-left: 7px;
  }

/* Text Box Wrapper CSS */
  .center-text {
    position: static;
    width: 165px;
    height: 24px;
    top: 8px;
    left: 43px;
  }

.left-text {
/* www.yahoo.com */

position: static;
width: 177px;
height: 24px;
left: 10px;
top: 8px;

/* Paragraph 2 16px */
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

/* 1) Basic: Fill/500 */
color: #494C53;

/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 1;
margin: 0px 0px;
}
/* Text Box CSS */
  input {
    width: 165px;
    height: 24px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    flex: none;
    order: 1;
    flex-grow: 1;
    border: none;
    padding: 0px;
    text-overflow: ellipsis;
    z-index: 5;
    cursor:pointer;
    max-width: 157px;
  }

/* Left Button CSS */
  #lft-btn {
    left: 0px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

/* Right Button CSS */
  #rgt-btn {
    left: 219px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  /* Tick button CSS */
  #tick-btn {
    left: 189px;
    background: #E74F30;
    color: white;
  }

/* Cross button */
  #cancel-btn  {
    left: 219px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

/* messase inside Menu */
  .para {
    position: static;
    width: 98px;
    height: 16px;
    left: 40px;
    top: 8px;

    /* Label 11px */
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    /* identical to box height, or 145% */

    /* 1) Basic: Fill/500 */
    color: #494C53;


    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 12px;
  }

/* Menu Icon CSS */
  .icon {
    /* 22) Icons/Page */
    position: static;
    display: flex;
    justify-content: center;
    width: 16px;
    height: 16px;
    left: 12px;
    top: 8px;
    cursor:pointer;
    

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 12px;
  }
  /* Delete Icon */
  .delete{
        position: absolute;
        width: 16px;
        height: 16px;
        left: 200px;
        top: 11px;  
        z-index: 10;
  }

</style>