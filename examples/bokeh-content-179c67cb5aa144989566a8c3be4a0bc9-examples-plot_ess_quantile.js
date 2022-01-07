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
    
      
      
    
      const element = document.getElementById("1969f3a7-1789-4bf5-948d-a9359c6ef973");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1969f3a7-1789-4bf5-948d-a9359c6ef973' but no matching script tag was found.")
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
                    
                  const docs_json = '{"b10e623c-f65f-4a2e-8145-f977dc9b0590":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"21133","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21151","type":"Span"},{"attributes":{"toolbar":{"id":"21167"},"toolbar_location":"above"},"id":"21168","type":"ToolbarBox"},{"attributes":{},"id":"21112","type":"DataRange1d"},{"attributes":{},"id":"21123","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21147","type":"Circle"},{"attributes":{},"id":"21157","type":"AllLabels"},{"attributes":{"children":[[{"id":"21109"},0,0]]},"id":"21166","type":"GridBox"},{"attributes":{},"id":"21119","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"21136"}],"tools":[{"id":"21126"},{"id":"21127"},{"id":"21128"},{"id":"21129"},{"id":"21130"},{"id":"21131"},{"id":"21132"},{"id":"21133"}]},"id":"21167","type":"ProxyToolbar"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21156"},"group":null,"major_label_policy":{"id":"21157"},"ticker":{"id":"21123"}},"id":"21122","type":"LinearAxis"},{"attributes":{"below":[{"id":"21118"}],"center":[{"id":"21121"},{"id":"21125"}],"height":500,"left":[{"id":"21122"}],"output_backend":"webgl","renderers":[{"id":"21149"},{"id":"21151"}],"title":{"id":"21152"},"toolbar":{"id":"21136"},"toolbar_location":null,"width":500,"x_range":{"id":"21110"},"x_scale":{"id":"21114"},"y_range":{"id":"21112"},"y_scale":{"id":"21116"}},"id":"21109","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21110","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21152","type":"Title"},{"attributes":{},"id":"21131","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21162"},"selection_policy":{"id":"21161"}},"id":"21145","type":"ColumnDataSource"},{"attributes":{},"id":"21162","type":"Selection"},{"attributes":{"source":{"id":"21145"}},"id":"21150","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21148","type":"Circle"},{"attributes":{"axis":{"id":"21118"},"coordinates":null,"group":null,"ticker":null},"id":"21121","type":"Grid"},{"attributes":{},"id":"21132","type":"SaveTool"},{"attributes":{"axis":{"id":"21122"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21125","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21146","type":"Circle"},{"attributes":{},"id":"21161","type":"UnionRenderers"},{"attributes":{},"id":"21129","type":"WheelZoomTool"},{"attributes":{"tools":[{"id":"21126"},{"id":"21127"},{"id":"21128"},{"id":"21129"},{"id":"21130"},{"id":"21131"},{"id":"21132"},{"id":"21133"}]},"id":"21136","type":"Toolbar"},{"attributes":{"overlay":{"id":"21135"}},"id":"21130","type":"LassoSelectTool"},{"attributes":{},"id":"21126","type":"ResetTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21134","type":"BoxAnnotation"},{"attributes":{},"id":"21114","type":"LinearScale"},{"attributes":{},"id":"21160","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"21145"},"glyph":{"id":"21146"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21148"},"nonselection_glyph":{"id":"21147"},"view":{"id":"21150"}},"id":"21149","type":"GlyphRenderer"},{"attributes":{},"id":"21127","type":"PanTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21159"},"group":null,"major_label_policy":{"id":"21160"},"ticker":{"id":"21119"}},"id":"21118","type":"LinearAxis"},{"attributes":{},"id":"21156","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21135","type":"PolyAnnotation"},{"attributes":{},"id":"21116","type":"LinearScale"},{"attributes":{},"id":"21159","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"21134"}},"id":"21128","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"21168"},{"id":"21166"}]},"id":"21169","type":"Column"}],"root_ids":["21169"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"b10e623c-f65f-4a2e-8145-f977dc9b0590","root_ids":["21169"],"roots":{"21169":"1969f3a7-1789-4bf5-948d-a9359c6ef973"}}];
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