---
layout: default
title: Links for Debug
permalink: /links/
category: debug
---

{% for page in site.pages %}
  {% if page.title %}
  <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
  {% endif %}
{% endfor %}
