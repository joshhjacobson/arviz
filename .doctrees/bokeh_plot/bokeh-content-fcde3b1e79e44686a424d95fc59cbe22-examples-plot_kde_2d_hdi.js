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
    
      
      
    
      const element = document.getElementById("86153b8e-e827-465b-bb16-41438dd57153");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '86153b8e-e827-465b-bb16-41438dd57153' but no matching script tag was found.")
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
                    
                  const docs_json = '{"deb1fa85-2395-40ad-9676-6221f4f7764b":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[307]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[307]}},"selected":{"id":"23799"},"selection_policy":{"id":"23798"}},"id":"23776","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"23747"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23750","type":"Grid"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23779","type":"Patch"},{"attributes":{"children":[[{"id":"23734"},0,0]]},"id":"23805","type":"GridBox"},{"attributes":{"callback":null},"id":"23758","type":"HoverTool"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23771","type":"Patch"},{"attributes":{"below":[{"id":"23743"}],"center":[{"id":"23746"},{"id":"23750"}],"height":500,"left":[{"id":"23747"}],"output_backend":"webgl","renderers":[{"id":"23774"},{"id":"23780"},{"id":"23786"}],"title":{"id":"23788"},"toolbar":{"id":"23761"},"toolbar_location":null,"width":500,"x_range":{"id":"23735"},"x_scale":{"id":"23739"},"y_range":{"id":"23737"},"y_scale":{"id":"23741"}},"id":"23734","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"formatter":{"id":"23791"},"group":null,"major_label_policy":{"id":"23792"},"ticker":{"id":"23748"}},"id":"23747","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"23782"},"glyph":{"id":"23783"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23785"},"nonselection_glyph":{"id":"23784"},"view":{"id":"23787"}},"id":"23786","type":"GlyphRenderer"},{"attributes":{},"id":"23739","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"23794"},"group":null,"major_label_policy":{"id":"23795"},"ticker":{"id":"23744"}},"id":"23743","type":"LinearAxis"},{"attributes":{},"id":"23748","type":"BasicTicker"},{"attributes":{"axis":{"id":"23743"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23746","type":"Grid"},{"attributes":{"children":[{"id":"23807"},{"id":"23805"}]},"id":"23808","type":"Column"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23785","type":"Patch"},{"attributes":{},"id":"23796","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"23759"}},"id":"23753","type":"BoxZoomTool"},{"attributes":{},"id":"23792","type":"AllLabels"},{"attributes":{"tools":[{"id":"23751"},{"id":"23752"},{"id":"23753"},{"id":"23754"},{"id":"23755"},{"id":"23756"},{"id":"23757"},{"id":"23758"}]},"id":"23761","type":"Toolbar"},{"attributes":{"source":{"id":"23770"}},"id":"23775","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"XscEdIUd8T9zajsIPPbwP/K8hphU2/A/JZfXguW48D9o4DUfELXwPyJ/DS2b6vA/zEk+mFJI8T9IGjibnFDxP+JOUhTcrvE/XMktn9km8j8SBA1bTIzyP0WouikqsfI/ZLtgAfVN8z/a7eEa/MfzP/xRTrcYAfQ/2kId3DDy9D+k17baqwP1P612cgKBFvY/bMGLmls/9j/JgKDxN133PzSrYFoLe/c//JQ1Gru2+D/EfgraavL5P+ZLJhBOFPo/kGjfmRou+z+6Mxa9YKP7P1hStFnKafw/ry5AUiiO/T8gPIkZeqX9P+glXtkp4f4/2IeZzGwOAEBLtuiMFh4AQL78g6xErABAonFujBxKAUD889St9eIBQIbmWGz05wFAaltDTMyFAkBO0C0spCMDQDRFGAx8wQNAGLoC7FNfBED8Lu3LK/0EQOCj16sDmwVArCEGw+2mBUDEGMKL2zgGQKqNrGuz1gZAga1FOknrBkCOApdLi3QHQJzzvBXNfQdAEaDzbsDNB0C/1I2hhgkIQHJ3gStjEghAdAg5n74qCEC4KEFXMDkIQHacnKEFMwhA4nvIqBcWCEByd4ErYxIIQDYko2nB7wdAYkF9wOrEB0DKPp+ZB5QHQI4Cl0uLdAdAyxxLIZlcB0AEHc/awxsHQKqNrGuz1gZAJdzAmlfJBkDQ14uFf2EGQMQYwovbOAZAVIiYvpDdBUDgo9erA5sFQNC9wT3gRwVA/C7tyyv9BECN3tG2l60EQBi6AuxTXwRANLgIIJkEBEA0RRgMfMEDQFBV6B1RUANATtAtLKQjA0CAI1qHVIgCQGpbQ0zMhQJAhuZYbPTnAUBpUtjTg3kBQKJxbowcSgFAvvyDrESsAEDoa9mEeyMAQNiHmcxsDgBA6CVe2Snh/j8gPIkZeqX9P1hStFnKafw/4CW8s1Bx+z+QaN+ZGi77P8R+Ctpq8vk//JQ1Gru2+D8zq2BaC3v3P4BRHKpMSfY/bMGLmls/9j+k17baqwP1Pz2y3dDLDPQ/2u3hGvzH8z+LOvkIDZbyPxIEDVtMjPI/KA6XXTmQ8T9IGjibnFDxP17HBHSFHfE/","dtype":"float64","order":"little","shape":[102]},"y":{"__ndarray__":"UNg83+cn9z+YvQ1tfk/4P+Si3voUd/k/LIiviKue+j90bYAWQsb7P8BSUaTY7fw/BzgiMm8V/j8lXO/b9iz+P1Qd878FPf8/TgHiJk4yAED0lYMEH58AQPRzym0ZxgBAmOaytORZAUDvx22Nir8BQD5Zm/uv7QFA4suDQnuBAkA4GwhWSIoCQIg+bIlGFQNAFHuFfgEpA0AssVTQEakDQFqu4wmjtgNA0iM9F908BEDxyonycsMEQHaWJV6o0ARAvqOhD5I+BUAcCQ6lc2QFQOg20oK+qAVAwHv26z74BUAKE3LNof4FQMhBK7jyRQZAOFkxK+mFBkBm7t4yCowGQGpLkcfQwgZA2AgZAyn3BkAKYcd51R8HQLwILvYoIQdACxNNdT5EB0AaHQMoNV0HQPy5lDyfaAdAd7HskmJkB0BcnN0WA0sHQMmmy3l1IwdACmHHedUfB0Am4PiXHekGQCq+siv1mAZAZu7eMgqMBkDxwZe2kQUGQL979us++AVAHAkOpXNkBUB2liVeqNAEQJ95kxXsrARA0iM9F908BEAssVTQEakDQIg+bIlGFQNA4suDQnuBAkDanWi7+3MCQD5Zm/uv7QFAmOaytORZAUD0c8ptGcYAQMLnaopVcwBATgHiJk4yAEBUHfO/BT3/Pyf7LntlRP4/CDgiMm8V/j/AUlGk2O38P3ZRGCaTjfw/dW2AFkLG+z9kvwToJz77PyyIr4irnvo/oODlhicK+j/kot76FHf5Pwyrx1o/7Pg/mL0NbX5P+D8+LDfAgeP3P1DYPN/nJ/c/PmDLs4nj9j8E82tRUQD2P4RKOtsI/fU/7woRSx1G9T+8DZvDutj0P6QoyxCYqvQ/oFOt9fwi9D9wKMo1JLHzP14qeV8qn/M/oUbpxAkp8z+9i5GijdHyP515ItjaoPI/KEP5p42J8j8kocWXsoPyP/ff0VIVZvI/PYyDQflX8j/ai0H7BGHyPyhD+aeNifI/y49K6iSL8j/xT1J9GArzP3AoyjUksfM/B6lZsqrn8z+8DZvDutj0PxxqSYbb4fQ/BPNrUVEA9j/GTCdscZP2P1DYPN/nJ/c/","dtype":"float64","order":"little","shape":[102]}},"selected":{"id":"23801"},"selection_policy":{"id":"23800"}},"id":"23782","type":"ColumnDataSource"},{"attributes":{},"id":"23757","type":"SaveTool"},{"attributes":{},"id":"23744","type":"BasicTicker"},{"attributes":{},"id":"23752","type":"PanTool"},{"attributes":{},"id":"23798","type":"UnionRenderers"},{"attributes":{},"id":"23735","type":"DataRange1d"},{"attributes":{},"id":"23756","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[511]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[511]}},"selected":{"id":"23797"},"selection_policy":{"id":"23796"}},"id":"23770","type":"ColumnDataSource"},{"attributes":{"source":{"id":"23782"}},"id":"23787","type":"CDSView"},{"attributes":{"toolbars":[{"id":"23761"}],"tools":[{"id":"23751"},{"id":"23752"},{"id":"23753"},{"id":"23754"},{"id":"23755"},{"id":"23756"},{"id":"23757"},{"id":"23758"}]},"id":"23806","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"23776"},"glyph":{"id":"23777"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23779"},"nonselection_glyph":{"id":"23778"},"view":{"id":"23781"}},"id":"23780","type":"GlyphRenderer"},{"attributes":{},"id":"23794","type":"BasicTickFormatter"},{"attributes":{},"id":"23795","type":"AllLabels"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23778","type":"Patch"},{"attributes":{},"id":"23737","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null},"id":"23788","type":"Title"},{"attributes":{},"id":"23741","type":"LinearScale"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23773","type":"Patch"},{"attributes":{},"id":"23797","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23760","type":"PolyAnnotation"},{"attributes":{},"id":"23791","type":"BasicTickFormatter"},{"attributes":{},"id":"23800","type":"UnionRenderers"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23777","type":"Patch"},{"attributes":{"overlay":{"id":"23760"}},"id":"23755","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23759","type":"BoxAnnotation"},{"attributes":{},"id":"23754","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23784","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23772","type":"Patch"},{"attributes":{},"id":"23801","type":"Selection"},{"attributes":{"toolbar":{"id":"23806"},"toolbar_location":"above"},"id":"23807","type":"ToolbarBox"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23783","type":"Patch"},{"attributes":{},"id":"23799","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"23770"},"glyph":{"id":"23771"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23773"},"nonselection_glyph":{"id":"23772"},"view":{"id":"23775"}},"id":"23774","type":"GlyphRenderer"},{"attributes":{},"id":"23751","type":"ResetTool"},{"attributes":{"source":{"id":"23776"}},"id":"23781","type":"CDSView"}],"root_ids":["23808"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"deb1fa85-2395-40ad-9676-6221f4f7764b","root_ids":["23808"],"roots":{"23808":"86153b8e-e827-465b-bb16-41438dd57153"}}];
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