---
layout: post
title: How to make a CSS-only hamburger menu
author: Victor B
---

Hello! Doing this site I wanted to make an hamburger menu which you can see using this site on mobile, but I wanted it lightweight and performant. This means : no JavaScript.

So I found a CSS-only way and I think it's the best and cleanest way, so here it is.

## Create the HTML

First you need to make the menu, let's imagine something like this :

```html
<div class="menu">
    <a href="#">Close the menu</a>
    <a href="link">Link #1</a>
    <a href="link2">Link #2</a>
    <!-- ... -->
</div>
```

And of course, add a link on the page to open the menu :

```html
<a href="#menu">Menu</a>
```

## CSS behavior

Now the most interesting part : the behavior

What we want to achieve is that when there will be `#menu` in the URL, the menu will be opened, otherwise, it will be closed. We can do that with the `:target` css pseudo-class

```css
/* The menu is closed (no #menu in the URL) */
#menu:not(:target) {
    display: none
}

/* The menu is opened (#menu in the URL) */
#menu:target {
    display: flex /* (for example, use the display you want) */
    /* Here customize your menu: you could make it full screen, place the links etc... */
}
```

Now the most interesting things to do would be combine it with media queries to make this menu only appear on smartphones etc... Be creative!