/*
navigation bar models. 
*/
import "../../lib/jquery-3.6.0.min.js";
import "../../lib/underscore-umd.js";
import "../../lib/backbone.js";

class NavigationEntry {
    constructor({identifier,name,description}){
        this.id = identifier;
        this.name = name;
        this.description = description;
    }


}

var dict_len = function(d){
    return Object.keys(d).length;

}
$(function(){
    var NavModel = Backbone.Model.extend({
        currentState: 0,
        currentSubstate: -1,
        entries: {},
        default_subentries: {},
        subentries: {},
        initialize : function (){
            console.log("instantiate model...");
            var about_me = this.addOption("About Me");
            var research = this.addOption("Research");
            var teaching = this.addOption("Teaching");

            this.addSubOption(research,"Analog Computing", "software methods for analog computing platforms");
            this.addSubOption(teaching,"CSXXX","advanced software engineering");

            this.set({entries: this.entries, subentries: this.subentries, default_subentries: this.default_subentries})
            this.select(about_me);

        },
        navigation_entries: function(){
            return this.entries.values;
        },
        defaults: function(){
            return {
                currentState: -1,
                currentSubstate: -1
            }
        },
        select: function(opt){
            this.currentState = opt.id;
            this.currentSubstate = this.default_subentries[opt.id];
            this.set({currentState: opt.id, 
                        currentSubstate: this.default_subentries[opt.id]});
        },
        subselect: function(subopt){
            this.currentSubstate = subopt.id;
            this.set({currentSubstate: this.currentSubstate});
        },
        defaultSubOption: function(opt,subopt){
            this.default_subentries[opt.id] = subopt.id;
        },
        addOption: function(opt){
            var idx = dict_len(this.entries);
            this.entries[idx] = new NavigationEntry(idx,opt,"");
            this.default_subentries[idx] = -1;
            return this.entries[idx];
        },
        addSubOption: function(parent,opt,desc){
            if(!(parent.id in this.subentries)){
                this.subentries[parent.id] = {};
            }
            var idx = dict_len(this.subentries[parent.id]);
            this.subentries[parent.id][idx] = new NavigationEntry(idx,opt,desc);
            return this.subentries[idx];
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
        initialize: function(model){
            this.model = model;
            this.render();
        },
        render: function(){
            console.log(this.model);
            for(var nav in this.model.navigation_entries()){
                console.log(nav);
            }
            console.log("RENDERING NAVBAR");
            return "FOOBAR"
        }


    })

    var SubNavBarView = Backbone.View.extend({
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
            this.navmodel = new NavModel();
            this.navbar = new NavBarView(this.navmodel);
            this.subnavbar = new SubNavBarView(this.navmodel);

        }

    })
 
    var App = new AppView;
    
});
