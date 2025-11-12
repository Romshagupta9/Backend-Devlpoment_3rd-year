function suspend(studentName){
    // let principal=new principal("romsha");
    // let principal2=new principal("parmeet");  not possible now due to private constructor
    let principal=principal.getPrincipal();
    principal.suspend(studentName);

}

function notify(){
    //let principal=new principal("romsha"); 
    //principal.notify("college bnd rhege ab nachoo");
    let principal=principal.getPrincipal();
}
