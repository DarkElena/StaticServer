 $(function() {
    $("#sendForm").submit(function() {
        var formData = {
            "sender":$("#sender").val(),
            "channel":$("#recipient").val(),
            "url":$("#url").val(),
            "message":$("#message").val()
        };

        $.ajax({
            contentType: 'application/json',
            url:'http://localhost:9080/Slack-1005050/send',
            type:'POST',
            data: $.toJSON(formData),
            success: function(res) {
                alert(res);
            },
            error: function(jqXHR, exception){
                  alert(jqXHR.responseText);
            }
        });
        return false;
    });
});