$(function(){
    $(document).foundation();
    
    startMeta();
    
    // adds variables for meta tags
    function startMeta(){
        var metadata = JSON.parse($("#meta-data").text());
        
        // set title for meta
        $("#meta-site-global-title").attr("content", metadata.title);
        $("#meta-site-fb-title").attr("content", metadata.title);
        $("#meta-site-twitter-title").attr("content", metadata.title);
        
        // set url for meta
        $("#meta-site-fb-url").attr("content", metadata.url);
        
        // set description for meta
        $("#meta-site-fb-description").attr("content", metadata.description);
        $("#meta-site-twitter-description").attr("content", metadata.description);
        
        // set shared image for meta
        $("#meta-site-fb-image").attr("content", metadata.image);
        $("#meta-site-twitter-image").attr("content", metadata.image);
        
    }
});