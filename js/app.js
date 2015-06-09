$(function() {

	var PUBLIC_PATH = $("#PUBLIC_PATH").val();
    var directorio = $("#dir").val();

    $('#RegistroForm_username').popover({
        trigger: 'focus'
    });
    $('#RegistroForm_password').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_nombrePropuesta').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_representante').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_cedula').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_telefono').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_celular').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_email').popover({
        trigger: 'focus'
    });
    $('#RegistroForm_email_confirmacion').popover({
        trigger: 'focus'
    });
    $('#RegistroForm_direccion').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_numeroIntegrantes').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_resena').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_video').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_twitter').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_fb').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_web').popover({
        trigger: 'focus'
    });    
    $('#RegistroForm_valor').popover({
        trigger: 'focus'
    });

    $('input[name=yt0]').click(function(e) {
        var numAudio = $("#audio .template-download:not('.ui-state-error')").length;
        var numPerfil = $("#fotoPerfil .template-download:not('.ui-state-error')").length;
        var numFotos = $("#fotos .template-download:not('.ui-state-error')").length;
        var numRider = $("#rider .template-download:not('.ui-state-error')").length;
        var error = 0;
        var mensajeError = "";
        if($("#RegistroForm_area_0").is(':checked')){
            if(numAudio < 2){
                mensajeError += "Debes cargar 2 archivos de audio (.mp3)\n";
                error++;
            }
        }

        if(numPerfil < 1){
            mensajeError += "Debes cargar una foto de perfil\n";
            error++;
        }
        
        if(numFotos < 1){
            mensajeError += "Debes cargar una foto adicional\n";
            error++;
        }

        if(numRider < 1){
            mensajeError += "Debes cargar un archivo Rider";
            error++;
        }

        if(error > 0)
            alert(mensajeError);
        else
            $('#modalConfirmacion').modal();

        e.preventDefault();
    });

    $('#modalConfirmacion').on('shown.bs.modal', function (e) {
        $('#RegistroForm_username').val() == "" ? 
            $('#usuario').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#usuario').css({'color':'green'}).children().html($('#RegistroForm_username').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_password').val() == "" ? 
            $('#password').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#password').css({'color':'green'}).children().html($('#RegistroForm_password').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_nombrePropuesta').val() == "" ? 
            $('#nombre-propuesta').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#nombre-propuesta').css({'color':'green'}).children().html($('#RegistroForm_nombrePropuesta').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_representante').val() == "" ? 
            $('#representante').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#representante').css({'color':'green'}).children().html($('#RegistroForm_representante').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_cedula').val() == "" ? 
            $('#cedula').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#cedula').css({'color':'green'}).children().html($('#RegistroForm_cedula').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_telefono').val() == "" ? 
            $('#telefono').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#telefono').css({'color':'green'}).children().html($('#RegistroForm_telefono').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_celular').val() == "" ? 
            $('#celular').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#celular').css({'color':'green'}).children().html($('#RegistroForm_celular').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_email').val() == "" ? 
            $('#correo').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#correo').css({'color':'green'}).children().html($('#RegistroForm_email').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_email_confirmacion').val() == "" ? 
            $('#correo-confirmacion').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#correo-confirmacion').css({'color':'green'}).children().html($('#RegistroForm_email_confirmacion').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_direccion').val() == "" ? 
            $('#direccion').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#direccion').css({'color':'green'}).children().html($('#RegistroForm_direccion').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('input[type="radio"]:checked').length == 0 ? 
            $('#area').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#area').css({'color':'green'}).children().html($('input[type="radio"]:checked').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        var area = $("input[type='radio']:checked").val();
        switch (area)
        {
            case '1':
                break;
            case '4':
                break;
        }

        $('#RegistroForm_trayectoria').val() == "" ? 
            $('#trayectoria').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#trayectoria').css({'color':'green'}).children().html($('#RegistroForm_trayectoria').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_numeroIntegrantes').val() == "" ? 
            $('#integrantes').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#integrantes').css({'color':'green'}).children().html($('#RegistroForm_numeroIntegrantes').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_resena').val() == "" ? 
            $('#resena').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#resena').css({'color':'green'}).children().html($('#RegistroForm_resena').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $("#fotoPerfil .template-download:not('.ui-state-error')").length == 0 ? 
            $('#foto-perfil').css({'color':'red'}).css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#foto-perfil').css({'color':'green'}).children().html($('#fotoPerfil img').clone()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $("#fotos .template-download:not('.ui-state-error')").length == 0 ? 
            $('#foto-adicional').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#foto-adicional').css({'color':'green'}).children().html($('#fotos p a').clone()).children().each(function(k,v) {
                var cant = ($("#fotos .template-download:not('.ui-state-error')").length-1);
                (cant == k) ? $(v).css({color:'green'}) : $(v).css({color:'green'}).after(', ');
            }).parent().parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_video').val() == "" ? 
            $('#video').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#video').css({'color':'green'}).children().css({color:'green'}).html('<a href="'+$('#RegistroForm_video').val()+'" target="_blank">'+$('#RegistroForm_video').val()+'</a>').parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_twitter').val() == "" ? 
            $('#twitter').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#twitter').css({'color':'green'}).children().css({color:'green'}).html('<a href="'+$('#RegistroForm_twitter').val()+'" target="_blank">'+$('#RegistroForm_twitter').val()+'</a>').parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_fb').val() == "" ? 
            $('#facebook').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#facebook').css({'color':'green'}).children().css({color:'green'}).html('<a href="'+$('#RegistroForm_fb').val()+'" target="_blank">'+$('#RegistroForm_fb').val()+'</a>').parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_web').val() == "" ? 
            $('#web').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#web').css({'color':'green'}).children().html('<a href="'+$('#RegistroForm_web').val()+'" target="_blank">'+$('#RegistroForm_web').val()+'</a>').parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('#RegistroForm_valor').val() == "" ? 
            $('#valor').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('#valor').css({'color':'green'}).children().html($('#RegistroForm_valor').val()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $("#rider .template-download:not('.ui-state-error')").length == 0 ? 
            $('p#rider').css({'color':'red'}).parent().next().children().removeClass('icon-ok-sign').addClass('icon-remove-sign') :
            $('p#rider').css({'color':'green'}).children().html('').html($('#rider a').css({color:'green'}).clone()).parent().parent().next().children().removeClass('icon-remove-sign').addClass('icon-ok-sign');

        $('table > tbody > tr > td > span.icon-remove-sign').length > 0 ? $('#confirmar').attr('disabled','disabled') : $('#confirmar').removeAttr('disabled');
    });

    /*$("#yw0").submit(function(e){
        
        var numAudio = $("#audio .template-download:not('.ui-state-error')").length;
        var numPerfil = $("#fotoPerfil .template-download:not('.ui-state-error')").length;
        var numFotos = $("#fotos .template-download:not('.ui-state-error')").length;
        var numRider = $("#rider .template-download:not('.ui-state-error')").length;
        var error = 0;
        var mensajeError = "";
        if($("#RegistroForm_area_0").is(':checked')){
            if(numAudio < 2){
                mensajeError += "Debes cargar 2 archivos de audio (.mp3)\n";
                error++;
            }
        }

        if(numPerfil < 1){
            mensajeError += "Debes cargar una foto de perfil\n";
            error++;
        }
        
        if(numFotos < 1){
            mensajeError += "Debes cargar una foto adicional\n";
            error++;
        }

        if(numRider < 1){
            mensajeError += "Debes cargar un archivo Rider";
            error++;
        }

        if(error > 0){
            e.preventDefault();
            alert(mensajeError);
        }

    });*/

	$("#terminos").click(function(e){		
		if(!$("#aceptar").is(':checked')){
			e.preventDefault();
			alert("Debes leer y aceptar las condiciones.");
		}		
	});

    $(".area").change(function(){
        var area = $(".area:checked").val();
        switch (area) {
            case "1":
                $("#otrosMusica").attr("disabled","disabled");
                $("#otrosOtro").attr("disabled","disabled");

                $("#areaMusica").fadeIn("slow");
                $("#otrosMusica").removeAttr("disabled");
                $("#otrosOtro").attr("disabled","disabled");
                $("#areaOtros").fadeOut("slow");
            break;
            case "2":
                $("#otrosMusica").attr("disabled","disabled");
                $("#otrosOtro").attr("disabled","disabled");

                $("#areaMusica").fadeOut("slow");
                $("#otrosOtro").attr("disabled","disabled");
                $("#otrosMusica").attr("disabled","disabled");                
                $("#areaOtros").fadeOut("slow");
            break;
            case "3":
                $("#otrosMusica").attr("disabled","disabled");
                $("#otrosOtro").attr("disabled","disabled");

                $("#areaMusica").fadeOut("slow");
                $("#otrosOtro").attr("disabled","disabled");
                $("#otrosMusica").attr("disabled","disabled")
                $("#areaOtros").fadeOut("slow");
            break;
            case "4":
                $("#otrosMusica").attr("disabled","disabled");
                $("#otrosOtro").attr("disabled","disabled");

                $("#areaMusica").fadeOut("slow");
                $("#otrosOtro").removeAttr("disabled");
                $("#otrosMusica").attr("disabled","disabled"); 
                $("#areaOtros").fadeIn("slow");
            break;
            default:
                $("#otrosMusica").attr("disabled","disabled");
                $("#otrosOtro").attr("disabled","disabled");
                $("#areaMusica").fadeOut("slow");
                //$("#otrosOtro").removeAttr("disabled");
                $("#otrosMusica").attr("disabled","disabled"); 
               // $("#areaOtros").fadeIn("slow");
            break;
        }
    }).change();
    
    // Initialize the jQuery File Upload widget:
    $('#fotoPerfil').fileupload({        
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: PUBLIC_PATH + '/convocatoria/fotoPerfil/',
        maxNumberOfFiles: 1,
        previewMaxWidth: 200,
        previewMaxHeight: 200,
        maxFileSize: 10000000,
        limitMultiFileUploadSize: 20000000,
        imageCrop: true,     
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        messages: {
            maxNumberOfFiles: 'Solo se permite una foto de perfil',
            acceptFileTypes: 'No se acepta este tipo de archivo',
            maxFileSize: 'El archivo es demsiado pesado',
            minFileSize: 'El archivo no tiene peso sofuciente'
        }
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fotoPerfil').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    // Load existing files:
    $('#fotoPerfil').addClass('fileupload-processing');
    
    $.ajax({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: $('#fotoPerfil').fileupload('option', 'url'),
        dataType: 'json',
        context: $('#fotoPerfil')[0]
    }).always(function (result) {
        $(this).removeClass('fileupload-processing');
    }).done(function (result) {
        $(this).fileupload('option', 'done')
            .call(this, null, {result: result}); 
    }); 

    $('#fotos').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: PUBLIC_PATH + '/convocatoria/fotos',
        maxNumberOfFiles: 5,
        previewMaxWidth: 200,
        previewMaxHeight: 200,
        maxFileSize: 5000000,
        limitMultiFileUploadSize: 20000000,
        imageCrop: true,   
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,  
        messages: {
            maxNumberOfFiles: 'Solo se permiten 5 fotos adicionales',
            acceptFileTypes: 'No se acepta este tipo de archivo',
            maxFileSize: 'El archivo es demsiado pesado',
            minFileSize: 'El archivo no tiene peso sofuciente'
        }          
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fotos').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    // Load existing files:
    $('#fotos').addClass('fileupload-processing');
    $.ajax({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: $('#fotos').fileupload('option', 'url'),
        dataType: 'json',
        context: $('#fotos')[0]
    }).always(function (result) {
        $(this).removeClass('fileupload-processing');
    }).done(function (result) {
        $(this).fileupload('option', 'done')
            .call(this, null, {result: result});
    }); 

    $('#audio').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: PUBLIC_PATH + '/convocatoria/audio',
        maxNumberOfFiles: 2,
        loadAudioMaxFileSize: 20000000,
        maxFileSize: 20000000,
        minFileSize: 100,
        limitMultiFileUploadSize: 20000000,
        acceptFileTypes: /(\.|\/)(mp3)$/i,
        messages: {
            maxNumberOfFiles: 'Solo se permiten 2 archivos de audio',
            acceptFileTypes: 'No se acepta este tipo de archivo',
            maxFileSize: 'El archivo es demsiado pesado',
            minFileSize: 'El archivo no tiene peso sofuciente'
        }         
    }).bind('fileuploaddone', function(e, data){

        if( data.result.files[0].type != "" )
        {
            $('#archivoAudio').attr('value', data.result);

        }
        else
        {
            console.log("Error file");
        }
    });

    // Enable iframe cross-domain access via redirect option:
    $('#audio').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    // Load existing files:
    $('#audio').addClass('fileupload-processing');
    $.ajax({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: $('#audio').fileupload('option', 'url'),
        dataType: 'json',
        context: $('#audio')[0]

    }).always(function (result) {
        $(this).removeClass('fileupload-processing');
    }).done(function (result) {
        $(this).fileupload('option', 'done')
            .call(this, null, {result: result});
    });

    $('#rider').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: PUBLIC_PATH + '/convocatoria/rider',
        maxNumberOfFiles: 1,
        previewMaxWidth: 200,
        previewMaxHeight: 200,
        limitMultiFileUploadSize: 20000000,
        imageCrop: true,   
        acceptFileTypes: /(\.|\/)(pdf)$/i,  
        messages: {
            maxNumberOfFiles: 'Solo se permite un archivo Rider',
            acceptFileTypes: 'No se acepta este tipo de archivo. Solo PDF',
            maxFileSize: 'El archivo es demsiado pesado',
            minFileSize: 'El archivo no tiene peso sofuciente'
        }          
    });

    // Enable iframe cross-domain access via redirect option:
    $('#rider').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    // Load existing files:
    $('#rider').addClass('fileupload-processing');
    $.ajax({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: $('#rider').fileupload('option', 'url'),
        dataType: 'json',
        context: $('#rider')[0]
    }).always(function (result) {
        $(this).removeClass('fileupload-processing');
    }).done(function (result) {
        $(this).fileupload('option', 'done')
            .call(this, null, {result: result});
    });       

    $('#fotoPerfil table tbody.files').empty();
    $('#fotos table tbody.files').empty();
    $('#audio table tbody.files').empty();
    $('#rider table tbody.files').empty();
});