<?php /* @var $this Controller */ 
Yii::app()->clientScript->registerScriptFile("http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/bootstrap.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/vendor/jquery.ui.widget.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/tmpl.min.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/load-image.min.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/canvas-to-blob.min.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/jquery.iframe-transport.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/jquery.fileupload.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/jquery.fileupload-process.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/jquery.fileupload-resize.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/jquery.fileupload-validate.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/jquery.fileupload/jquery.fileupload-ui.js", CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . "/js/app.js", CClientScript::POS_END);
?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=1024">
    <meta name="description" content="Es el momento para presentar tu propuesta artística y hacer parte de la programación cultural de la Feria de las Flores 2014. Este es el formulario para inscribirte como solista, con una agrupación o un colectivo.">
    <meta name="author" content="telemedellín">
    
    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/base.css" />  
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700' rel='stylesheet' type='text/css'>
    <!--[if LTE IE 8]>
      <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" />
      <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/modernizr.custom.95570.js"></script>
    <![endif]-->
    <title><?php echo CHtml::encode($this->pageTitle); ?></title>
  </head>
  <body>
  <header>
    <div id="new-header">
        <h1>
            <?php echo CHtml::link( CHtml::image(Yii::app()->request->baseUrl . '/images/logo.png', 'Feria de las flores Medellín, 2 al 11 de agosto de 2015', array('id' => 'new-logo', 'width' => 219, 'height' => 197)), CHtml::normalizeUrl(Yii::app()->homeUrl) ) ?>
        </h1>
        <h1>
            <?php echo CHtml::link( CHtml::image(Yii::app()->request->baseUrl . '/images/logos-alc.png', 'Alcaldia de Medellín', array('id' => 'new-alcaldia')), CHtml::normalizeUrl(Yii::app()->homeUrl) ) ?>
        </h1>
    </div>
    <span id="addon-logo"></span>
    <div class="fechas">
        <div>
            9 de junio al 26 de junio de 2015
            <strong class="prev">Inicio de invitaci&oacute;n</strong>
        </div>
        <div>
            27 de junio al 9 de julio de 2015
            <strong class="next">Evaluaci&oacute;n</strong>
        </div>
        <div>
            10 de julio de 2015
            <strong class="current">Publicaci&oacute;n de resultados</strong>
        </div>
    </div>
    </header>
    <div class="container">
      <?php echo $content ?>
    </div> <!-- /container -->  
    <footer></footer>
    <input type="hidden" value="<?php echo Yii::app()->request->baseUrl ?>" id="PUBLIC_PATH"/>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-41382664-3', 'directorioartisticomedellin.com');
    ga('send', 'pageview');

  </script>
  </body>
</html>
<script>
    jQuery('#fotoPerfil table tbody.files').empty();
    jQuery('#fotos table tbody.files').empty();
    jQuery('#audio table tbody.files').empty();
    jQuery('#rider table tbody.files').empty();
</script>