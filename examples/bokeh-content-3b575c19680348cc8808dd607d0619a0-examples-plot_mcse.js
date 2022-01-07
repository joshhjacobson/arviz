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
    
      
      
    
      const element = document.getElementById("a5fd242d-e6ef-46f6-8d7f-c204c38ddd1e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a5fd242d-e6ef-46f6-8d7f-c204c38ddd1e' but no matching script tag was found.")
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
                    
                  const docs_json = '{"3cc5069f-9172-4e8e-ba97-32025df823b0":{"defs":[],"roots":{"references":[{"attributes":{"below":[{"id":"41686"}],"center":[{"id":"41689"},{"id":"41693"}],"height":500,"left":[{"id":"41690"}],"output_backend":"webgl","renderers":[{"id":"41753"},{"id":"41755"},{"id":"41756"},{"id":"41757"},{"id":"41760"}],"title":{"id":"41762"},"toolbar":{"id":"41704"},"toolbar_location":null,"width":500,"x_range":{"id":"41678"},"x_scale":{"id":"41682"},"y_range":{"id":"41680"},"y_scale":{"id":"41684"}},"id":"41677","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"41759"}},"id":"41761","type":"CDSView"},{"attributes":{"source":{"id":"41774"}},"id":"41776","type":"CDSView"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41795"},"group":null,"major_label_policy":{"id":"41796"},"ticker":{"id":"41727"}},"id":"41726","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"41759"},"glyph":{"id":"41758"},"group":null,"hover_glyph":null,"view":{"id":"41761"}},"id":"41760","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41762","type":"Title"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41803"},"selection_policy":{"id":"41802"}},"id":"41774","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"41737","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41777","type":"Title"},{"attributes":{"end":1,"start":-0.05},"id":"41716","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41801"},"selection_policy":{"id":"41800"}},"id":"41764","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"41774"},"glyph":{"id":"41773"},"group":null,"hover_glyph":null,"view":{"id":"41776"}},"id":"41775","type":"GlyphRenderer"},{"attributes":{},"id":"41718","type":"LinearScale"},{"attributes":{},"id":"41682","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41787"},"selection_policy":{"id":"41786"}},"id":"41749","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41798"},"group":null,"major_label_policy":{"id":"41799"},"ticker":{"id":"41723"}},"id":"41722","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"41704"},{"id":"41740"}],"tools":[{"id":"41694"},{"id":"41695"},{"id":"41696"},{"id":"41697"},{"id":"41698"},{"id":"41699"},{"id":"41700"},{"id":"41701"},{"id":"41730"},{"id":"41731"},{"id":"41732"},{"id":"41733"},{"id":"41734"},{"id":"41735"},{"id":"41736"},{"id":"41737"}]},"id":"41808","type":"ProxyToolbar"},{"attributes":{},"id":"41720","type":"LinearScale"},{"attributes":{},"id":"41788","type":"UnionRenderers"},{"attributes":{"end":1,"start":-0.05},"id":"41680","type":"DataRange1d"},{"attributes":{},"id":"41723","type":"BasicTicker"},{"attributes":{},"id":"41678","type":"DataRange1d"},{"attributes":{"axis":{"id":"41722"},"coordinates":null,"group":null,"ticker":null},"id":"41725","type":"Grid"},{"attributes":{},"id":"41789","type":"Selection"},{"attributes":{"toolbar":{"id":"41808"},"toolbar_location":"above"},"id":"41809","type":"ToolbarBox"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41755","type":"Span"},{"attributes":{},"id":"41795","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"41726"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41729","type":"Grid"},{"attributes":{},"id":"41727","type":"BasicTicker"},{"attributes":{"source":{"id":"41749"}},"id":"41754","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41750","type":"Circle"},{"attributes":{},"id":"41796","type":"AllLabels"},{"attributes":{"overlay":{"id":"41738"}},"id":"41732","type":"BoxZoomTool"},{"attributes":{},"id":"41731","type":"PanTool"},{"attributes":{},"id":"41730","type":"ResetTool"},{"attributes":{},"id":"41798","type":"BasicTickFormatter"},{"attributes":{},"id":"41736","type":"SaveTool"},{"attributes":{},"id":"41733","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"41722"}],"center":[{"id":"41725"},{"id":"41729"}],"height":500,"left":[{"id":"41726"}],"output_backend":"webgl","renderers":[{"id":"41768"},{"id":"41770"},{"id":"41771"},{"id":"41772"},{"id":"41775"}],"title":{"id":"41777"},"toolbar":{"id":"41740"},"toolbar_location":null,"width":500,"x_range":{"id":"41714"},"x_scale":{"id":"41718"},"y_range":{"id":"41716"},"y_scale":{"id":"41720"}},"id":"41713","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"41739"}},"id":"41734","type":"LassoSelectTool"},{"attributes":{},"id":"41799","type":"AllLabels"},{"attributes":{"tools":[{"id":"41694"},{"id":"41695"},{"id":"41696"},{"id":"41697"},{"id":"41698"},{"id":"41699"},{"id":"41700"},{"id":"41701"}]},"id":"41704","type":"Toolbar"},{"attributes":{},"id":"41735","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41752","type":"Circle"},{"attributes":{},"id":"41687","type":"BasicTicker"},{"attributes":{"children":[{"id":"41809"},{"id":"41807"}]},"id":"41810","type":"Column"},{"attributes":{},"id":"41684","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41784"},"group":null,"major_label_policy":{"id":"41785"},"ticker":{"id":"41687"}},"id":"41686","type":"LinearAxis"},{"attributes":{"callback":null},"id":"41701","type":"HoverTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41738","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"41686"},"coordinates":null,"group":null,"ticker":null},"id":"41689","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41757","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41781"},"group":null,"major_label_policy":{"id":"41782"},"ticker":{"id":"41691"}},"id":"41690","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41756","type":"Span"},{"attributes":{},"id":"41691","type":"BasicTicker"},{"attributes":{},"id":"41800","type":"UnionRenderers"},{"attributes":{"axis":{"id":"41690"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41693","type":"Grid"},{"attributes":{},"id":"41699","type":"UndoTool"},{"attributes":{"tools":[{"id":"41730"},{"id":"41731"},{"id":"41732"},{"id":"41733"},{"id":"41734"},{"id":"41735"},{"id":"41736"},{"id":"41737"}]},"id":"41740","type":"Toolbar"},{"attributes":{},"id":"41801","type":"Selection"},{"attributes":{"overlay":{"id":"41702"}},"id":"41696","type":"BoxZoomTool"},{"attributes":{},"id":"41695","type":"PanTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41789"},"selection_policy":{"id":"41788"}},"id":"41759","type":"ColumnDataSource"},{"attributes":{},"id":"41694","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41749"},"glyph":{"id":"41750"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41752"},"nonselection_glyph":{"id":"41751"},"view":{"id":"41754"}},"id":"41753","type":"GlyphRenderer"},{"attributes":{},"id":"41700","type":"SaveTool"},{"attributes":{},"id":"41697","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"41703"}},"id":"41698","type":"LassoSelectTool"},{"attributes":{},"id":"41714","type":"DataRange1d"},{"attributes":{"source":{"id":"41764"}},"id":"41769","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41702","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"41764"},"glyph":{"id":"41765"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41767"},"nonselection_glyph":{"id":"41766"},"view":{"id":"41769"}},"id":"41768","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41766","type":"Circle"},{"attributes":{},"id":"41781","type":"BasicTickFormatter"},{"attributes":{},"id":"41782","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41771","type":"Span"},{"attributes":{},"id":"41784","type":"BasicTickFormatter"},{"attributes":{},"id":"41802","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41772","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41758","type":"Scatter"},{"attributes":{},"id":"41803","type":"Selection"},{"attributes":{},"id":"41785","type":"AllLabels"},{"attributes":{"children":[[{"id":"41677"},0,0],[{"id":"41713"},0,1]]},"id":"41807","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41751","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41767","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41770","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41703","type":"PolyAnnotation"},{"attributes":{},"id":"41786","type":"UnionRenderers"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41773","type":"Scatter"},{"attributes":{},"id":"41787","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41739","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41765","type":"Circle"}],"root_ids":["41810"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"3cc5069f-9172-4e8e-ba97-32025df823b0","root_ids":["41810"],"roots":{"41810":"a5fd242d-e6ef-46f6-8d7f-c204c38ddd1e"}}];
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