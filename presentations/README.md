This is the base for all the slides of the class. The framework in use is a fully installed version of [reveal.js](https://github.com/hakimel/reveal.js).

Un-rendered material can be found in `sourcedocs`:

- notes are written in markdown other than `fragments` (within slide navigation), in which case [raw html]() is used
- `---` separates horizontal slides
- `~~~` separates vertical slides

To update, change the `index.html` section:

```
<section data-markdown='sourcedocs/lab0223.md' <!-- current source -->
         data-separator='---'
         data-separator-vertical='~~~'
         data-charset="iso-8859-15">
>
</section>
```