function confirm_delete(id, modulo, urldelete){
//<td id="titulo'.$row->id.' > // El campo que contiene el nombre para mostrar en msg de confirmacion."

var titulo = $('#titulo'+id).html();
bootbox.confirm("<h4 >Seguro desea eliminar: "+titulo+"</h4>", function(result) {
if(result==true){
//soft delete
//en el controlador se referecia con iditem, por post
var datos = {iditem:id}
$.ajax({
url: urldelete,
type: "post",
dataType: "json",
data: datos,
success: function(data){
    //alert("success"+data);

    if(data["status"] == 1){
    	
        $('#avisos').html('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button>Item eliminado!</div>');
    	
    	$('#row'+id).hide('slow');
    //ajax delete	
    }else if(data["status"] == 3){
    	$('#avisos').html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button>No cuenta con permisos necesarios!</div>');
    	window.setTimeout(function() { $(".alert-danger").alert('close'); }, 4000);
    }

    
},
error:function(){
    alert("failure");
   
}
});
}
window.setTimeout(function() { $(".alert-success").alert('close'); }, 4000);
});
}