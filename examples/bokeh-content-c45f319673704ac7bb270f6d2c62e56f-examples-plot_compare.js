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
    
      
      
    
      const element = document.getElementById("47721f14-b5a1-44c4-8591-60883c331979");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '47721f14-b5a1-44c4-8591-60883c331979' but no matching script tag was found.")
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
                    
                  const docs_json = '{"937b002a-6f82-46b1-8cce-1a55cf549c09":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18107"},"group":null,"major_label_policy":{"id":"18108"},"ticker":{"id":"18043"}},"id":"18042","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"18071"},"glyph":{"id":"18072"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18074"},"nonselection_glyph":{"id":"18073"},"view":{"id":"18076"}},"id":"18075","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18042"},"coordinates":null,"group":null,"ticker":null},"id":"18045","type":"Grid"},{"attributes":{"axis":{"id":"18046"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18049","type":"Grid"},{"attributes":{"overlay":{"id":"18059"}},"id":"18054","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"formatter":{"id":"18104"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18105"},"ticker":{"id":"18069"}},"id":"18046","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"RgsewH/PPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18110"},"selection_policy":{"id":"18109"}},"id":"18071","type":"ColumnDataSource"},{"attributes":{},"id":"18104","type":"BasicTickFormatter"},{"attributes":{},"id":"18111","type":"UnionRenderers"},{"attributes":{},"id":"18114","type":"Selection"},{"attributes":{},"id":"18055","type":"UndoTool"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18090","type":"MultiLine"},{"attributes":{},"id":"18040","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18085","type":"Circle"},{"attributes":{},"id":"18115","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18073","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18091","type":"MultiLine"},{"attributes":{"coordinates":null,"group":null},"id":"18102","type":"Title"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18072","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18079","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"18095"},"glyph":{"id":"18096"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18098"},"nonselection_glyph":{"id":"18097"},"view":{"id":"18100"}},"id":"18099","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"18077"},"glyph":{"id":"18078"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18080"},"nonselection_glyph":{"id":"18079"},"view":{"id":"18082"}},"id":"18081","type":"GlyphRenderer"},{"attributes":{},"id":"18053","type":"WheelZoomTool"},{"attributes":{},"id":"18108","type":"AllLabels"},{"attributes":{},"id":"18107","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"18124"},{"id":"18122"}]},"id":"18125","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"F1Z2xwOwPsBGCx7Af88+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18114"},"selection_policy":{"id":"18113"}},"id":"18083","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18092","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18118"},"selection_policy":{"id":"18117"}},"id":"18095","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18095"}},"id":"18100","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"18089"},"glyph":{"id":"18090"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18092"},"nonselection_glyph":{"id":"18091"},"view":{"id":"18094"}},"id":"18093","type":"GlyphRenderer"},{"attributes":{},"id":"18112","type":"Selection"},{"attributes":{"source":{"id":"18089"}},"id":"18094","type":"CDSView"},{"attributes":{},"id":"18113","type":"UnionRenderers"},{"attributes":{},"id":"18051","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18080","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18097","type":"Circle"},{"attributes":{},"id":"18116","type":"Selection"},{"attributes":{},"id":"18109","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"18050"},{"id":"18051"},{"id":"18052"},{"id":"18053"},{"id":"18054"},{"id":"18055"},{"id":"18056"},{"id":"18057"}]},"id":"18060","type":"Toolbar"},{"attributes":{},"id":"18117","type":"UnionRenderers"},{"attributes":{},"id":"18034","type":"DataRange1d"},{"attributes":{"overlay":{"id":"18058"}},"id":"18052","type":"BoxZoomTool"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18069","type":"FixedTicker"},{"attributes":{"toolbar":{"id":"18123"},"toolbar_location":"above"},"id":"18124","type":"ToolbarBox"},{"attributes":{},"id":"18110","type":"Selection"},{"attributes":{},"id":"18056","type":"SaveTool"},{"attributes":{"end":0.5,"start":-1.5},"id":"18036","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18084","type":"Circle"},{"attributes":{},"id":"18043","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18058","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18059","type":"PolyAnnotation"},{"attributes":{},"id":"18105","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"18083"},"glyph":{"id":"18084"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18086"},"nonselection_glyph":{"id":"18085"},"view":{"id":"18088"}},"id":"18087","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687557665243812},"id":"18101","type":"Span"},{"attributes":{"data":{"xs":[[-30.896502394616824,-30.72458373997899]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18112"},"selection_policy":{"id":"18111"}},"id":"18077","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"18057","type":"HoverTool"},{"attributes":{"source":{"id":"18071"}},"id":"18076","type":"CDSView"},{"attributes":{"children":[[{"id":"18033"},0,0]]},"id":"18122","type":"GridBox"},{"attributes":{"below":[{"id":"18042"}],"center":[{"id":"18045"},{"id":"18049"}],"height":500,"left":[{"id":"18046"}],"output_backend":"webgl","renderers":[{"id":"18075"},{"id":"18081"},{"id":"18087"},{"id":"18093"},{"id":"18099"},{"id":"18101"}],"title":{"id":"18102"},"toolbar":{"id":"18060"},"toolbar_location":null,"width":500,"x_range":{"id":"18034"},"x_scale":{"id":"18038"},"y_range":{"id":"18036"},"y_scale":{"id":"18040"}},"id":"18033","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18050","type":"ResetTool"},{"attributes":{"source":{"id":"18083"}},"id":"18088","type":"CDSView"},{"attributes":{"toolbars":[{"id":"18060"}],"tools":[{"id":"18050"},{"id":"18051"},{"id":"18052"},{"id":"18053"},{"id":"18054"},{"id":"18055"},{"id":"18056"},{"id":"18057"}]},"id":"18123","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18074","type":"Scatter"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18096","type":"Circle"},{"attributes":{},"id":"18118","type":"Selection"},{"attributes":{},"id":"18038","type":"LinearScale"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18078","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18098","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18086","type":"Circle"},{"attributes":{"data":{"xs":[[-32.05285582175997,-29.322259508727658],[-32.23767500713157,-29.38341112746424]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18116"},"selection_policy":{"id":"18115"}},"id":"18089","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18077"}},"id":"18082","type":"CDSView"}],"root_ids":["18125"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"937b002a-6f82-46b1-8cce-1a55cf549c09","root_ids":["18125"],"roots":{"18125":"47721f14-b5a1-44c4-8591-60883c331979"}}];
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