---
layout: post
title: How to use a CSS checkbox to control every element of the page
author: Victor B
---

You might have already seen these tutorials on the web that describe a solution to have a CSS checkbox that can modify the style of the page using the ninja selector. They are used to open drawers or switch on & off the dark theme.

I wanted to implement one of them, to make a dark theme, but I had a problem. Here was my structure

```html
<header>
    <input type="checkbox" id="toggle-dark-theme-button">
    <label for="toggle-dark-theme-button">Light / Dark</label>
</header>
<main>
</main>
```

What I wanted to do is to change the background of the main using the button in the header. But with the ninja selector, you can only select the elements next to the input, so I thought some minutes, how could you make it be able to interact with main? Maybe with JS? No, I want it to be CSS-only. With parents selectors maybe? Ah true, CSS don't have them...

## Solution

But... Who said a label has to be next to its input? Let's try:

```html
<header>
    <label for="toggle-dark-theme-button">Light / Dark</label>
</header>
<input type="checkbox" id="toggle-dark-theme-button">
<main>
</main>
```

Try to click on the label and... The checkbox is now activated! Now just implement the thing you'd have done following one of the plenty of tutorials available on Internet.

## Quick tip

If you put your input directly in the body, in no other elements, it will be able to control all the elements of it! Enjoy!