hexo.extend.filter.register(
  'before_post_render',
  require('./lib/shortlink'),
  15
); 