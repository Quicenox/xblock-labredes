/* Javascript for LabRedesXBlock. */
function LabRedesXBlock(runtime, element) {

    function updateCount(result) {
        $('.count', element).text(result.count);
    }

    var handlerUrl = runtime.handlerUrl(element, 'increment_count');

    $('p', element).click(function (eventObject) {
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({ "hello": "world" }),
            success: updateCount
        });
    });

    // ace.config.set('basePath','/static/js/src/src-min-noconflict')
    // var editor = ace.edit('editor');

    // editor.getSession().setMode("ace/mode/python");
    // editor.getSession().setUseWorker(false);
    // editor.setHighlightActiveLine(false);
    // editor.setShowPrintMargin(false);
    // ace.require("/static/js/src/src-min-noconflict/ext-language_tools");

    // editor.setOptions({
    //     enableBasicAutocompletion: true,
    //     enableSnippets: true
    // });
    // editor.setBehavioursEnabled(true);
    // editor.setValue(`#put your code here.`);


    var botonDescarga = document.getElementById('btn_descargar');

    botonDescarga.addEventListener('click', function () {
        var link = document.getElementById('a_descargar');
        link.href = save(editor.getValue());
    }, false);

    //Descargar Archivos
    function save(textFile) {
        var data = new Blob([textFile], { type: 'text/plain' });
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        return textFile;
    }

    //Subir Archivos
    document.getElementById('file-input').addEventListener('change', readSingleFile, true);
    function readSingleFile(e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target.result;
            editor.setValue(contents);
        };
        reader.readAsText(file);
    }

    //Expandir
    $('.logo-max', element).click(function (eventObject) {
        let elem = document.getElementById("editor");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    });









    $(".nav-tabs").on("click", "a", function (e) {
        //     //     e.preventDefault();
        //     //     if (!$(this).hasClass('#tabControl')) {
        //     //         $(this).tab('show');
        //     //     }
    })
        .on("click", "span", function () {
            var anchor = $(this).siblings('a');
            // console.log("object", anchor);
            $(anchor.attr('href')).remove();
            $(this).parent().remove();
            $(".nav-tabs li").children('a').first().click();
        });


    $('#control').click(function () {

        // $(".pestanas").each(function () {
        //         $(this).select('active');
        //     });
        $(".contenidos").each(function () {
            $(this).removeClass('active').css('display', 'none');
        })
        
        var id = ($(".nav-tabs").children().length - 1);
        var pesta = '<li class="nav-item tab col s3"><a class="nav-link active pestanas " id="Tab' + id + '" href="#test' + id + '"><strong>Código ' + id + '</strong> <span> x </span><input type="hidden" name="tab2" value="New Tab" /></a></li>';
        var conte = '<div id="test' + id + '" class="col s12 contenidos active">Texto pestaña nueva ' + id + '</div>';
        $("#tabControl").before(pesta);
        $("#tabs").after(conte);
        $('#tabs').tabs();
        // $('ul.tabs').tabs();
    });
    
    




    // jQuery = jQuery || django.jQuery.noConflict(false);




    //     $(".nav-tabs").on("click", "a", function (e) {
    //     //     e.preventDefault();
    //     //     if (!$(this).hasClass('#tabControl')) {
    //     //         $(this).tab('show');
    //     //     }
    //     })
    //             .on("click", "span", function () {
    //                 var anchor = $(this).siblings('a');
    //                 $(anchor.attr('href')).remove();
    //                 $(this).parent().remove();
    //                 $(".nav-tabs li").children('a').first().click();
    //             });

    //     $('#control').click(function (e) {
    //         e.preventDefault();        

    //         $(".contenidos").each(function () {
    //             $(this).removeClass('active').css('display', 'none');
    //         })

    //         var id = ($(".nav-tabs").children().length - 1); //think about it ;)
    //         // var tabId = 'contact_' + id;
    //         $(this).closest('li').before('<li><a class="nav-link active pestanas id="Tab' + id + '" href="#test' + id + '">New Tab</a> <span> x </span></li>');
    //         var conte = '<div id="test' + id + '" class="col s12 contenidos active">Texto pestaña nueva ' + id + '</div>';

    //     // $('.tab-content').append('<div class="tab-pane contenidos active" id="test' + id + '">Contact Form: New Contact ' + id + '</div>');
    //     $(".tabs").after(conte);
    //     //    $('.nav-tabs li:nth-child(' + id + ') a').click();
    // });


    



}
