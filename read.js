// function getUrlParameter(sParam)
// {
//     var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');
//     for (var i = 0; i < sURLVariables.length; i++) 
//     {
//         var sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] == sParam) 
//         {
//             return sParameterName[1];
//         }
//     }
// }​

window.onload=function(){
    $('#bar').hide();
    $('#divCategory').hide();
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == 'url') 
        {
            $('#read').attr('src', sParameterName[1]);
        }
    }

    $('#read').load(function(){
        $('#loader').hide();
    });
};



setTimeout(function() {
    $('#about').hide();
    $('#bar').show();
    $('#divCategory').show();
    window.scrollTo(0,0);
}, 1500);

function setCategory() {}

function setLast() {}