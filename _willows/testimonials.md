---
title: Testimonials
layout: page
---

<!--  -->

{% for quote in site.data.testimonials %}

<section>

  <h2>
    {{ quote.name }} <span>{{ quote.description }}:</span>
  </h2>

  <blockquote>
    {{ quote.quote }}
  </blockquote>

</section>
{% endfor %}
