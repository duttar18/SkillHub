<script type="text/javascript">
    $(document).ready(function(){
        $('.searchButton').click(function(e) {  
            var inputvalue = $(".searchText").val();
            window.location="search?skill="+inputvalue;
        });
        $('.searchText').bind('keypress',function(e){
            if(e.keyCode===13){
                var inputvalue = $(".searchText").val();
                window.location="search?skill="+inputvalue;                
            }
        });
    });
</script> 