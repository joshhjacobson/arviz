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
    
      
      
    
      const element = document.getElementById("d760a663-6d57-4f1c-83ec-2945d3739737");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd760a663-6d57-4f1c-83ec-2945d3739737' but no matching script tag was found.")
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
                    
                  const docs_json = '{"877f71dd-d020-4e64-a378-77abccec07db":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"17262","type":"HoverTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17285"},"group":null,"major_label_policy":{"id":"17286"},"ticker":{"id":"17248"}},"id":"17247","type":"LinearAxis"},{"attributes":{"below":[{"id":"17247"}],"center":[{"id":"17250"},{"id":"17254"}],"height":288,"left":[{"id":"17251"}],"output_backend":"webgl","renderers":[{"id":"17276"}],"title":{"id":"17278"},"toolbar":{"id":"17265"},"toolbar_location":null,"width":432,"x_range":{"id":"17239"},"x_scale":{"id":"17243"},"y_range":{"id":"17241"},"y_scale":{"id":"17245"}},"id":"17238","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17287","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17263"}},"id":"17257","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"17255"},{"id":"17256"},{"id":"17257"},{"id":"17258"},{"id":"17259"},{"id":"17260"},{"id":"17261"},{"id":"17262"}]},"id":"17265","type":"Toolbar"},{"attributes":{"children":[[{"id":"17238"},0,0]]},"id":"17292","type":"GridBox"},{"attributes":{"axis":{"id":"17251"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17254","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17274","type":"Scatter"},{"attributes":{},"id":"17245","type":"LinearScale"},{"attributes":{},"id":"17258","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"17247"},"coordinates":null,"group":null,"ticker":null},"id":"17250","type":"Grid"},{"attributes":{},"id":"17288","type":"Selection"},{"attributes":{"children":[{"id":"17294"},{"id":"17292"}]},"id":"17295","type":"Column"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17263","type":"BoxAnnotation"},{"attributes":{},"id":"17282","type":"BasicTickFormatter"},{"attributes":{},"id":"17255","type":"ResetTool"},{"attributes":{},"id":"17256","type":"PanTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17264","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"17293"},"toolbar_location":"above"},"id":"17294","type":"ToolbarBox"},{"attributes":{},"id":"17252","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17278","type":"Title"},{"attributes":{"toolbars":[{"id":"17265"}],"tools":[{"id":"17255"},{"id":"17256"},{"id":"17257"},{"id":"17258"},{"id":"17259"},{"id":"17260"},{"id":"17261"},{"id":"17262"}]},"id":"17293","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"17264"}},"id":"17259","type":"LassoSelectTool"},{"attributes":{},"id":"17261","type":"SaveTool"},{"attributes":{},"id":"17243","type":"LinearScale"},{"attributes":{"source":{"id":"17275"}},"id":"17277","type":"CDSView"},{"attributes":{},"id":"17285","type":"BasicTickFormatter"},{"attributes":{},"id":"17248","type":"BasicTicker"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AlPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDAu3qf/FM/wBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17288"},"selection_policy":{"id":"17287"}},"id":"17275","type":"ColumnDataSource"},{"attributes":{},"id":"17283","type":"AllLabels"},{"attributes":{},"id":"17239","type":"DataRange1d"},{"attributes":{},"id":"17241","type":"DataRange1d"},{"attributes":{},"id":"17260","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17275"},"glyph":{"id":"17274"},"group":null,"hover_glyph":null,"view":{"id":"17277"}},"id":"17276","type":"GlyphRenderer"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17282"},"group":null,"major_label_policy":{"id":"17283"},"ticker":{"id":"17252"}},"id":"17251","type":"LinearAxis"},{"attributes":{},"id":"17286","type":"AllLabels"}],"root_ids":["17295"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"877f71dd-d020-4e64-a378-77abccec07db","root_ids":["17295"],"roots":{"17295":"d760a663-6d57-4f1c-83ec-2945d3739737"}}];
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