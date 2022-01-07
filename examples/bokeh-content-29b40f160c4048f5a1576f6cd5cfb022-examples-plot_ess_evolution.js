(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("fa088f7c-effe-4d18-9535-898c13c50afa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa088f7c-effe-4d18-9535-898c13c50afa' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"187b6a10-445a-4031-a78c-916b198811cc":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20856","type":"SaveTool"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20882","type":"Line"},{"attributes":{},"id":"20902","type":"AllLabels"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20904"},"group":null,"major_label_policy":{"id":"20905"},"ticker":{"id":"20843"}},"id":"20842","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"20881"},"glyph":{"id":"20882"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20884"},"nonselection_glyph":{"id":"20883"},"view":{"id":"20886"}},"id":"20885","type":"GlyphRenderer"},{"attributes":{},"id":"20843","type":"BasicTicker"},{"attributes":{"callback":null},"id":"20857","type":"HoverTool"},{"attributes":{"toolbar":{"id":"20918"},"toolbar_location":"above"},"id":"20919","type":"ToolbarBox"},{"attributes":{"axis":{"id":"20846"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20849","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20871","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20875"},"glyph":{"id":"20876"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20878"},"nonselection_glyph":{"id":"20877"},"view":{"id":"20880"}},"id":"20879","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20875"}},"id":"20880","type":"CDSView"},{"attributes":{},"id":"20906","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20876","type":"Line"},{"attributes":{"toolbars":[{"id":"20860"}],"tools":[{"id":"20850"},{"id":"20851"},{"id":"20852"},{"id":"20853"},{"id":"20854"},{"id":"20855"},{"id":"20856"},{"id":"20857"}]},"id":"20918","type":"ProxyToolbar"},{"attributes":{},"id":"20840","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20909"},"selection_policy":{"id":"20908"}},"id":"20875","type":"ColumnDataSource"},{"attributes":{},"id":"20836","type":"DataRange1d"},{"attributes":{"tools":[{"id":"20850"},{"id":"20851"},{"id":"20852"},{"id":"20853"},{"id":"20854"},{"id":"20855"},{"id":"20856"},{"id":"20857"}]},"id":"20860","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20893","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20870","type":"Circle"},{"attributes":{},"id":"20855","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20887"},"glyph":{"id":"20888"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20890"},"nonselection_glyph":{"id":"20889"},"view":{"id":"20892"}},"id":"20891","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"20869"},"glyph":{"id":"20870"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20872"},"nonselection_glyph":{"id":"20871"},"view":{"id":"20874"}},"id":"20873","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"20858"}},"id":"20852","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20884","type":"Line"},{"attributes":{},"id":"20905","type":"AllLabels"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20901"},"group":null,"major_label_policy":{"id":"20902"},"ticker":{"id":"20847"}},"id":"20846","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20913"},"selection_policy":{"id":"20912"}},"id":"20887","type":"ColumnDataSource"},{"attributes":{},"id":"20911","type":"Selection"},{"attributes":{},"id":"20910","type":"UnionRenderers"},{"attributes":{"source":{"id":"20869"}},"id":"20874","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20877","type":"Line"},{"attributes":{"axis":{"id":"20842"},"coordinates":null,"group":null,"ticker":null},"id":"20845","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20878","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20872","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20890","type":"Circle"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20895"},{"id":"20896"}],"location":"center_right","orientation":"horizontal"},"id":"20894","type":"Legend"},{"attributes":{"source":{"id":"20887"}},"id":"20892","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20883","type":"Line"},{"attributes":{},"id":"20850","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20889","type":"Circle"},{"attributes":{},"id":"20904","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20907"},"selection_policy":{"id":"20906"}},"id":"20869","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20911"},"selection_policy":{"id":"20910"}},"id":"20881","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20859"}},"id":"20854","type":"LassoSelectTool"},{"attributes":{},"id":"20913","type":"Selection"},{"attributes":{"children":[[{"id":"20833"},0,0]]},"id":"20917","type":"GridBox"},{"attributes":{},"id":"20853","type":"WheelZoomTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20891"},{"id":"20885"}]},"id":"20896","type":"LegendItem"},{"attributes":{},"id":"20901","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20858","type":"BoxAnnotation"},{"attributes":{"above":[{"id":"20894"}],"below":[{"id":"20842"}],"center":[{"id":"20845"},{"id":"20849"}],"height":500,"left":[{"id":"20846"}],"output_backend":"webgl","renderers":[{"id":"20873"},{"id":"20879"},{"id":"20885"},{"id":"20891"},{"id":"20893"}],"title":{"id":"20897"},"toolbar":{"id":"20860"},"toolbar_location":null,"width":500,"x_range":{"id":"20834"},"x_scale":{"id":"20838"},"y_range":{"id":"20836"},"y_scale":{"id":"20840"}},"id":"20833","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20912","type":"UnionRenderers"},{"attributes":{},"id":"20838","type":"LinearScale"},{"attributes":{},"id":"20851","type":"PanTool"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20888","type":"Circle"},{"attributes":{},"id":"20834","type":"DataRange1d"},{"attributes":{"source":{"id":"20881"}},"id":"20886","type":"CDSView"},{"attributes":{},"id":"20847","type":"BasicTicker"},{"attributes":{},"id":"20908","type":"UnionRenderers"},{"attributes":{},"id":"20907","type":"Selection"},{"attributes":{},"id":"20909","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20859","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"20919"},{"id":"20917"}]},"id":"20920","type":"Column"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20873"},{"id":"20879"}]},"id":"20895","type":"LegendItem"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20897","type":"Title"}],"root_ids":["20920"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"187b6a10-445a-4031-a78c-916b198811cc","root_ids":["20920"],"roots":{"20920":"fa088f7c-effe-4d18-9535-898c13c50afa"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();