

var app = function(app) {

    app.makeController = function(stage, p, pages, randomH, randomF) {

        // pages.on("page", function(e) {
        pages.on("pagetransitioned", function(e) {
            zog(pages.page.name);
        })

        var hotSpots = new zim.HotSpots([
{page:p.page1, rect:p.page1.tabs.buttons[1], call:function(){pages.go(p.page2, "down");}},
{page:p.page2, rect:p.page2.tabs.buttons[1], call:function(){pages.go(p.page1, "up");}},
{page:p.page1, rect:p.page1.tabs.buttons[0], call:randomH},
{page:p.page2, rect:p.page2.tabs.buttons[0], call:randomF},
          ]);

   


    }
    return app;
}(app || {});

