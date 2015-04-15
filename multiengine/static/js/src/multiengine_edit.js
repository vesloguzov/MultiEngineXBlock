function MultiEngineXBlockEdit(runtime, element) {
  $(element).find('.save-button').bind('click', function() {
    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
    var data = {
      display_name: $(element).find('input[name=display_name]').val(),
      question: $(element).find('textarea[id=question-area]').val(),
      max_points: $(element).find('input[name=max_points]').val(),
      correct_answer: $(element).find('textarea[id=correct_answer]').val(),
    };
            $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
      window.location.reload(false);
    });
  });

  $(element).find('.cancel-button').bind('click', function() {
    runtime.notify('cancel', {});
  });

  //tinyMCE.init({selector:"#question-area"});
}