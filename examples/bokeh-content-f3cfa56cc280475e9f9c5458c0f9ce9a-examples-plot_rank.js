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
    
      
      
    
      const element = document.getElementById("bd5ba067-4b03-435b-abc4-79cb09229adf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bd5ba067-4b03-435b-abc4-79cb09229adf' but no matching script tag was found.")
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
                    
                  const docs_json = '{"ce43f86a-2ec7-4e8b-9026-4740d38684b9":{"defs":[],"roots":{"references":[{"attributes":{},"id":"48072","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47941","type":"PolyAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48070"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48071"},"ticker":{"id":"47959"}},"id":"47958","type":"LinearAxis"},{"attributes":{},"id":"48073","type":"Selection"},{"attributes":{"axis":{"id":"47958"},"coordinates":null,"group":null,"ticker":null},"id":"47961","type":"Grid"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48053"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48054"},"ticker":{"id":"47925"}},"id":"47924","type":"LinearAxis"},{"attributes":{},"id":"47938","type":"SaveTool"},{"attributes":{},"id":"47920","type":"LinearScale"},{"attributes":{"axis":{"id":"47928"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47931","type":"Grid"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48067"},"group":null,"major_label_policy":{"id":"48068"},"ticker":{"id":"48045"}},"id":"47962","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47986","type":"VBar"},{"attributes":{"tools":[{"id":"47932"},{"id":"47933"},{"id":"47934"},{"id":"47935"},{"id":"47936"},{"id":"47937"},{"id":"47938"},{"id":"47939"}]},"id":"47942","type":"Toolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47975","type":"PolyAnnotation"},{"attributes":{},"id":"47937","type":"UndoTool"},{"attributes":{},"id":"47959","type":"BasicTicker"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48050"},"group":null,"major_label_policy":{"id":"48051"},"ticker":{"id":"48013"}},"id":"47928","type":"LinearAxis"},{"attributes":{"overlay":{"id":"47941"}},"id":"47936","type":"LassoSelectTool"},{"attributes":{},"id":"47956","type":"LinearScale"},{"attributes":{"callback":null},"id":"47973","type":"HoverTool"},{"attributes":{},"id":"48074","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48047","type":"Title"},{"attributes":{"axis":{"id":"47924"},"coordinates":null,"group":null,"ticker":null},"id":"47927","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48056"},"selection_policy":{"id":"48055"}},"id":"47985","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"47974"}},"id":"47968","type":"BoxZoomTool"},{"attributes":{},"id":"48075","type":"Selection"},{"attributes":{},"id":"47967","type":"PanTool"},{"attributes":{},"id":"47932","type":"ResetTool"},{"attributes":{},"id":"47966","type":"ResetTool"},{"attributes":{},"id":"47972","type":"SaveTool"},{"attributes":{},"id":"47971","type":"UndoTool"},{"attributes":{"tools":[{"id":"47966"},{"id":"47967"},{"id":"47968"},{"id":"47969"},{"id":"47970"},{"id":"47971"},{"id":"47972"},{"id":"47973"}]},"id":"47976","type":"Toolbar"},{"attributes":{},"id":"47969","type":"WheelZoomTool"},{"attributes":{},"id":"47933","type":"PanTool"},{"attributes":{"overlay":{"id":"47975"}},"id":"47970","type":"LassoSelectTool"},{"attributes":{},"id":"48076","type":"UnionRenderers"},{"attributes":{},"id":"48077","type":"Selection"},{"attributes":{},"id":"47935","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"47940"}},"id":"47934","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48015","type":"Title"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47940","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"47915"},0,0],[{"id":"47951"},0,1]]},"id":"48083","type":"GridBox"},{"attributes":{},"id":"47925","type":"BasicTicker"},{"attributes":{"callback":null},"id":"47939","type":"HoverTool"},{"attributes":{},"id":"47916","type":"DataRange1d"},{"attributes":{"axis":{"id":"47962"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47965","type":"Grid"},{"attributes":{},"id":"47954","type":"LinearScale"},{"attributes":{},"id":"48078","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"48013","type":"FixedTicker"},{"attributes":{},"id":"48079","type":"Selection"},{"attributes":{"below":[{"id":"47924"}],"center":[{"id":"47927"},{"id":"47931"},{"id":"47991"},{"id":"47998"},{"id":"48005"},{"id":"48012"}],"height":331,"left":[{"id":"47928"}],"output_backend":"webgl","renderers":[{"id":"47989"},{"id":"47996"},{"id":"48003"},{"id":"48010"}],"title":{"id":"48015"},"toolbar":{"id":"47942"},"toolbar_location":null,"width":496,"x_range":{"id":"47916"},"x_scale":{"id":"47920"},"y_range":{"id":"47918"},"y_scale":{"id":"47922"}},"id":"47915","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"47922","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47974","type":"BoxAnnotation"},{"attributes":{},"id":"47918","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"48084"},"toolbar_location":"above"},"id":"48085","type":"ToolbarBox"},{"attributes":{},"id":"48057","type":"UnionRenderers"},{"attributes":{},"id":"48058","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"47998","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47993","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"47985"},"glyph":{"id":"47986"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"47988"},"nonselection_glyph":{"id":"47987"},"view":{"id":"47990"}},"id":"47989","type":"GlyphRenderer"},{"attributes":{"source":{"id":"47985"}},"id":"47990","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47988","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47987","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48000","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"47991","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48005","type":"Span"},{"attributes":{},"id":"48059","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48058"},"selection_policy":{"id":"48057"}},"id":"47992","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"47992"},"glyph":{"id":"47993"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"47995"},"nonselection_glyph":{"id":"47994"},"view":{"id":"47997"}},"id":"47996","type":"GlyphRenderer"},{"attributes":{},"id":"48060","type":"Selection"},{"attributes":{"source":{"id":"47992"}},"id":"47997","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47995","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47994","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48007","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48012","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48060"},"selection_policy":{"id":"48059"}},"id":"47999","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"47999"},"glyph":{"id":"48000"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48002"},"nonselection_glyph":{"id":"48001"},"view":{"id":"48004"}},"id":"48003","type":"GlyphRenderer"},{"attributes":{},"id":"48050","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"47999"}},"id":"48004","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48002","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48001","type":"VBar"},{"attributes":{},"id":"48051","type":"AllLabels"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48025","type":"VBar"},{"attributes":{},"id":"48053","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48062"},"selection_policy":{"id":"48061"}},"id":"48006","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48006"},"glyph":{"id":"48007"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48009"},"nonselection_glyph":{"id":"48008"},"view":{"id":"48011"}},"id":"48010","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48006"}},"id":"48011","type":"CDSView"},{"attributes":{},"id":"48054","type":"AllLabels"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48009","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48008","type":"VBar"},{"attributes":{},"id":"48061","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"48045","type":"FixedTicker"},{"attributes":{},"id":"48062","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48073"},"selection_policy":{"id":"48072"}},"id":"48017","type":"ColumnDataSource"},{"attributes":{"source":{"id":"48017"}},"id":"48022","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48017"},"glyph":{"id":"48018"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48020"},"nonselection_glyph":{"id":"48019"},"view":{"id":"48022"}},"id":"48021","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48018","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48030","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48020","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48019","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48032","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48023","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48037","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48075"},"selection_policy":{"id":"48074"}},"id":"48024","type":"ColumnDataSource"},{"attributes":{},"id":"48067","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48085"},{"id":"48083"}]},"id":"48086","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"48024"},"glyph":{"id":"48025"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48027"},"nonselection_glyph":{"id":"48026"},"view":{"id":"48029"}},"id":"48028","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48024"}},"id":"48029","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48027","type":"VBar"},{"attributes":{},"id":"48068","type":"AllLabels"},{"attributes":{},"id":"48055","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48026","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48039","type":"VBar"},{"attributes":{},"id":"48070","type":"BasicTickFormatter"},{"attributes":{},"id":"48056","type":"Selection"},{"attributes":{"below":[{"id":"47958"}],"center":[{"id":"47961"},{"id":"47965"},{"id":"48023"},{"id":"48030"},{"id":"48037"},{"id":"48044"}],"height":331,"left":[{"id":"47962"}],"output_backend":"webgl","renderers":[{"id":"48021"},{"id":"48028"},{"id":"48035"},{"id":"48042"}],"title":{"id":"48047"},"toolbar":{"id":"47976"},"toolbar_location":null,"width":496,"x_range":{"id":"47916"},"x_scale":{"id":"47954"},"y_range":{"id":"47918"},"y_scale":{"id":"47956"}},"id":"47951","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"48038"}},"id":"48043","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48077"},"selection_policy":{"id":"48076"}},"id":"48031","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48031"},"glyph":{"id":"48032"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48034"},"nonselection_glyph":{"id":"48033"},"view":{"id":"48036"}},"id":"48035","type":"GlyphRenderer"},{"attributes":{},"id":"48071","type":"AllLabels"},{"attributes":{"source":{"id":"48031"}},"id":"48036","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48034","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48033","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48079"},"selection_policy":{"id":"48078"}},"id":"48038","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48038"},"glyph":{"id":"48039"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48041"},"nonselection_glyph":{"id":"48040"},"view":{"id":"48043"}},"id":"48042","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"47942"},{"id":"47976"}],"tools":[{"id":"47932"},{"id":"47933"},{"id":"47934"},{"id":"47935"},{"id":"47936"},{"id":"47937"},{"id":"47938"},{"id":"47939"},{"id":"47966"},{"id":"47967"},{"id":"47968"},{"id":"47969"},{"id":"47970"},{"id":"47971"},{"id":"47972"},{"id":"47973"}]},"id":"48084","type":"ProxyToolbar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48041","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48040","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48044","type":"Span"}],"root_ids":["48086"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"ce43f86a-2ec7-4e8b-9026-4740d38684b9","root_ids":["48086"],"roots":{"48086":"bd5ba067-4b03-435b-abc4-79cb09229adf"}}];
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