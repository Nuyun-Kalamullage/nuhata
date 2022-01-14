<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quill js</title>
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
  </head>
  <body>

    <div id="editor">

    </div>
    <textarea name="" id="hello" cols="300" rows="500"></textarea>

    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

    <script>
      var toolbarOptions = [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], ['link', 'image']];
      var quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions
        }
      });
      var inputF = document.getElementById("hello")
      quill.on('text-change', function() {
        var delta = quill.getContents();
        var preciousContent = JSON.stringify(delta);
        inputF.value = preciousContent;
        console.log(preciousContent);
      });
    </script>
  </body>
</html>