
var app = function(app) {

    app.makePages = function(stage, stageW, stageH, layoutManager){

        var p = {};

        var page1 = p.page1 = new zim.Container(stageW, stageH)
            .addTo(stage);
        page1.name = "page1";

        var logo = frame.asset("love.png")
            .addTo(page1);

        var content = frame.asset("couple1.png")
            .addTo(page1);

        var buttons = new zim.Container()
            .addTo(page1);
            
        var tabs = page1.tabs = new zim.Tabs({
            width:430,
            tabs:["GIVE LOVE", "NEXT"]
        }).addTo(buttons);
        zog(tabs.buttons[0].text)


        // LAYOUT
        // holder, regions, lastMargin, backgroundColor,
        // vertical, regionShape, scalingObject, hideKey
        var layout = new zim.Layout({
            holder:page1,
            regions:[
        {object:logo, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
        {object:content, marginTop:5, maxWidth:100, backgroundColor:frame.white},
        {object:buttons, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            regionShape:new zim.Shape(),
            scalingObject:stage
        });
        layoutManager.add(layout);


        ////////////////////////////////////////


        // PAGE 2

        var page2 = p.page2 = new zim.Container(stageW, stageH)
            .addTo(stage);
        page2.name = "page2";

        var logo2 = page2.logo = frame.asset("love.png")
            .addTo(page2);



        var content2 = frame.asset("couple2.png")
            .addTo(page2);

        var buttons2 = new zim.Container()
            .addTo(page2);

        var tabs2 = page2.tabs = new zim.Tabs({
            width:450,
            tabs:["GIVE FLOWER", "NEXT"]
        }).addTo(buttons2);


        // LAYOUT
        // holder, regions, lastMargin, backgroundColor,
        // vertical, regionShape, scalingObject, hideKey
        var layout2 = new zim.Layout({
            holder:page2,
            regions:[
        {object:logo2, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
        {object:content2, marginTop:5, maxWidth:100, backgroundColor:frame.white},
        {object:buttons2, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            regionShape:new zim.Shape(),
            scalingObject:stage
        });
        layoutManager.add(layout2);
        return p;
    }

    return app;
}(app || {});
