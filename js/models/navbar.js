/*
navigation bar models. 
*/
import "../../lib/jquery-3.6.0.min.js";
import "../../lib/underscore-umd.js";
import "../../lib/backbone.js";

class NavigationEntry {
    constructor({identifier,name,description}){
        self.id = identifier;
        this.name = name;
        this.description = description;
    }


}

$(function(){
    var NavBarModel = Backbone.Model.extend({
        currentState: 0,
        entries: {},
        defaults : function (){
            return [
                new NavigationEntry(0,"About Me", "who am i?"),
                new NavigationEntry(1,"Research", "research projects my group is working on"), 
                new NavigationEntry(2,"Teaching", "classes i'm teaching"), 
                new NavigationEntry(3,"Service", "professional activities and service")]
        },
        put : function(entry){
            entries[entry.id] = entry;
        },
        current : function(){
            return entries[currentState];
        }
        

    });

    var NavEntryView = Backbone.View.extend({
        tagName: "li",
        template: _.template($("#naventry-template").html()),
        description: $("#naventry-description").html(),
        render : function() {
            return this
        }
    })

    var NavBarView = Backbone.View.extend({
        el: $("#navbar"),
        subnav: $("#subnavbar"),
        initialize: function(){
            console.log("INITIALIZING NAVBAR");
        },
        render: function(){
            console.log("RENDERING NAVBAR");
            return "FOOBAR"
        }


    })


    var AppView = Backbone.View.extend({

        initialize: function(){
            console.log("INITIALIZE APP")
        }

    })
 
    var App = new AppView;
    var NavBarView = new NavBarView;
    
});
/*
var TeachingSubnavBar = Backbone.Model.Extend({
    currentState: null,
    defaults: function(){
        return [
            new NavigationEntry(0,"CSXXX/EEXXX", "Software techniques for emerging hardware platforms"),
            new NavigationEntry(1,"CSXXX", "Software engineering")
        ]
    }
})

var ResearchSubnavBar = Backbone.Model.Extend({
    currentState: null,
    defaults: function(){
        return [
            new NavigationEntry(0,"Overview", "overview of current research and publications"),
            new NavigationEntry(1,"Emerging Hardware", "software for emerging memory and compute technologies"),
            new NavigationEntry(2,"Analog Computation", "software that enables the use of hardware which performs analog comptuation."),
            new NavigationEntry(3,"Design Productivity", "software for enabling rapid development of mixed-signal architectures.")
        ]
    }
})


var ServiceSubnavBar = Backbone.Model.Extend({
    currentState: null,
    defaults : function(){
        return [
            new NavigationEntry(0,"Service", "academic service and professional activities"),
            new NavigationEntry(1,"Talks", "invited talks"),
            new NavigationEntry(2,"Awards", "awards")
        ]
    }

    
})
*/