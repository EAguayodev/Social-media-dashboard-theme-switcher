### Built with

- Semantic HTML5 markup
- CSS 
- JS
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

Learned to create both light and dark theme for the challenge by creating a toggle button to switch between them. Used html, css and Javascript for the toggling between the themes. Integrated both flexbox and css grid for completing the structure layout in css.

```html
<div class="toggle-container">
        <span>Dark Mode</span>
        <span>
          <input type="checkbox" name="toggle" id="toggle" unchecked>
          <label for="toggle">
            <div class="toggle-ball" id="toggle-ball"></div>
          </label>
        </span>
      </div>
```
```css
.followers-instagram::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
}
```
```js
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', function(){
    document.body.classList.toggle('dark-theme');
})

```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources

- [w3schools](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp) - This helped with my html structure for building out the toggle button for the color theme switcher
- [css-tricks](https://css-tricks.com/gradient-borders-in-css/) - This is an amazing article which helped me find the solution for applying linear-gradient color to the instagram card. 


## Author
- Website - [https://www.ericaguayo.com]