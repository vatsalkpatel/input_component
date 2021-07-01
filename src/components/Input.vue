<template>
<!-- main container div having 3 main parts -->
<div class="container">
    <!-- Left menu mode -->
    <div v-show="left_clicked" class="menu_mode">
        <div class="Cover1">
            <div class="Cover2">
                <div @click="onEmailClick" class="email-btn menu-btn">
                    <div class="icon">E</div>
                    <p class="para1">Link to Email</p>
                    </div>
                <div @click="onURLClick" class="url-btn menu-btn">
                    <div class="icon">U</div>
                    <p class="para1">Link to URL</p>
                    </div>
                <div @click="onPhoneClick" class="phone-btn menu-btn">
                    <div class="icon">P</div>
                    <p class="para1">Link to Phone</p>
                    </div>
            </div>
        </div>
        <div class="Triangle1">
        </div>
    </div>
    <!-- Center initial mode -->
    <div class="main_mode">
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
<div class="input_mode">
</div>
</div>
</template>

<script>
// all the functionalities are written here
export default {
    name: 'Input',
    props: {
        
    },
    data() {
        return {
            value: "",
            data:"U",
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
            this.left_clicked = false;
            this.right_clicked = !this.right_clicked;
            this.$emit('SendClick');
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

</style>