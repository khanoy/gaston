<?php if(!defined('KIRBY')) exit ?>

title: Home
pages: 
  template:
    - default
    - projets
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea
    size:  large