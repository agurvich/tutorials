---
layout: post
title: "Jupyter notebooks"
date: 0001-01-05 00:00:01
image: '/assets/img/'
description: 'Installing, running, and loving Jupyter notebooks'
main-class: 'terminal'
categories: 
- terminal
color: '#B31917'
tags:
- terminal
- python
twitter_text: 'Put your twitter description here.'
introduction: 'Put your description here.'
prereqs:
- /using-bash
- /using-python
- /matplotlib
tracks:
- 'Scientific Computing'
---

* making a jupyter config
* setting a password

{% highlight bash %}
jupyter notebook
{% endhighlight %}

{% highlight bash %}
jupyter notebook convert {notebook}.ipynb --to python
{% endhighlight %}

{% highlight bash %}
jupyter lab
{% endhighlight %}