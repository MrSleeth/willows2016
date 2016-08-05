---
title: Testimonials
layout: page
---

test

{% for quote in site.data.testimonials %}

<h2>
  {{ quote.name }} <span>{{ quote.description }}</span>
</h2>

<p>
  {{ quote.quote }}
</p>

{% endfor %}
