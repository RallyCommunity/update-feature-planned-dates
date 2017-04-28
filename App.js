var app = null;

Ext.define('CustomApp', {
    // extend: 'Rally.app.App',
    extend: 'Rally.app.TimeboxScopedApp',
    scopeType : 'release',
    componentCls: 'app',
    // items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    img : "data:image/png;base64,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",


    // launch: function() {
    onScopeChange : function( scope ) {

    	app = this;

    	app.showMask("Loading configuration data...");

        if (!app.bundle) {
            this.rallyFunctions = Ext.create("RallyFunctions",{ 
                ctx : this.getContext(),
                keys : ['iterations','releases','piTypes']
            });
            this.rallyFunctions.readRallyItems().then( {
                success : function(bundle) {
                    app.bundle = bundle;
                    console.log("bundle",app.bundle);
                    app._createGrid(scope);
                }
            });
        } else {
            app._createGrid(scope);
        }
    },

    _createGrid : function(scope) {

        var filter = app._createReleaseFilter(scope);

        if (filter) {
            app.showMask("Loading features...");
            Ext.create('Rally.data.wsapi.TreeStoreBuilder').build({
                // models: ['portfolioitem/feature'],
                models: [_.first(app.bundle.piTypes).get("TypePath")],
                autoLoad: true,
                enableHierarchy: true,
                filters : [filter]
            }).then({
                success: app._onStoreBuilt,
                scope: app
            });
        }


    },

    _createReleaseFilter : function(scope) {
    	var today = new Date();
    	var filter = null;
    	var releases = _.filter(app.bundle.releases,function(release) {
            return release.get("Name") == scope.getRecord().get("Name");
    	});
        console.log("filteredReleases",releases);
    	_.each(releases,function(r,i){
    		var f = Ext.create('Rally.data.wsapi.Filter', {
		    	property: 'Release',
	     		operator: '=',
	     		value: r.get("_ref")
     		})
     		filter = i == 0 ? f : filter.or(f)
    	});
    	return filter;
    },

	_onStoreBuilt: function(store) {
		console.log("_onStoreBuilt");
		app.earliestIndex = 9;
		app.latestIndex = 10;
		app.hideMask();
        if (this.grid) {
            this.remove(this.grid);
        }

        this.grid = Ext.create('Rally.ui.grid.TreeGrid', {
	        xtype: 'rallytreegrid',
	        store: store,
	        context: app.getContext(),
	        enableEditing: false,
	        enableBulkEdit: false,
	        shouldShowRowActionsColumn: false,
	        enableRanking: false,
	        columnCfgs: [
	            'Name',
	            'Owner',
	            'Project',
	            'Release',
	            'Iteration',
	            { dataIndex : 'PlannedStartDate',
                    renderer : function(value) { return value ? value.toLocaleDateString() : "";}
                },
	            { dataIndex : 'PlannedEndDate',
                    renderer : function(value) { return value ? value.toLocaleDateString() : "";}
                },
	            'LeafStoryCount',
	            {
	            	header : 'Planned / Unplanned Count',   
                	dataIndex : 'Parent', 
                	width : 50,
                	hidden : false,
                	renderer : app.renderCustomColumn
	            },
	            {
	            	header : '% Planned',   
                	dataIndex : 'Parent', 
                	width : 50,
                	hidden : false,
                	renderer : app.renderPercentPlanned
	            },

	            {
	            	header : 'Earliest Planned',   
                	dataIndex : 'Parent', 
                	width : 75,
                	hidden : false,
                	renderer : app.renderEarliestDate
	            },
	            {
	            	header : 'Latest Planned',   
                	dataIndex : 'Parent', 
                	width : 75,
                	hidden : false,
                	renderer : app.renderLatestDate
	            },
                {
                    xtype: 'actioncolumn',
                    icon: app.img,
                    handler: function(grid, row,a,b,c) {
                        console.log("row",grid.store.data.items[row].get("Name"));
                        var rec = grid.store.data.items[row];
                        console.log(rec.get("Earliest"),rec.get("Latest"));
                        if(rec.get("Earliest")) 
                            rec.set("PlannedStartDate",rec.get("Earliest"));
                        if (rec.get("Latest"))
                            rec.set("PlannedEndDate",rec.get("Latest"));
                        rec.save();
                    }
                }               
	        ]
	    });
        this.add(this.grid);
    },

    calcEarliestAndLatest : function(planned) {

		var startDates = _.sortBy(_.map(planned,function(story) {
			var i = _.find(app.bundle.iterations,function(it) {
				return it.get("_ref") == story.get("Iteration")._ref;
			});
			return i.get("StartDate"); // Rally.util.DateTime.fromIsoString(i.raw["StartDate"]);
		}));

		var endDates = _.sortBy(_.map(planned,function(story) {
			var i = _.find(app.bundle.iterations,function(it) {
				return it.get("_ref") == story.get("Iteration")._ref;
			});
			return i.get("EndDate"); // return Rally.util.DateTime.fromIsoString(i.raw["EndDate"]);
		}))

		return {
			earliest : _.first(startDates),
			latest : _.last(endDates)
		}

    },

    calcPercentPlanned : function(planned,rec) {

    	var lsc = rec.get("LeafStoryCount") || 0;
		var pp = (lsc > 0 && planned.length > 0) ? ((planned.length / lsc) * 100) : 0
		return Math.round(pp);

    },

    renderPercentPlanned : function(value,meta,rec) {

    	if (_.isUndefined(rec.get("PercentPlanned"))) {
    		return "..."
    	} else {
    		return rec.get("PercentPlanned");
    	}
    },

    renderEarliestDate : function(value,meta,r,a,colIndex,c) {
		value = r.get("Earliest");
    	if (_.isUndefined(value)) {
    		return "..."
    	} else {
			var diff = Rally.util.DateTime.getDifference(value,r.get("PlannedStartDate"),'day');
			if (Math.abs(diff) > 0 ) {
				meta.style = "background-color:LemonChiffon;";
			}
    		return value.toLocaleDateString(); 
    	}
    },

    renderLatestDate : function(value,meta,r,a,colIndex,c) {
		value = r.get("Latest");
    	if (_.isUndefined(value)) {
    		return "..."
    	} else {
			var diff = Rally.util.DateTime.getDifference(value,r.get("PlannedEndDate"),'day');
			if (Math.abs(diff) > 0 ) {
				meta.style = "background-color:LemonChiffon;";
			}   
    		return value.toLocaleDateString(); 
    	}
    },

    renderCustomColumn : function(value,meta,r) {
      	
      	if (r.get("_type")=="portfolioitem/feature") {
      		var up =  r.get("Unplanned");
      		var p = r.get("Planned");
      		if (_.isUndefined(up)||_.isUndefined(p)) {
      			var itemId = Ext.id();
		        Ext.defer(app.readStories,500, app, [value,itemId,r]);
		        return('...');
      		} else {
      			if (p.length == 0 && up.length > 0) {
			    	meta.style = "background-color:tomato;";
      			}
      			if (p.length > 0 && up.length == 0) {
			    	meta.style = "background-color:LightGreen;";
      			}

      			return ""+p.length+ " / " + (!_.isUndefined(p) ? up.length : 0);
      		}
      	}
  		return "-";

	},

	unplannedStories : function(list) {

		var filteredList = _.filter(list,function(rec) {
					return rec.get("_type") == "hierarchicalrequirement" &&
						rec.get("Children").Count == 0 &&
					(_.isNull(rec.get("Iteration")) || _.isUndefined(rec.get("Iteration")))
		});
		return filteredList;
	},

	plannedStories : function(list) {
		var filteredList = _.filter(list,function(rec) {
					return rec.get("_type") == "hierarchicalrequirement" &&
						rec.get("Children").Count == 0 &&
					(!(_.isNull(rec.get("Iteration")) || _.isUndefined(rec.get("Iteration"))))
		});
		return filteredList;
	},


	readStories : function(value,itemId,rec) {

		this.rallyFunctions.recurseObject(rec) .then({
			success : function(list) {
				// filter to just stories which have no iteration
				var unplanned = app.unplannedStories(list);
				var planned = app.plannedStories(list);
				rec.set("Unplanned",unplanned);
				rec.set("Planned", planned);
				var elDates = app.calcEarliestAndLatest(planned);
				rec.set("Earliest", elDates.earliest);
				rec.set("Latest",elDates.latest);
				rec.set("PercentPlanned", app.calcPercentPlanned(planned,rec));
			}
		}
		)
	},
	showMask: function(msg) {
        if ( this.getEl() ) { 
            this.getEl().unmask();
            this.getEl().mask(msg);
        }
    },
    hideMask: function() {
        this.getEl().unmask();
    }

});
