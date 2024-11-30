export function isElementVisible(element) { 
    const elementTop = element.offsetTop; 
    const elementBottom = elementTop  
        + element.offsetHeight; 
    const viewportTop = window.pageYOffset; 
    const viewportBottom = viewportTop  
        + window.innerHeight; 

    return ( 
        elementBottom > viewportTop && 
        elementTop < viewportBottom
    ); 
} 
