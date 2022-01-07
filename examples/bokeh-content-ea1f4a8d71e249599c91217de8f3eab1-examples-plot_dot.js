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
    
      
      
    
      const element = document.getElementById("12d3875d-1c74-4783-b867-9416bdc78341");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '12d3875d-1c74-4783-b867-9416bdc78341' but no matching script tag was found.")
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
                    
                  const docs_json = '{"dce89b6e-61b7-4b0d-969f-ddbbd5d69e17":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20424","type":"Line"},{"attributes":{},"id":"20389","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20405","type":"PolyAnnotation"},{"attributes":{},"id":"20443","type":"AllLabels"},{"attributes":{"coordinates":null,"formatter":{"id":"20445"},"group":null,"major_label_policy":{"id":"20446"},"ticker":{"id":"20389"}},"id":"20388","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20417","type":"Line"},{"attributes":{},"id":"20380","type":"DataRange1d"},{"attributes":{},"id":"20452","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20423","type":"Line"},{"attributes":{"axis":{"id":"20392"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20395","type":"Grid"},{"attributes":{"overlay":{"id":"20404"}},"id":"20398","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"20459"},"toolbar_location":"above"},"id":"20460","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20454"},"selection_policy":{"id":"20453"}},"id":"20433","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20429","type":"Circle"},{"attributes":{"source":{"id":"20427"}},"id":"20432","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20433"},"glyph":{"id":"20434"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20436"},"nonselection_glyph":{"id":"20435"},"view":{"id":"20438"}},"id":"20437","type":"GlyphRenderer"},{"attributes":{},"id":"20382","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"20415"},"glyph":{"id":"20416"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20418"},"nonselection_glyph":{"id":"20417"},"view":{"id":"20420"}},"id":"20419","type":"GlyphRenderer"},{"attributes":{},"id":"20446","type":"AllLabels"},{"attributes":{},"id":"20448","type":"Selection"},{"attributes":{"axis":{"id":"20388"},"coordinates":null,"group":null,"ticker":null},"id":"20391","type":"Grid"},{"attributes":{"source":{"id":"20421"}},"id":"20426","type":"CDSView"},{"attributes":{"overlay":{"id":"20405"}},"id":"20400","type":"LassoSelectTool"},{"attributes":{},"id":"20453","type":"UnionRenderers"},{"attributes":{},"id":"20447","type":"UnionRenderers"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20450"},"selection_policy":{"id":"20449"}},"id":"20421","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20428","type":"Circle"},{"attributes":{},"id":"20397","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20421"},"glyph":{"id":"20422"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20424"},"nonselection_glyph":{"id":"20423"},"view":{"id":"20426"}},"id":"20425","type":"GlyphRenderer"},{"attributes":{},"id":"20450","type":"Selection"},{"attributes":{},"id":"20401","type":"UndoTool"},{"attributes":{"source":{"id":"20415"}},"id":"20420","type":"CDSView"},{"attributes":{},"id":"20399","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20418","type":"Line"},{"attributes":{"coordinates":null,"formatter":{"id":"20442"},"group":null,"major_label_policy":{"id":"20443"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20393"}},"id":"20392","type":"LinearAxis"},{"attributes":{},"id":"20449","type":"UnionRenderers"},{"attributes":{},"id":"20386","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20430","type":"Circle"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20448"},"selection_policy":{"id":"20447"}},"id":"20415","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null},"id":"20439","type":"Title"},{"attributes":{},"id":"20393","type":"BasicTicker"},{"attributes":{},"id":"20442","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20404","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20436","type":"Circle"},{"attributes":{},"id":"20454","type":"Selection"},{"attributes":{"callback":null},"id":"20403","type":"HoverTool"},{"attributes":{},"id":"20451","type":"UnionRenderers"},{"attributes":{},"id":"20384","type":"LinearScale"},{"attributes":{"source":{"id":"20433"}},"id":"20438","type":"CDSView"},{"attributes":{},"id":"20445","type":"BasicTickFormatter"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20416","type":"Line"},{"attributes":{"children":[{"id":"20460"},{"id":"20458"}]},"id":"20461","type":"Column"},{"attributes":{"tools":[{"id":"20396"},{"id":"20397"},{"id":"20398"},{"id":"20399"},{"id":"20400"},{"id":"20401"},{"id":"20402"},{"id":"20403"}]},"id":"20406","type":"Toolbar"},{"attributes":{},"id":"20402","type":"SaveTool"},{"attributes":{"toolbars":[{"id":"20406"}],"tools":[{"id":"20396"},{"id":"20397"},{"id":"20398"},{"id":"20399"},{"id":"20400"},{"id":"20401"},{"id":"20402"},{"id":"20403"}]},"id":"20459","type":"ProxyToolbar"},{"attributes":{"data":{},"selected":{"id":"20452"},"selection_policy":{"id":"20451"}},"id":"20427","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20434","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20435","type":"Circle"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20422","type":"Line"},{"attributes":{},"id":"20396","type":"ResetTool"},{"attributes":{"below":[{"id":"20388"}],"center":[{"id":"20391"},{"id":"20395"}],"height":360,"left":[{"id":"20392"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20419"},{"id":"20425"},{"id":"20431"},{"id":"20437"}],"title":{"id":"20439"},"toolbar":{"id":"20406"},"toolbar_location":null,"width":720,"x_range":{"id":"20380"},"x_scale":{"id":"20384"},"y_range":{"id":"20382"},"y_scale":{"id":"20386"}},"id":"20379","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"20379"},0,0]]},"id":"20458","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"20427"},"glyph":{"id":"20428"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20430"},"nonselection_glyph":{"id":"20429"},"view":{"id":"20432"}},"id":"20431","type":"GlyphRenderer"}],"root_ids":["20461"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"dce89b6e-61b7-4b0d-969f-ddbbd5d69e17","root_ids":["20461"],"roots":{"20461":"12d3875d-1c74-4783-b867-9416bdc78341"}}];
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