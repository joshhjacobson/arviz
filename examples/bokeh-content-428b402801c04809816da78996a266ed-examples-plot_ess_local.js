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
    
      
      
    
      const element = document.getElementById("151a41eb-c991-497b-833e-1f92d9672311");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '151a41eb-c991-497b-833e-1f92d9672311' but no matching script tag was found.")
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
                    
                  const docs_json = '{"1e49dcaf-aa66-4683-bc69-7af820d259aa":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21047"},"selection_policy":{"id":"21046"}},"id":"21025","type":"ColumnDataSource"},{"attributes":{},"id":"21048","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"21015"}},"id":"21010","type":"LassoSelectTool"},{"attributes":{},"id":"21046","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"21013","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21026","type":"Circle"},{"attributes":{},"id":"21042","type":"AllLabels"},{"attributes":{"axis":{"id":"20998"},"coordinates":null,"group":null,"ticker":null},"id":"21001","type":"Grid"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21031","type":"Scatter"},{"attributes":{},"id":"21003","type":"BasicTicker"},{"attributes":{"below":[{"id":"20998"}],"center":[{"id":"21001"},{"id":"21005"}],"height":500,"left":[{"id":"21002"}],"output_backend":"webgl","renderers":[{"id":"21029"},{"id":"21033"},{"id":"21035"},{"id":"21036"}],"title":{"id":"21037"},"toolbar":{"id":"21016"},"toolbar_location":null,"width":500,"x_range":{"id":"20990"},"x_scale":{"id":"20994"},"y_range":{"id":"20992"},"y_scale":{"id":"20996"}},"id":"20989","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21009","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"21002"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21005","type":"Grid"},{"attributes":{},"id":"21049","type":"Selection"},{"attributes":{},"id":"21007","type":"PanTool"},{"attributes":{"children":[[{"id":"20989"},0,0]]},"id":"21053","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21037","type":"Title"},{"attributes":{},"id":"20990","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21035","type":"Span"},{"attributes":{},"id":"21047","type":"Selection"},{"attributes":{},"id":"21041","type":"BasicTickFormatter"},{"attributes":{},"id":"21011","type":"UndoTool"},{"attributes":{},"id":"20994","type":"LinearScale"},{"attributes":{},"id":"21012","type":"SaveTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21049"},"selection_policy":{"id":"21048"}},"id":"21032","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21036","type":"Span"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21041"},"group":null,"major_label_policy":{"id":"21042"},"ticker":{"id":"21003"}},"id":"21002","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"21032"},"glyph":{"id":"21031"},"group":null,"hover_glyph":null,"view":{"id":"21034"}},"id":"21033","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"21014"}},"id":"21008","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"21055"},{"id":"21053"}]},"id":"21056","type":"Column"},{"attributes":{},"id":"21044","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"21016"}],"tools":[{"id":"21006"},{"id":"21007"},{"id":"21008"},{"id":"21009"},{"id":"21010"},{"id":"21011"},{"id":"21012"},{"id":"21013"}]},"id":"21054","type":"ProxyToolbar"},{"attributes":{},"id":"21006","type":"ResetTool"},{"attributes":{},"id":"20992","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21044"},"group":null,"major_label_policy":{"id":"21045"},"ticker":{"id":"20999"}},"id":"20998","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21027","type":"Circle"},{"attributes":{"source":{"id":"21025"}},"id":"21030","type":"CDSView"},{"attributes":{"tools":[{"id":"21006"},{"id":"21007"},{"id":"21008"},{"id":"21009"},{"id":"21010"},{"id":"21011"},{"id":"21012"},{"id":"21013"}]},"id":"21016","type":"Toolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21015","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21028","type":"Circle"},{"attributes":{"toolbar":{"id":"21054"},"toolbar_location":"above"},"id":"21055","type":"ToolbarBox"},{"attributes":{},"id":"20996","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21014","type":"BoxAnnotation"},{"attributes":{},"id":"21045","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"21025"},"glyph":{"id":"21026"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21028"},"nonselection_glyph":{"id":"21027"},"view":{"id":"21030"}},"id":"21029","type":"GlyphRenderer"},{"attributes":{},"id":"20999","type":"BasicTicker"},{"attributes":{"source":{"id":"21032"}},"id":"21034","type":"CDSView"}],"root_ids":["21056"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"1e49dcaf-aa66-4683-bc69-7af820d259aa","root_ids":["21056"],"roots":{"21056":"151a41eb-c991-497b-833e-1f92d9672311"}}];
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