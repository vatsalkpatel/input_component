<template>
<!-- main container div having 3 main parts -->
<div class="container">
    <!-- Left menu mode -->
    <div class="menu_mode">
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