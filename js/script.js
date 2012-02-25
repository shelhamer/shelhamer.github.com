/* Name: Niceties
Author: Evan Shelhamer */
/* nice namespace */
nice = {
  grid_sz : 16,
  container : null,
  T : null, // timeout
  init : function() {
    nice.container = $('#container');
    nice.container.css({ 'position': 'relative'});

    nice.gridAlign();
  },
  waitOnResize : function() {
    // wait until end of resize event to snap to align to grid
    // (avoids jitter)
    clearTimeout(nice.T);
    nice.T = setTimeout(function() {nice.gridAlign();}, 100);
  },
  gridAlign : function() {
    // align container to grid s.t. positition is as centered as possible
    var w = $(window).width();
    var center_x = nice.container.offset().left;
    var grid_x = Math.floor(center_x / nice.grid_sz) * nice.grid_sz - center_x;
    nice.container.css({ 'left': Math.round(grid_x) + 'px' });
    console.log(w);
    console.log(center_x);
    console.log(grid_x);
    console.log((center_x + grid_x) / nice.grid_sz);
  }
}

$(function() {
  nice.init();
  $(window).resize(nice.waitOnResize);
})
