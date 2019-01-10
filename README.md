# jquery-img-lazy-loader
Implement lazy loading for images simply across a website utilizing jQuery. Lazy loading images it a well known tactic for speeding up website performance. Images are typically one of the largest assets to load in a website therefore loading the actual image after intital page load drastically decreases initial document size. This implementation does not effect SEO as you can still dynamically append alt attributes to image tags. If you'd like to make changes please submit a pull request.

#Examples

###Shopify
```
<img src="{{ 'placeholder.jpg' | img_url }}" class="lazy-img" data-src="{{ 'actual-image' | img_url }}"/>
```

###Wordpress 
```
<img src="<?= get_template_directory() . '<path to placeholder image>' ?>" class="lazy-img" data-src="<?= $actual_img ?>"/>
```

###CSS Background 
```
<div class="lazy-bg" data-src="<?= get_template_directory() . '<path to placeholder image>' ?>"></div>
```

# Todos
1. remove the unecessary jQuery dependency
2. Add svg css for even faster loading of placeholder
