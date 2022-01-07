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
    
      
      
    
      const element = document.getElementById("df058137-7dc2-414e-9bac-ada04246d23d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'df058137-7dc2-414e-9bac-ada04246d23d' but no matching script tag was found.")
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
                    
                  const docs_json = '{"1d8e9c7e-70fa-42e9-b910-84ca8b37938b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20554","type":"WheelZoomTool"},{"attributes":{},"id":"20582","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20559","type":"BoxAnnotation"},{"attributes":{},"id":"20537","type":"DataRange1d"},{"attributes":{"source":{"id":"20571"}},"id":"20573","type":"CDSView"},{"attributes":{"toolbar":{"id":"20589"},"toolbar_location":"above"},"id":"20590","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"20558","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20574","type":"Title"},{"attributes":{"below":[{"id":"20543"}],"center":[{"id":"20546"},{"id":"20550"}],"height":288,"left":[{"id":"20547"}],"output_backend":"webgl","renderers":[{"id":"20572"}],"title":{"id":"20574"},"toolbar":{"id":"20561"},"toolbar_location":null,"width":432,"x_range":{"id":"20535"},"x_scale":{"id":"20539"},"y_range":{"id":"20537"},"y_scale":{"id":"20541"}},"id":"20534","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20541","type":"LinearScale"},{"attributes":{},"id":"20581","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"20543"},"coordinates":null,"group":null,"ticker":null},"id":"20546","type":"Grid"},{"attributes":{},"id":"20544","type":"BasicTicker"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20578"},"group":null,"major_label_policy":{"id":"20579"},"ticker":{"id":"20548"}},"id":"20547","type":"LinearAxis"},{"attributes":{},"id":"20548","type":"BasicTicker"},{"attributes":{},"id":"20556","type":"UndoTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20570","type":"Scatter"},{"attributes":{},"id":"20539","type":"LinearScale"},{"attributes":{"overlay":{"id":"20560"}},"id":"20555","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"20534"},0,0]]},"id":"20588","type":"GridBox"},{"attributes":{"coordinates":null,"formatter":{"id":"20581"},"group":null,"major_label_policy":{"id":"20582"},"ticker":{"id":"20544"}},"id":"20543","type":"LinearAxis"},{"attributes":{"axis":{"id":"20547"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20550","type":"Grid"},{"attributes":{},"id":"20557","type":"SaveTool"},{"attributes":{},"id":"20535","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"20561"}],"tools":[{"id":"20551"},{"id":"20552"},{"id":"20553"},{"id":"20554"},{"id":"20555"},{"id":"20556"},{"id":"20557"},{"id":"20558"}]},"id":"20589","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"20590"},{"id":"20588"}]},"id":"20591","type":"Column"},{"attributes":{"overlay":{"id":"20559"}},"id":"20553","type":"BoxZoomTool"},{"attributes":{},"id":"20552","type":"PanTool"},{"attributes":{"tools":[{"id":"20551"},{"id":"20552"},{"id":"20553"},{"id":"20554"},{"id":"20555"},{"id":"20556"},{"id":"20557"},{"id":"20558"}]},"id":"20561","type":"Toolbar"},{"attributes":{},"id":"20578","type":"BasicTickFormatter"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AlPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDAu3qf/FM/wBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20584"},"selection_policy":{"id":"20583"}},"id":"20571","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"20571"},"glyph":{"id":"20570"},"group":null,"hover_glyph":null,"view":{"id":"20573"}},"id":"20572","type":"GlyphRenderer"},{"attributes":{},"id":"20579","type":"AllLabels"},{"attributes":{},"id":"20583","type":"UnionRenderers"},{"attributes":{},"id":"20551","type":"ResetTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20560","type":"PolyAnnotation"},{"attributes":{},"id":"20584","type":"Selection"}],"root_ids":["20591"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"1d8e9c7e-70fa-42e9-b910-84ca8b37938b","root_ids":["20591"],"roots":{"20591":"df058137-7dc2-414e-9bac-ada04246d23d"}}];
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