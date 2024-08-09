const filters = require('./filters');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/styles.css");

    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    eleventyConfig.addCollection("blog", function(collection) {
        return collection.getFilteredByGlob("src/blog/*.md").filter(function(item) {
        return !item.inputPath.endsWith("index.md");
        });
    });

  eleventyConfig.addPlugin(filters);
  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    }
  };
};